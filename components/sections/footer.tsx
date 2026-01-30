import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">

                    {/* Left Side: Company Info */}
                    <div className="space-y-4">
                        <h5 className="font-bold text-lg text-text-main">(주) GROUND UP F&B</h5>

                        <div className="text-sm text-gray-500 space-y-1 md:space-y-0 md:space-x-4 flex flex-col md:flex-row flex-wrap">
                            <span>대표이사 : 김태원</span>
                            <span className="hidden md:inline">|</span>
                            <span>인천시 미추홀구 인하로 207</span>
                            <span className="hidden md:inline">|</span>
                            <span>E-mail: groundup@괴로피자.com</span>
                            <span className="hidden md:inline">|</span>
                            <span>사업자등록번호: 419-81-03802</span>
                        </div>

                        <p className="text-xs text-gray-400 mt-8">
                            COPYRIGHT © 2025 괴로피자. ALL RIGHTS RESERVED.
                        </p>
                    </div>

                    {/* Right Side: Contact */}
                    <div className="text-left md:text-right">
                        <p className="text-xl md:text-2xl font-bold text-text-main">
                            창업문의 : <span className="text-point-red">010-3221-4939</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
