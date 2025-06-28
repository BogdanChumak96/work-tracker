export const Card = () => {
    return (
        <div className="flex items-center flex-col gap-6 w-[750px] border-2 border-indigo-700 rounded-2xl">
            <section className="flex items-start gap-3.5 w-full px-[20px] pt-[20px]">
                <img src="./images/company.jpg" alt="company" />
                <div className="flex items-start flex-col gap-1">
                    <span className="text-xl text-indigo-800 font-bold">The best job</span>
                    <p className="text-lg text-indigo-500 font-medium">Cashier</p>
                </div>
            </section>
            <section className="flex justify-around gap-[150px] items-center w-full p-[20px] border-t-2 border-indigo-500">
                <div className="flex items-start flex-col gap-[15px]">
                    <div className="flex flex-col gap-1">
                        <span className="font-semibold">City: Troechina</span>
                        <span className="font-semibold">Time: full</span>
                    </div>
                    <div className="flex justify-center items-center gap-[20px]">
                        <button className="bg-indigo-600 text-white text-sm px-[40px] py-1.5 font-semibold cursor-pointer">Edit</button>
                        <button className="bg-indigo-600 text-white text-sm px-[40px] py-1.5 font-semibold cursor-pointer">Edit</button>
                    </div>
                </div>
                <ul className="flex items-start flex-col font-semibold">
                    <li>Data apply: 20.10.25</li>
                    <li>Data sending: 20.10.25</li>
                    <li>Status: in search</li>
                    <li>Expected salary: 900$</li>
                </ul>
            </section>
        </div>
    )
}