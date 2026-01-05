import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactFormV2 = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const cardColors = ["bg-[#FF4D00]", "bg-[#f5c842]", "bg-[#f5c842]", "bg-[#ffffff]"];

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
    if (!isSubmitted) {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleSend = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // creating mailto link
    const subject = encodeURIComponent("Collaboration Request");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );

    const mailtoLink = `mailto:adedijoakinloluwa@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    // Show Thank You message in the current card
    setIsSubmitted(true);

    alert(
      "Email client opened! Your default email application should now be open with the message pre-filled."
    );

    // Reset after 5 seconds
    setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
            name: "",
            email: "",
            message: "",
          });
          setCurrentStep(0);
    }, 5000);
  };

  const getCardStyle = (index: number) => {
    if (index === currentStep) {
      // Current card: Top, full scale, centered
      return {
        zIndex: 10,
        transform: "translate(0, 0) scale(1)",
        transformOrigin: "top center",
        opacity: 1,
      };
    } else if (index > currentStep) {
      // Future cards: Stacked behind
      const offset = index - currentStep;
      return {
        zIndex: 10 - offset,
        // Reduced vertical spacing slightly to accommodate the origin change
        transform: `translate(${offset * 30}px, ${offset * 30}px) scale(${1 - offset * 0.05}) `,
        transition: "transform 0.5s cubic-bezier(.65, .05, 0, 1), opacity 0.5s cubic-bezier(.65, .05, 0, 1)",
        opacity: 1,
        pointerEvents: "none" as const,
      };
    } else {
      // Past cards: Pinned to the right edge of the screen
      const reverseOffset = currentStep - index;
      return {
        zIndex: index + 50, // Higher z-index to be visible
        transform: `translate(calc(50vw - (-45%)), ${reverseOffset * 40}px) scale(${1 - reverseOffset * 0.05})`,
        transformOrigin: "top center",
        transition: "transform 0.5s cubic-bezier(.65, .05, 0, 1), opacity 0.5s cubic-bezier(.65, .05, 0, 1)",
        opacity: 1,
        cursor: "pointer",
      };
    }
  };

  return (
    <div className="w-full  flex flex-col justify-center items-center">
      <div className="relative w-full lg:w-[600px] min-h-[calc(100vh-500px)]">
        {/* Card 1: Name */}
        <div
            className={`absolute w-full lg:w-[600px] min-h-[600px] ${cardColors[0]} border-2 border-black p-8 transition-all duration-500 ease-in-out flex flex-col justify-between  `}
            style={getCardStyle(0)}
            onClick={(e) => 0 < currentStep && handleBack(e)}
        >
            <div>
                <label className="block p-heading  mb-4 font-instrument">FIRST NAME</label>
                <input
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`w-full border-2 border-black p-4 bg-[#fbf7f1] text-gray-800 placeholder-gray-400 mb-2 focus:outline-none ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && <p className="text-white text-xs font-bold bg-black p-1 inline-block mt-1">{errors.name}</p>}
            </div>
            
            <div className="flex justify-between items-center">
                 <button className="opacity-50 cursor-not-allowed border-2 border-gray-400 text-gray-400 px-6 py-2 font-bold" disabled>BACK</button>
                <button
                onClick={handleNext}
                className="bg-[#f5c842] border-2 border-black px-8 py-2 font-bold hover:bg-yellow-400 transition-colors cursor-pointer"
                >
                NEXT
                </button>
            </div>
        </div>

        {/* Card 2: Email */}
        <div
            className={`absolute w-full min-h-[600px] ${cardColors[1]} border-2 border-black p-8 transition-all duration-500 ease-in-out flex flex-col justify-between  `}
            style={getCardStyle(1)}
            onClick={(e) => 1 < currentStep && handleBack(e)}
        >
            <div>
                <label className="block text-sm font-bold mb-4 font-instrument">EMAIL</label>
                <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full border-2 border-black p-4 bg-[#fbf7f1] text-gray-800 placeholder-gray-400 mb-2 focus:outline-none ${errors.email ? 'border-red-500' : ''}`}
                />
                 {errors.email && <p className="text-white text-xs font-bold bg-black p-1 inline-block mt-1">{errors.email}</p>}
            </div>

            <div className="flex justify-between">
                <button
                onClick={handleBack}
                className="border-2 border-black px-6 py-2 font-bold bg-transparent hover:bg-black hover:text-white transition-colors cursor-pointer"
                >
                BACK
                </button>
                <button
                onClick={handleNext}
                className="bg-[#f5c842] border-2 border-black px-8 py-2 font-bold hover:bg-yellow-400 transition-colors cursor-pointer"
                >
                NEXT
                </button>
            </div>
        </div>

        {/* Card 3: Message */}
        <div
            className={`absolute w-full min-h-[600px] ${cardColors[2]} border-2 border-black p-8 transition-all duration-500 ease-in-out flex flex-col justify-between  `}
            style={getCardStyle(2)}
            onClick={(e) => 2 < currentStep && handleBack(e)}
        >
            <div className="flex flex-col h-full">
                <label className="block text-sm font-bold mb-4 font-instrument">MESSAGE</label>
                <textarea
                placeholder="Enter your message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className={`w-full border-2 border-black p-4 bg-[#fbf7f1] text-gray-800 placeholder-gray-400 mb-2 flex-grow resize-none focus:outline-none ${errors.message ? 'border-red-500' : ''}`}
                />
                 {errors.message && <p className="text-white text-xs font-bold bg-black p-1 inline-block mt-1 self-start">{errors.message}</p>}
                 
                  <div className="flex justify-between mt-auto pt-4">
                    <button
                    onClick={handleBack}
                     className="border-2 border-black px-6 py-2 font-bold bg-transparent hover:bg-black hover:text-white transition-colors cursor-pointer"
                    >
                    BACK
                    </button>
                    <button
                    onClick={handleNext}
                    className="bg-[#f5c842] border-2 border-black px-8 py-2 font-bold hover:bg-yellow-400 transition-colors cursor-pointer"
                    >
                    NEXT
                    </button>
                </div>
            </div>
        </div>

        {/* Card 4: Review/Final */}
        <div
            className={`absolute w-full min-h-[600px] ${cardColors[3]} border-2 border-black p-8 transition-all duration-500 ease-in-out flex flex-col text-left  `}
            style={getCardStyle(3)}
            onClick={(e) => 3 < currentStep && handleBack(e)}
        >
            {!isSubmitted ? (
                <>
                    <h2 className="text-lg font-bold mb-6 font-instrument">YOUR MESSAGE TO SÈYÍ, THE POET</h2>
                    
                    <div className="space-y-4 flex-grow overflow-y-auto pr-2 custom-scrollbar">
                        <div>
                            <label className="block text-xs text-gray-600 mb-1 font-bold">NAME</label>
                            <div className="border-2 border-black p-3 bg-[#fbf7f1]">
                                <p className="text-gray-900 font-medium truncate">{formData.name || 'NAME'}</p>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs text-gray-600 mb-1 font-bold">EMAIL</label>
                            <div className="border-2 border-black p-3 bg-[#fbf7f1]">
                                <p className="text-gray-900 font-medium truncate">{formData.email || 'EMAIL ADDRESS'}</p>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs text-gray-600 mb-1 font-bold">MESSAGE</label>
                            <div className="border-2 border-black p-3 bg-[#fbf7f1] min-h-[80px]">
                                <p className="text-gray-900 font-medium break-words text-sm whitespace-pre-wrap">{formData.message || 'MESSAGE HERE'}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between mt-6 pt-2">
                        <button
                        onClick={handleBack}
                        className="border-2 border-black px-6 py-2 font-bold bg-transparent hover:bg-black hover:text-white transition-colors cursor-pointer"
                        >
                        BACK
                        </button>
                        <button
                        onClick={handleSend}
                        className="bg-[#f5c842] text-black px-8 py-2 font-bold border-2 border-black hover:bg-yellow-400 transition-colors cursor-pointer"
                        >
                        SEND
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

export default ContactFormV2;
