import { useState, useEffect } from "react"

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
            id: 4,
            name: "Gautam Kumar",
            image: "/kali_img.jpeg",
            role: "President"
        },
        {
            id: 5,
            name: "Gautam Kumar",
            image: "/kali_img.jpeg",
            role: "President"
        },
        {
            id: 6,
            name: "Gautam Kumar",
            image: "/kali_img.jpeg",
            role: "President"
        },
        {
            id: 7,
            name: "Gautam Kumar",
            image: "/kali_img.jpeg",
            role: "President"
        },
        {
            id: 8,
            name: "Gautam Kumar",
            image: "/kali_img.jpeg",
            role: "President"
        },
        {
            id: 9,
            name: "Gautam Kumar",
            image: "/kali_img.jpeg",
            role: "President"
        },
        {
            id: 10,
            name: "Gautam Kumar",
            image: "/kali_img.jpeg",
            role: "President"
        },
        {
            id: 11,
            name: "Gautam Kumar",
            image: "/kali_img.jpeg",
            role: "President"
        }
    ]

    const [showAll, setShowAll] = useState(false);
    const isMobile = window.innerWidth < 768;

    const visibleMembers = showAll
        ? members
        : members.slice(0, isMobile ? 6 : 8)

    const [member, setMember] = useState();
    useEffect(() => {
        getMembers()
    }, [])
    async function getMembers() {
        let memberList = await fetch("/members");
        console.log("Data before converting json")
        memberList = await memberList.json();
        console.log("Data after converting json")
        if(memberList.success) {
            setMember(memberList.list);
            console.log(member);
        }
        else {
            console.log("Data not fetched")
        }
    }

    return (
        <>
            <section className="bg-[#f7b398] m-2 md:m-6 md:mx-[12%] rounded-md">
                <h1 className="text-center text-xl md:text-4xl text-[#f9720bef] font-bold mt-4 md:m-4 pt-2 md:pt-4"> Executive Members </h1>
                <div className="m-2 md:mx-4 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pb-3 md:pb-4">
                    {
                        visibleMembers.map((member) => (
                            <div key={member.id} className=" bg-[#f3c6b4] rounded-lg shadow-md pt-1">
                                <img src={member.image} alt={`${member.name} profile`} className="mx-auto size-24 md:size-48 rounded-md mt-2 md:mt-4 object-cover" />
                                <div className="text-center m-2">
                                    <h3 className="text-[12px] md:text-[16px] text-[#2f2f2f] font-bold"> {member.name} </h3>
                                    <p className="text-[11px] md:text-[13px]  text-red-700"> {member.role} </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {
                    members.length > 8 && (
                        <div className="text-center text-md md:text-xl  mx-auto pb-3">
                            <button onClick={() => setShowAll(!showAll)}
                                className="bg-[#f3c6b4] text-[#f9720bef] font-semibold cursor-pointer px-7 py-1 rounded-md hover:bg-[#fa9e79]">
                                {showAll ? "Show Less" : "Show All"}
                            </button>
                        </div>
                    )
                }
            </section>
        </>
    )
}