import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/WhyChooseUs";
import MusicSchoolTestimonials from "./components/MusicSchoolTestimonials";
import UpcommingWebinors from "./components/UpcommingWebinors";
import Instructors from "./components/Instructors";
import Footer from "./components/Footer";

export default function Home() {
  return (
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
     
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MusicSchoolTestimonials/>
      <UpcommingWebinors/>
      <Instructors/>
      <Footer/>
      </main>
  );
}
