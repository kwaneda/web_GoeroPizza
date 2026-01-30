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

    return (
        <section id="brand" className="py-20 md:py-32 bg-main-green text-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative">

                {/* Top Headings */}
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-dough-brown font-headline text-3xl md:text-5xl font-black tracking-tight"
                    >
                        투자금은 단돈 2,000만원
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl font-bold text-white/90"
                    >
                        본점은 이렇게 시작하였습니다!
                    </motion.p>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-3 gap-8 items-center mb-20" ref={ref}>

                    {/* Left Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-right md:text-right space-y-2 hidden md:block"
                    >
                        <p className="text-lg font-medium leading-relaxed break-keep">
                            오픈하고 빠른 시일내에<br />
                            유명한 브랜드들을 제치고<br />
                            <span className="text-cheese-yellow font-bold">무서운 속도</span>로<br />
                            빠른 성장을 보여주고 있는
                        </p>
                        <p className="text-2xl font-headline mt-2">괴로피자!</p>
                    </motion.div>

                    {/* Center Graph (Replaces Speech Bubble) */}
                    <div className="relative h-64 w-full bg-white/5 rounded-2xl border border-white/10 p-6 flex items-end justify-between gap-2 md:gap-4 shadow-2xl backdrop-blur-sm">
                        {/* Grid Lines */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none opacity-20">
                            <div className="border-t border-dashed border-white w-full h-px"></div>
                            <div className="border-t border-dashed border-white w-full h-px"></div>
                            <div className="border-t border-dashed border-white w-full h-px"></div>
                            <div className="border-t border-dashed border-white w-full h-px"></div>
                        </div>

                        {GRAPH_DATA.map((item, index) => (
                            <div key={item.month} className="relative flex-1 h-full flex flex-col justify-end group">
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={isInView ? { height: `${item.value}%` } : {}}
                                    transition={{ duration: 2, delay: 0.5 + (index * 0.2), ease: "easeOut" }}
                                    className="w-full bg-gradient-to-t from-point-red to-orange-400 rounded-t-md relative min-h-[4px]"
                                >
                                    {/* Value Tooltip (Static for visibility) */}
                                    {index === 3 && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ delay: 1.5 }}
                                            className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-point-red font-bold text-xs md:text-sm py-1 px-2 rounded whitespace-nowrap shadow-lg"
                                        >
                                            1억 달성!
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
                                        </motion.div>
                                    )}
                                </motion.div>
                                <span className="text-xs text-white/70 text-center mt-2 font-medium">{item.month}</span>
                            </div>
                        ))}
                    </div>

                    {/* Right Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-left space-y-2 hidden md:block"
                    >
                        <p className="text-lg font-medium leading-relaxed break-keep">
                            피자로 사람들의 입맛을<br />
                            괴롭히고자 탄생한 브랜드
                        </p>
                        <p className="text-cheese-yellow text-xl font-bold mt-1">재주문율 1위 !!</p>
                    </motion.div>

                    {/* Mobile Text (Visible only on small screens) */}
                    <div className="md:hidden text-center space-y-4 col-span-1">
                        <p className="text-base text-white/90">
                            빠른 성장, <span className="text-cheese-yellow font-bold">재주문율 1위</span><br />
                            괴로피자가 증명합니다.
                        </p>
                    </div>
                </div>

                {/* Bottom Stats */}
                <div className="grid grid-cols-3 gap-4 text-center border-t border-white/10 pt-12 pb-12">
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 * i }}
                        >
                            <div className="text-white/60 text-sm md:text-lg mb-1 md:mb-2 font-medium">{stat.label}</div>
                            <div className="text-xl md:text-3xl font-headline font-bold">{stat.value}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Final Strong Message */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center pt-8"
                >
                    <p className="text-2xl md:text-3xl font-bold text-white/90 mb-2">월 최고매출 액</p>
                    <p className="text-4xl md:text-6xl font-headline text-white">
                        오픈 9개월 차 <span className="text-cheese-yellow decoration-point-red decoration-4 underline underline-offset-8">1억 132만원</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
