"use client";

import { CheckCircle2, Coins, Hammer, UtensilsCrossed } from "lucide-react";
import { motion } from "framer-motion";

const BENEFITS = [
    {
        icon: Coins,
        title: "가맹비 0원",
        description: "초기 창업 부담을 확 줄였습니다.\n선착순 100호점까지 가맹비 전액 면제!",
    },
    {
        icon: CheckCircle2,
        title: "로열티 0원",
        description: "매출이 올라도 로열티는 0원.\n점주님의 순수익을 최우선으로 생각합니다.",
    },
    {
        icon: Hammer,
        title: "인테리어 자율",
        description: "본사 강요 없는 자율 시공 가능.\n합리적인 비용으로 창업하세요.",
    },
    {
        icon: UtensilsCrossed,
        title: "주방기기 재사용",
        description: "기존에 쓰던 냉장고, 오븐이 있다면?\n그대로 사용하셔도 좋습니다.",
    },
];

const COST_ITEMS = [
    { item: "가맹비", cost: "0원", note: "100호점 한정 면제 (면제)" },
    { item: "교육비", cost: "50만원", note: "조리 및 운영 교육 포함" },
    { item: "로열티", cost: "0원", note: "평생 면제" },
    { item: "인테리어", cost: "자율 시공", note: "평당 감리비 없음" },
    { item: "주방기기/집기", cost: "자율 구매", note: "기존 보유분 사용 가능" },
    { item: "간판/사인물", cost: "250만원", note: "내외부 사인물 일체 (실측 후 변동 가능)" },
    { item: "초도물품", cost: "350만원", note: "식자재 및 포장용기 등" },
];

export function Franchise() {
    return (
        <section id="franchise" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-black font-headline text-text-main mb-4"
                    >
                        왜 <span className="text-point-red">괴로피자</span>인가요?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 break-keep"
                    >
                        거품을 뺀 합리적인 창업 비용과 점주님을 위한 상생 정책.<br />
                        저자본 고매출의 기적, 지금 경험해보세요.
                    </motion.p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {BENEFITS.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center"
                        >
                            <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <benefit.icon className="w-7 h-7 text-point-red" />
                            </div>
                            <h3 className="text-xl font-bold text-text-main mb-3">{benefit.title}</h3>
                            <p className="text-gray-500 whitespace-pre-line text-sm leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Cost Table Section */}
                <div className="max-w-4xl mx-auto">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold text-text-main mb-8 text-center"
                    >
                        예상 창업 비용 안내
                    </motion.h3>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="py-4 px-6 text-sm font-bold text-gray-700 w-1/4">구분</th>
                                        <th className="py-4 px-6 text-sm font-bold text-gray-700 w-1/4">비용</th>
                                        <th className="py-4 px-6 text-sm font-bold text-gray-700 w-1/2">비고</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {COST_ITEMS.map((item, index) => (
                                        <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="py-4 px-6 text-gray-800 font-medium">{item.item}</td>
                                            <td className="py-4 px-6 text-point-red font-bold">{item.cost}</td>
                                            <td className="py-4 px-6 text-gray-500 text-sm">{item.note}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-red-50 p-4 text-center text-sm text-point-red font-medium">
                            * 별도 공사: 철거, 전기증설, 가스, 냉난방기, 화장실 등 (현장 상황에 따라 상이)
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
