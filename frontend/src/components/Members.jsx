export default function() {
    const members = [
        {
            id: 1,
            name: "Gautam Kumar",
            image: "/kali_img.jpeg",
            role: "President"
        },
        {
            id: 2,
            name: "Gautam Kumar",
            image: "/kali_img.jpeg",
            role: "President"
        },
        {
            id: 3,
            name: "Gautam Kumar",
            image: "/kali_img.jpeg",
            role: "President"
        },
        {
            id: 2,
            name: "Gautam Kumar",
            image: "/kali_img.jpeg",
            role: "President"
        },
        {
            id: 2,
            name: "Gautam Kumar",
            image: "/kali_img.jpeg",
            role: "President"
        },
        {
            id: 2,
            name: "Gautam Kumar",
            image: "/kali_img.jpeg",
            role: "President"
        },
        {
            id: 2,
            name: "Gautam Kumar",
            image: "/kali_img.jpeg",
            role: "President"
        },
        {
            id: 2,
            name: "Gautam Kumar",
            image: "/kali_img.jpeg",
            role: "President"
        },
        {
            id: 2,
            name: "Gautam Kumar",
            image: "/kali_img.jpeg",
            role: "President"
        },
        {
            id: 2,
            name: "Gautam Kumar",
            image: "/kali_img.jpeg",
            role: "President"
        },
        {
            id: 2,
            name: "Gautam Kumar",
            image: "/kali_img.jpeg",
            role: "President"
        }
    ]
    return (
        <>
            <section className="bg-[#f7b398] m-2 md:m-6 md:mx-[12%] rounded-md">
                <h1 className="text-center text-xl md:text-4xl text-[#f9720bef] font-bold mt-4 md:m-4 pt-2 md:pt-4"> Executive Members </h1>
                <div className="m-2 md:mx-4 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pb-3 md:pb-4">
                    {
                        members.map((member) => (
                            <div key={member.id} className=" bg-[#f3c6b4] rounded-lg shadow-md">
                                <img src={member.image} alt={`${member.name} profile`} className="mx-auto size-26 md:size-48 rounded-md mt-2 md:mt-4 object-cover" />
                                <div className="text-center m-2">
                                    <h3 className="text-[12px] md:text-[16px] text-[#080808]"> {member.name} </h3>
                                    <p className="text-[11px] md:text-[13px]  text-red-700"> {member.role} </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}