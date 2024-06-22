import HeroSection from "@/components/Hero";
import Featured from "@/components/Featured";
import Testimonials from "@/components/Testimonial";


export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <Featured />
      <Testimonials />
   </main>
  );
}
