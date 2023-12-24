export default function Tech({ name, description }: TechProps) {
    return (
        <div className=" bg-[#0000002f] rounded-lg m-2 p-2 w-40 cursor-pointer hover:bg-blue-500">
            <div className="text-[#daa520] text-xl">
                {name}
            </div>
            <div>{description}</div>
        </div>
    )
}