"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const MENU_ITEMS = [
    {
        id: 8,
        name: "괴로 콤비네이션",
        description: "남녀노소 누구나 좋아하는 괴로피자의 대표 시그니처",
        image: "/images/i_pizza8.svg",
        tag: "BEST",
    },
    {
        id: 9,
        name: "폭탄 페퍼로니",
        description: "빈틈없이 꽉 채운 페퍼로니의 짭짤한 감칠맛",
        image: "/images/i_pizza9.svg",
        tag: "HIT",
    },
    {
        id: 10,
        name: "리얼 치즈 매니아",
        description: "자연산 치즈가 듬뿍, 고소함의 끝판왕",
        image: "/images/i_pizza10.svg",
        tag: null,
    },
    {
        id: 13,
        name: "핫 스파이시 불고기",
        description: "한국인의 입맛을 저격하는 매콤한 불고기 토핑",
        image: "/images/i_pizza13.svg",
        tag: "HOT",
    },
    {
        id: 14,
        name: "스위트 고구마",
        description: "달콤한 고구마 무스와 치즈의 환상적인 조화",
        image: "/images/i_pizza14.svg",
        tag: "NEW",
    },
];

export function Menu() {
    return (
        <section id="menu" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-6">

                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-point-red font-bold tracking-widest uppercase text-sm"
                    >
                        Premium Menu
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-text-main font-headline text-3xl md:text-5xl font-black"
                    >
                        괴로피자 시그니처
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 max-w-2xl mx-auto"
                    >
                        매출 1억 신화의 주역들. 한 번 맛보면 잊을 수 없는 중독성 있는 맛으로<br className="hidden md:block" />
                        재주문율 1위를 기록하고 있습니다.
                    </motion.p>
                </div>

                {/* Menu Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {MENU_ITEMS.map((pizza, index) => (
                        <motion.div
                            key={pizza.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative bg-bg-base rounded-3xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Image Area */}
                            <div className="relative aspect-square mb-6 overflow-visible">
                                {/* Circle Background */}
                                <div className="absolute inset-4 bg-white rounded-full shadow-inner opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <Image
                                    src={pizza.image}
                                    alt={pizza.name}
                                    fill
                                    className="object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                                />

                                {/* Tag */}
                                {pizza.tag && (
                                    <div className={cn(
                                        "absolute top-0 right-0 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg",
                                        pizza.tag === "BEST" ? "bg-point-red" :
                                            pizza.tag === "HIT" ? "bg-main-green" :
                                                pizza.tag === "HOT" ? "bg-orange-500" : "bg-cheese-yellow text-text-main"
                                    )}>
                                        {pizza.tag}
                                    </div>
                                )}
                            </div>

                            {/* Text Content */}
                            <div className="text-center space-y-2">
                                <h3 className="text-xl font-headline font-bold text-text-main group-hover:text-point-red transition-colors">
                                    {pizza.name}
                                </h3>
                                <p className="text-sm text-gray-500 word-keep">
                                    {pizza.description}
                                </p>
                            </div>

                            {/* Price (Mockup) */}
                            <div className="mt-6 text-center">
                                <span className="inline-block px-4 py-2 border border-black/10 rounded-lg text-sm font-bold text-text-main group-hover:bg-text-main group-hover:text-white transition-colors cursor-pointer">
                                    자세히 보기
                                </span>
                            </div>
                        </motion.div>
                    ))}

                    {/* Call to Action Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="bg-text-main rounded-3xl p-8 flex flex-col justify-center items-center text-center text-white space-y-6"
                    >
                        <div className="space-y-2">
                            <p className="text-cheese-yellow font-bold text-lg">더 많은 메뉴가 궁금하다면?</p>
                            <h3 className="text-2xl font-headline font-bold">
                                전체 메뉴판<br />다운로드
                            </h3>
                        </div>
                        <button className="bg-white text-text-main px-8 py-3 rounded-full font-bold hover:bg-point-red hover:text-white transition-colors duration-300">
                            PDF 받기
                        </button>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
