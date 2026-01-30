import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Brand } from "@/components/sections/brand";
import { Menu } from "@/components/sections/menu";
import { Franchise } from "@/components/sections/franchise";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-base font-sans selection:bg-point-red selection:text-white">
      <Navbar />
      <Hero />
      <Brand />
      <Menu />
      <Franchise />
      <Footer />
    </main>
  );
}
