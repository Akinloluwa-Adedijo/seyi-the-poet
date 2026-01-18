import Header from "../components/Header/Header";
// import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
// import ScrollToTop from "../utils/ScrollToTop";
import { LenisProvider } from "../contexts/LenisContext";
import TransitionProvider from "../providers/TransitionProvider";
// import CustomCursor from "../components/CustomCursor";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LenisProvider>
      <TransitionProvider>
        <Header />
        <main className="flex flex-col gap-10 lg:gap-20">{children}</main>
        <Footer />
      </TransitionProvider>
    </LenisProvider>
  );
};

export default Layout;
