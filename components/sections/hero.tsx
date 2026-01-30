"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-base pt-20">
            <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
                {/* Text Content */}
                <div className="flex-1 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1 rounded-full bg-main-green/10 text-main-green font-bold text-sm mb-4">
                            저자본 피자 창업의 새로운 기준
                        </span>
                        <h1 className="font-headline text-5xl md:text-7xl leading-[1.1] text-text-main break-keep">
                            저자본으로 <span className="text-point-red">고매출</span>,<br />
                            오직 <span className="text-main-green">배달/포장</span>으로<br />
                            <span className="relative inline-block">
                                1억 달성
                                <svg className="absolute w-full h-3 bottom-1 left-0 text-cheese-yellow -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.6" />
                                </svg>
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg text-gray-600 font-medium max-w-lg mx-auto md:mx-0"
                    >
                        홀 운영의 스트레스는 버리고, 수익률은 극대화하세요.<br />
                        괴로피자는 사장님의 성공만을 생각합니다.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <Button size="lg" className="shadow-lg shadow-point-red/30">
                            무료 창업 상담 신청하기
                        </Button>
                        <Button variant="outline" size="lg">
                            메뉴 둘러보기
                        </Button>
                    </motion.div>
                </div>

                {/* Visual Content (Floating Pizza) */}
                <div className="flex-1 relative w-full max-w-[600px] aspect-square flex items-center justify-center">
                    {/* Background Blob */}
                    <div className="absolute inset-0 bg-cheese-yellow/20 rounded-full blur-3xl transform scale-75 animate-pulse" />

                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 2, -2, 0]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative w-full h-full drop-shadow-2xl"
                    >
                        <Image
                            src="/images/pizza-hero.png"
                            alt="Delicious Guero Pizza"
                            fill
                            className="object-contain"
                            priority
                        />
                    </motion.div>

                    {/* Floating Badge */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1, type: "spring" }}
                        className="absolute top-10 right-10 bg-white p-4 rounded-full shadow-xl z-20 hidden md:block"
                    >
                        <div className="text-center font-headline">
                            <span className="block text-3xl text-point-red">1억</span>
                            <span className="text-sm text-gray-500 font-sans">월 매출 신화</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
