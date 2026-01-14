import Header from "../components/Header/Header";
// import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
// import ScrollToTop from "../utils/ScrollToTop";
import { LenisProvider } from "../contexts/LenisContext";
import { AnimatePresence } from "motion/react";
// import CustomCursor from "../components/CustomCursor";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LenisProvider>
      <Header />
      <main className="flex flex-col gap-10"></main>

      <Footer />
    </LenisProvider>
  );
};

export default Layout;
