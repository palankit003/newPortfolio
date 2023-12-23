export default function Header() {
    return (
        <header className="flex w-full justify-center">
            <nav className="select-none flex items-center mt-5 bg-[rgba(255,255,255,0.1)] backdrop-blur-[2px] p-2.5 rounded-md">
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
        </header>
    )
}