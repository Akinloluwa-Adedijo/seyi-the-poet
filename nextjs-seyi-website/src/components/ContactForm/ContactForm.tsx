'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const cardColors = ["bg-accent-1", "bg-accent-2", "bg-accent-1", "bg-accent-2"];



  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<FormData> = {};
    let isValid = true;

    if (step === 0) {
      if (!formData.name.trim()) {
        newErrors.name = "Name is required";
        isValid = false;
      }
    } else if (step === 1) {
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
        isValid = false;
      }
    } else if (step === 2) {
      if (!formData.message.trim()) {
        newErrors.message = "Message is required";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSend = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    // Derived simple subject since API expects it
    const data = {
      access_key: "58867c13-a8a0-41e0-aeeb-d43fac5cbe07",
      email: formData.email,
      subject: "New Message from " + formData.name,
      message: formData.message,
      botcheck: "",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        // Auto-close / reset after 5 seconds matching the "close automatically" text
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: "",
                email: "",
                message: "",
            });
            setCurrentStep(0);
        }, 5000);
      } else {
        console.error("Submission failed", result);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
       console.error("Error submitting form", error);
       alert("Something went wrong. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        // Allow Shift+Enter for newlines in textarea
        if (e.shiftKey) return;
        
        e.preventDefault();
        if (currentStep === 3) {
          handleSend(e as unknown as React.MouseEvent);
        } else {
          handleNext(e as unknown as React.MouseEvent);
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        handleBack(e as unknown as React.MouseEvent);
      } else if (e.key === "Backspace") {
        const target = e.target as HTMLElement;
        if (target.tagName !== "INPUT" && target.tagName !== "TEXTAREA") {
           // Prevent browser back
           // Actually backspace navigation is deprecated in many browsers but valid to prevent specifically if we handle it
           // If we don't preventDefault, it might go back in history?
           // The user explicitly asked "backspace to trigger back button".
           // I'll preventDefault to be safe and trigger my back logic.
          e.preventDefault();
          handleBack(e as unknown as React.MouseEvent);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentStep, formData, isSubmitted, isSubmitting]);

  const getCardStyle = (index: number) => {
    if (index === currentStep) {
      // Current card: Top, full scale, centered
      return {
        zIndex: 10,
        transform: "translate(0, 0) scale(1)",
        transformOrigin: "top center",
        opacity: 1,
        transition: "transform 0.5s cubic-bezier(.65, .05, 0, 1), opacity 0.5s cubic-bezier(.65, .05, 0, 1)",
      };
    } else if (index > currentStep) {
      // Future cards: Horizontal sliding to the right
      const offset = index - currentStep;
      return {
        zIndex: 10 - offset,
        transform: `translateX(${offset * 100}%) scale(${1 - offset * 0.1})`,
        transformOrigin: "top center",
        transition: "transform 0.5s cubic-bezier(.65, .05, 0, 1), opacity 0.5s cubic-bezier(.65, .05, 0, 1)",
        opacity: offset === 1 ? 0.5 : 0,
        pointerEvents: "none" as const,
      };
    } else {
      // Past cards: Horizontal sliding to the left
      const reverseOffset = currentStep - index; // positive value (1, 2...)
      // original offset was negative
      const offset = index - currentStep; // negative
      return {
        zIndex: 10, 
        transform: `translateX(${offset * 100}%) scale(${1 - reverseOffset * 0.1})`,
        transformOrigin: "top center",
        transition: "transform 0.5s cubic-bezier(.65, .05, 0, 1), opacity 0.5s cubic-bezier(.65, .05, 0, 1)",
        opacity: reverseOffset === 1 ? 0.5 : 0,
        cursor: "pointer",
      };
    }
  };

  return (
    <div className="w-full mx-auto flex flex-col justify-center items-center overflow-hidden">
      <div className="relative w-full max-w-[500px]  min-h-[500px] mx-auto ">
        {/* Card 1: Name */}
        <div
            className={`absolute w-full h-full ${cardColors[0]} border-2 border-black p-4  transition-all duration-500 flex flex-col justify-between`}
            style={getCardStyle(0)}
        >
            <div>
                <label className="block text-sm font-bold mb-4">NAME</label>
                <input
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`w-full border-2 border-black p-4 bg-[#f5f0e8] text-gray-600 placeholder-gray-400 mb-2 ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && <p className="text-white text-sm font-bold bg-black p-1 inline-block">{errors.name}</p>}
            </div>
            
            <div className="flex justify-between items-center">
                <Link href="/" className="text-xs font-bold underline">RETURN HOME</Link>
                <button
                onClick={handleNext}
                className="bg-[#f5c842] border-2 border-black px-8 py-2 font-bold"
                >
                NEXT
                </button>
            </div>
        </div>

        {/* Card 2: Email */}
        <div
            className={`absolute w-full h-full ${cardColors[1]} border-2 border-black p-8 transition-all duration-500 flex flex-col justify-between`}
            style={getCardStyle(1)}
        >
            <div>
                <label className="block text-sm font-bold mb-4">EMAIL</label>
                <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full border-2 border-black p-4 bg-[#f5f0e8] text-gray-600 placeholder-gray-400 mb-2 ${errors.email ? 'border-red-500' : ''}`}
                />
                 {errors.email && <p className="text-white text-sm font-bold bg-black p-1 inline-block">{errors.email}</p>}
            </div>

            <div className="flex justify-between">
                <button
                onClick={handleBack}
                className="border-2 border-black px-6 py-2 font-bold"
                >
                BACK
                </button>
                <button
                onClick={handleNext}
                className="bg-[#f5c842] border-2 border-black px-8 py-2 font-bold"
                >
                NEXT
                </button>
            </div>
        </div>

        {/* Card 3: Message - Black background */}
        <div
            className={`absolute w-full h-full ${cardColors[2]} border-2 border-white p-8 transition-all duration-500 flex flex-col justify-between`}
            style={getCardStyle(2)}
        >
            <div>
                <label className="block text-sm font-bold mb-4 text-white">MESSAGE</label>
                <textarea
                placeholder="Enter your message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className={`w-full border-2 border-white p-4 bg-transparent text-white placeholder-gray-400 mb-2 h-48 resize-none focus:outline-none ${errors.message ? 'border-red-500' : ''}`}
                />
                 {errors.message && <p className="text-black text-sm font-bold bg-white p-1 inline-block">{errors.message}</p>}
            </div>

            <div className="flex justify-between">
                <button
                onClick={handleBack}
                className="border-2 border-white text-white px-6 py-2 font-bold"
                >
                BACK
                </button>
                <button
                onClick={handleNext}
                className="bg-[#f5c842] border-2 border-black px-8 py-2 font-bold text-black"
                >
                REVIEW
                </button>
            </div>
        </div>

        {/* Card 4: Review/Final */}
        <div
            className={`absolute w-full h-full ${cardColors[3]} border-2 border-black p-8 transition-all duration-500 flex flex-col`}
            style={getCardStyle(3)}
        >
            {!isSubmitted ? (
                <>
                    <h3 className=" font-bold mb-6">YOUR MESSAGE TO SÈYÍ, THE POET</h3>
                    
                    <div className="space-y-4 flex-grow overflow-y-auto pr-2 custom-scrollbar">
                        <div>
                            <label className="block text-xs text-gray-600 mb-1 font-bold">NAME</label>
                            <div className="border-2 border-black p-3 bg-white">
                                <p className="text-gray-900 font-medium truncate">{formData.name || 'NAME'}</p>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs text-gray-600 mb-1 font-bold">EMAIL</label>
                            <div className="border-2 border-black p-3 bg-white">
                                <p className="text-gray-900 font-medium truncate">{formData.email || 'EMAIL ADDRESS'}</p>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs text-gray-600 mb-1 font-bold">MESSAGE</label>
                            <div className="border-2 border-black p-3 bg-white min-h-[80px]">
                                <p className="text-gray-900 font-medium break-words text-sm whitespace-pre-wrap">{formData.message || 'MESSAGE HERE'}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between mt-4 bg-[#f5c842] pt-2">
                        <button
                        onClick={handleBack}
                        className="border-2 border-black px-6 py-2 font-bold bg-white"
                        >
                        BACK
                        </button>
                        <button
                        onClick={handleSend}
                        className="bg-black text-white px-8 py-2 font-bold border-2 border-black hover:bg-gray-800 transition-colors"
                        disabled={isSubmitting}
                        >
                        {isSubmitting ? 'SENDING...' : 'SEND'}
                        </button>
                    </div>
                </>
            ) : (
                <div className="flex flex-col justify-center items-center text-center h-full">
                     <h2 className="text-3xl font-bold font-instrument mb-4 text-black">THANK YOU!</h2>
                    <p className="text-lg font-bold text-black mb-8">Your message has been sent to Sèyí.</p>
                    <p className="text-sm text-black">This card will close automatically.</p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
