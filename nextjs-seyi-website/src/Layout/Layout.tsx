import Header from "../components/Header/Header";
// import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
// import ScrollToTop from "../utils/ScrollToTop";
import { LenisProvider } from "../contexts/LenisContext";
// import CustomCursor from "../components/CustomCursor";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LenisProvider>
      <Header />
      <main>
        {children}
      </main>
      {/* <ScrollToTop /> */}
      {/* <CustomCursor />  */}
      <Footer />
    </LenisProvider>
  );
};

export default Layout;
