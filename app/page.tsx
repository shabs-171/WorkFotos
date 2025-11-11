import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/main/HeroSection";
import Main from "./components/main/main";

export default function Home() {
  return (
    <div >
      {/* ✅ Header should be full width */}
      
      

      {/* ✅ Main content should be full width - REMOVED max-w-3xl */}
      
        <Main/>
      

      {/* ✅ Footer should be full width */}
    
        
      
    </div>
  );
}