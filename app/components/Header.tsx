export default function Header() {
    return (
        <header className="flex w-full justify-center z-50 fixed top-3 ">
            <nav className=" hidden select-none lg:flex items-center mt-5 bg-[rgba(255,255,255,0.1)] backdrop-blur-[2px] px-5 rounded-full">
                <span className=" text-4xl font-bold mr-2.5">Ankit</span>
                <ul className="relative top-1 flex">
                    <li className="m-5 cursor-pointer group">
                        <span>Home</span>
                        <div className="h-2 scale-x-0 origin-left group-hover:scale-x-100 transition-transform bg-[#FFDB58]"></div>
                    </li>
                    <li className="m-5 cursor-pointer group">
                        <span>Projects</span>
                        <div className="h-2 scale-x-0 origin-left group-hover:scale-x-100 transition-transform bg-[#FFDB58]"></div>
                    </li>
                    <li className="m-5 cursor-pointer group">
                        <span>About</span>
                        <div className="h-2 scale-x-0 origin-left group-hover:scale-x-100 transition-transform bg-[#FFDB58]"></div>
                    </li>
                    <li className="m-5 cursor-pointer group">
                        <span>Contact</span>
                        <div className="h-2 scale-x-0 origin-left group-hover:scale-x-100 transition-transform bg-[#FFDB58]"></div>
                    </li>
                </ul>
            </nav>
            <div className="flex flex-col justify-around absolute right-4 w-12 h-12 bg-[#ffffff31] rounded-lg py-2 items-center lg:hidden">
                <div className=" w-[80%] h-1 bg-gray-300 rounded-lg"></div>
                <div className=" w-[80%] h-1 bg-gray-300 rounded-lg"></div>
                <div className=" w-[80%] h-1 bg-gray-300 rounded-lg"></div>
            </div>
            <nav className=" lg:hidden">

            </nav>
        </header>
    )
}