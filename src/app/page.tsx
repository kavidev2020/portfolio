import { Typography } from "@/components/ui/typography";
import { Play } from "lucide-react";
import HeroSection from "./(pages)/home/page";
import { Service } from "./(pages)/service/page";
import About from "./(pages)/about/page";

export default function Home() {
  return (
   <div className="scrollbar-hide">
    <div id="home" className="scroll-mt-20">
     <HeroSection/>
     </div>     

    <div id="services" className="scroll-mt-20">
     <Service/> 
    </div> 

    <div id="about" className="scroll-mt-20">
     <About/> 
    </div> 

    <div id="projects" className="scroll-mt-20 h-[510px] bg-green-100">
     Projects
    </div> 

    <div id="blogs" className="scroll-mt-20 h-[510px] bg-blue-100">
     Blogs
    </div> 

   </div>
  );
}
