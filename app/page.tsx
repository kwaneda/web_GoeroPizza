import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Brand } from "@/components/sections/brand";
import { Menu } from "@/components/sections/menu";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-base font-sans selection:bg-point-red selection:text-white">
      <Navbar />
      <Hero />
      <Brand />
      <Menu />

      {/* Fallback space to demonstrate scroll for sticky nav */}
      {/* <div className="min-h-screen grid places-items-center text-gray-400">
        (다음 섹션들이 이곳에 추가될 예정입니다)
      </div> */}

      <Footer />
    </main>
  );
}
