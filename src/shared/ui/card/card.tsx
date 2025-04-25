import { FaFireAlt } from "react-icons/fa";

export const Card = () => {
    return (
        <div className="w-[354px] flex flex-col border-2 border-indigo-700 rounded-2xl shadow-md overflow-hidden bg-white">
            <img src="/images/company.jpg" alt="company" className="w-full h-48 object-cover" />
            <div className="flex flex-col justify-between gap-4 p-4 w-full">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col items-start gap-1">
                        <span className="text-lg font-semibold text-gray-800">Good job</span>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>data apply: 29.03.26</li>
                            <li>review: <span className="italic text-gray-400">—</span></li>
                            <li>expected salary: 3k</li>
                        </ul>
                    </div>
                    <FaFireAlt className="text-red-500 text-xl" />
                </div>
                <button className="w-full px-4 py-2 bg-indigo-700 hover:bg-indigo-800 transition text-white text-base rounded-xl shadow">More</button>
            </div>
        </div>
    )
}