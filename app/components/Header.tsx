export default function Header() {
    return (
        <header>
            <nav className="flex items-center mt-5
                            bg-[#ffffffb2] [backdrop-filter: blur(10px)] p-2.5 rounded-md
           ">
                <span className=" text-4xl font-bold mr-2.5">Ankit</span>
                <ul className="flex">
                    <li className="m-5">Home</li>
                    <li className="m-5">Projects</li>
                    <li className="m-5">Blog</li>
                    <li className="m-5">About</li>
                </ul>
            </nav>
        </header>
    )
}