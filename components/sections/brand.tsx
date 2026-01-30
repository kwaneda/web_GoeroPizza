"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const STATS = [
    { label: "최근 주문수", value: "12,000+" },
    { label: "전체 리뷰수", value: "5,000+" },
    { label: "일 최고 매출액", value: "590만원" },
];

const GRAPH_DATA = [
    { month: "1개월", value: 20 },
    { month: "3개월", value: 45 },
    { month: "6개월", value: 78 },
    { month: "9개월", value: 100 }, // 100% (approx 1억)
];

export function Brand() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const REVIEWS = [
        "/images/review/i_review26.png",
        "/images/review/i_review27.png",
        "/images/review/i_review28.png",
        "/images/review/i_review29.png",
        "/images/review/i_review30.png",
        "/images/review/i_review31.png",
        "/images/review/i_review32.png",
        "/images/review/i_review33.png",
        "/images/review/i_review33-1.png",
        "/images/review/i_review33-2.png",
        "/images/review/i_review33-3.png",
        "/images/review/i_review33-4.png",
    ];

    return (
        <section id="brand" className="py-20 md:py-32 bg-main-green text-white overflow-hidden relative">

            {/* Background Decoration (Optional) */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
                {/* Texture or pattern could go here */}
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 space-y-24">

                {/* 1. Top Header & 3 Value Props */}
                <div className="flex flex-col items-center gap-12">
                    {/* Header Image Area */}
                    <div className="relative w-full max-w-2xl mx-auto h-[200px] md:h-[250px] flex items-end justify-center">
                        {/* Devil Character */}
                        <motion.img
                            src="/images/logo_devil.svg"
                            alt="Guero Devil"
                            className="absolute top-0 w-32 md:w-48 z-10 drop-shadow-2xl"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 120 }}
                        />
                        {/* Title Logo */}
                        <motion.img
                            src="/images/logo_title.svg"
                            alt="Guero Pizza"
                            className="relative z-20 w-64 md:w-96 mb-4"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        />
                    </div>

                    {/* 3 Numbered Value Boxes */}
                    <div className="grid gap-6 w-full max-w-4xl">
                        {[
                            { num: "1", title: "오픈 직후 유명 브랜드를 압도하여", subtitle: "폭발적인 성장세를 보여주고있는 브랜드" },
                            { num: "2", title: "악마의 맛 피자로 사람들의 입맛을", subtitle: "괴롭히자고 탄생한 브랜드 재주문율 1위 !" },
                            { num: "3", title: "최저 원가율로 수익 극대화 !", subtitle: "수익이 남는 창업, 제대로 시작하세요" },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white text-black p-6 md:p-8 rounded-xl shadow-xl flex items-center gap-6 relative overflow-hidden"
                                initial={{ x: idx % 2 === 0 ? -50 : 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15, duration: 0.6 }}
                            >
                                <div className="text-5xl md:text-6xl font-black text-main-green/10 absolute -left-2 -bottom-4 select-none">
                                    {item.num}
                                </div>
                                <div className="text-4xl md:text-5xl font-black text-black z-10 w-16 text-center shrink-0">
                                    {item.num}
                                </div>
                                <div className="z-10 flex flex-col md:flex-row md:items-center gap-1 md:gap-4 w-full">
                                    <h3 className="text-xl md:text-2xl font-bold break-keep">{item.title}</h3>
                                    <p className="md:ml-auto text-lg md:text-xl font-medium text-gray-700 break-keep">{item.subtitle}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 2. Strategy Section (4 Circles) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {[
                        { num: "01", label: "고매출 전략", sub: "오픈 6개월차 1억달성 !" },
                        { num: "02", label: "최저원가율", sub: "낮은 원가율, 높은 마진율" },
                        { num: "03", label: "조리시간 최적화", sub: "초보자도 쉽고 간편한 조리(5분)" },
                        { num: "04", label: "쉬운 운영 관리", sub: "누구나 가능한 시스템" },
                    ].map((circle, idx) => (
                        <motion.div
                            key={idx}
                            className="aspect-square bg-dough-brown/20 rounded-full border-2 border-dough-brown flex flex-col items-center justify-center text-center p-4 shadow-lg backdrop-blur-sm relative group hover:bg-dough-brown/30 transition-colors"
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, type: "spring" }}
                        >
                            <span className="absolute top-4 bg-point-red text-white text-xs font-bold px-2 py-0.5 rounded-full">
                                {circle.num}
                            </span>
                            <h4 className="text-lg md:text-xl font-bold text-cheese-yellow mb-1">{circle.label}</h4>
                            <p className="text-xs md:text-sm text-white/80 break-keep leading-tight">{circle.sub}</p>
                        </motion.div>
                    ))}
                </div>

                {/* 3. Banner Section */}
                <motion.div
                    className="bg-[#D1F9D6] text-black rounded-3xl p-8 md:p-12 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                        <div className="text-left space-y-4">
                            <h3 className="text-2xl md:text-3xl font-black text-main-green leading-tight">
                                매출 정체된 가게 ?<br />
                                <span className="text-black">업종변경으로 다시 시작시키세요 !</span>
                            </h3>
                            <div className="h-px w-20 bg-black/20 my-4"></div>
                            <p className="text-xl font-bold">
                                기존 주방 그대로 ! 추가 비용 없이 수익확장 !
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <img src="/images/i_pizza8.svg" alt="Pizza" className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-xl animate-spin-slow" style={{ animationDuration: '20s' }} />
                        </div>
                    </div>
                </motion.div>

                {/* 4. Review Section (Carousel) */}
                <div className="space-y-8">
                    <div className="text-center space-y-2">
                        <h3 className="text-2xl md:text-3xl font-bold">괴로피자 고객님들의 생생한 리뷰 !</h3>
                        <p className="text-white/70">소비자가 원하고, 소비자가 키워주는 브랜드</p>
                    </div>

                    {/* Infinite Marquee */}
                    <div className="relative w-full overflow-hidden mask-linear-fade">
                        <div className="flex w-max animate-marquee gap-4">
                            {/* Duplicate list 3 times for seamless loop */}
                            {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((src, i) => (
                                <div key={i} className="w-48 md:w-64 shrink-0 rounded-xl overflow-hidden shadow-lg border-2 border-white/10 bg-white">
                                    <img src={src} alt="Review" className="w-full h-auto object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 5. Bottom Sales Projection - Explosive Graph (Animated) */}
                <div className="max-w-6xl mx-auto pt-12 pb-20 relative min-h-[600px] flex items-end justify-center">
                    {/* Background Pizza Grid (Darkened) */}
                    <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-2 opacity-30 z-0 mask-radial-fade">
                        <img src="/images/i_pizza1.svg" className="w-full h-full object-cover grayscale brightness-50" alt="bg" />
                        <img src="/images/i_pizza13.svg" className="w-full h-full object-cover grayscale brightness-50" alt="bg" />
                        <img src="/images/i_pizza1.svg" className="w-full h-full object-cover grayscale brightness-50" alt="bg" />
                        <img src="/images/i_pizza13.svg" className="w-full h-full object-cover grayscale brightness-50" alt="bg" />
                        <img src="/images/i_pizza1.svg" className="w-full h-full object-cover grayscale brightness-50" alt="bg" />
                        <img src="/images/i_pizza13.svg" className="w-full h-full object-cover grayscale brightness-50" alt="bg" />
                    </div>

                    {/* Graph Container */}
                    <div className="relative z-10 w-full h-[450px] md:h-[550px] bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10 p-6 md:p-10 shadow-2xl flex flex-col justify-between">

                        {/* 1. Title */}
                        <div className="text-left mb-6 md:mb-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">월별 매출 추이</h3>
                            <p className="text-white/60">폭발적인 성장세, 직접 확인하세요</p>
                        </div>

                        {/* 2. Graph Area (Grow to fill) */}
                        <div className="relative w-full flex-1 mb-4">
                            {/* Grid Lines */}
                            <div className="absolute inset-x-0 inset-y-0 flex flex-col justify-between pointer-events-none opacity-20">
                                <div className="border-t border-white w-full h-px"></div>
                                <div className="border-t border-white w-full h-px"></div>
                                <div className="border-t border-white w-full h-px"></div>
                                <div className="border-t border-dashed border-white w-full h-px"></div>
                            </div>

                            {/* SVG Path & Dots */}
                            <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                                <defs>
                                    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                                        <stop offset="0%" stopColor="#fff" stopOpacity="0.5" />
                                        <stop offset="50%" stopColor="#F2C94C" />
                                        <stop offset="100%" stopColor="#C4161C" />
                                    </linearGradient>
                                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>

                                {/* Animated Path */}
                                <motion.path
                                    d="M0,50 L20,47 L40,33 L60,42 L80,15 L100,22"
                                    fill="none"
                                    stroke="url(#lineGradient)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    filter="url(#glow)"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                />

                                {/* Animated Dots */}
                                {[
                                    { x: 0, y: 50, huge: false },
                                    { x: 20, y: 47, huge: false },
                                    { x: 40, y: 33, huge: false },
                                    { x: 60, y: 42, huge: false },
                                    { x: 80, y: 15, huge: true },
                                    { x: 100, y: 22, huge: false },
                                ].map((p, i) => (
                                    <motion.circle
                                        key={i}
                                        cx={p.x}
                                        cy={p.y}
                                        r={p.huge ? 3 : 2}
                                        fill={p.huge ? "#C4161C" : "white"}
                                        stroke="white"
                                        strokeWidth="0.5"
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (i * 0.2), type: "spring" }} // Staggered
                                    />
                                ))}
                            </svg>

                            {/* Value Labels (Floating above dots - Animated HTML) */}
                            <div className="absolute inset-0 w-full h-full pointer-events-none">
                                {[
                                    { x: 0, y: 50, val: "6,000만", huge: false },
                                    { x: 20, y: 47, val: "6,400만", huge: false },
                                    { x: 40, y: 33, val: "8,000만", huge: false },
                                    { x: 60, y: 42, val: "7,000만", huge: false },
                                    { x: 80, y: 15, val: "1억 202만", huge: true },
                                    { x: 100, y: 22, val: "9,400만", huge: false },
                                ].map((p, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute transform -translate-x-1/2 -translate-y-[120%] z-20"
                                        style={{ left: `${p.x}%`, top: `${p.y}%` }}
                                        initial={{ opacity: 0, y: 20, scale: 0.5 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + (i * 0.2), type: "spring", stiffness: 200 }}
                                    >
                                        <div className={`
                                            whitespace-nowrap rounded-lg shadow-xl font-bold border flex items-center justify-center
                                            ${p.huge ? 'bg-point-red text-white border-white text-base md:text-2xl px-3 py-2' : 'bg-white text-black border-transparent text-xs md:text-sm px-2 py-1'}
                                        `}>
                                            {p.val}
                                            {p.huge && (
                                                <div className="absolute -top-8 md:-top-12 left-1/2 -translate-x-1/2">
                                                    <motion.span
                                                        className="text-2xl md:text-5xl block"
                                                        initial={{ scale: 0, rotate: -45 }}
                                                        whileInView={{ scale: 1, rotate: 0 }}
                                                        transition={{ delay: 1.5, type: "spring" }}
                                                    >
                                                        🔥
                                                    </motion.span>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* 3. X-Axis Labels (Bottom - Static HTML) */}
                        <div className="relative w-full h-10 border-t border-white/30 flex items-center justify-between px-[0%] text-white/70 font-medium text-xs md:text-base pt-2">
                            <div className="w-0 flex-1 text-center -ml-4">8월</div>
                            <div className="w-0 flex-1 text-center">9월</div>
                            <div className="w-0 flex-1 text-center">10월</div>
                            <div className="w-0 flex-1 text-center">11월</div>
                            <div className="w-0 flex-1 text-center font-bold text-point-red text-lg">12월</div>
                            <div className="w-0 flex-1 text-center -mr-4">1월</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
