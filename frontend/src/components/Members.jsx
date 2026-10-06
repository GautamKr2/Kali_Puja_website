import { useState, useEffect } from "react"

export default function() {
    const members = [
        {
            id: 1,
            name: "Gautam Kumar",
            image: "/members/gautam11.jpg",
            role: "President"
        },
        {
            id: 2,
            name: "Aman Mehta",
            image: "/members/aman.jpeg",
            role: "Member"
        },
        {
            id: 3,
            name: "Saurav Kumar",
            image: "/members/saurav.jpeg",
            role: "Member"
        },
        {
            id: 4,
            name: "Bablu Kumar",
            image: "/members/bablu.jpeg",
            role: "Director"
        },
        {
            id: 5,
            name: "Raushan Kumar",
            image: "/members/raushan.jpeg",
            role: "President"
        },
        {
            id: 6,
            name: "Shubhanshu Kumar",
            image: "/members/lalu.jpeg",
            role: "Vice President"
        },
        {
            id: 7,
            name: "Akash Kushwaha",
            image: "/members/akash.jpeg",
            role: "Secretary"
        },
        {
            id: 8,
            name: "Brajesh Kumar",
            image: "/members/bittoo.jpeg",
            role: "Vice Director"
        },
        {
            id: 9,
            name: "Prince Mehta",
            image: "/members/prince.jpeg",
            role: "Vice Secretary"
        },
        {
            id: 10,
            name: "Adarsh Kumar",
            image: "/members/adarsh.jpeg",
            role: "Member"
        },
        {
            id: 11,
            name: "Amit Kumar",
            image: "/members/amit.jpeg",
            role: "Member"
        },
        {
            id: 12,
            name: "Abhishek Kumar",
            image: "/members/abhishek.jpeg",
            role: "Member"
        },
        {
            id: 13,
            name: "Ajit Kumar",
            image: "/members/ajit.jpeg",
            role: "Member"
        },
        {
            id: 14,
            name: "Dashrath Prasad",
            image: "/members/dashrath.jpeg",
            role: "Member"
        },
        {
            id: 15,
            name: "Golu Kumar",
            image: "/members/golu.jpeg",
            role: "Member"
        },
        {
            id: 16,
            name: "Gulshan Kumar",
            image: "/members/gulshan.jpeg",
            role: "Member"
        },
        {
            id: 17,
            name: "Manish Kumar",
            image: "/members/manish.jpeg",
            role: "Member"
        },
        {
            id: 18,
            name: "Manish Kashyap",
            image: "/members/manish_tkdr.jpeg",
            role: "Member"
        },
        {
            id: 19,
            name: "Muskan Kumar",
            image: "/members/muskan.jpeg",
            role: "Member"
        },
        {
            id: 20,
            name: "Lalindra Kumar",
            image: "/members/lalindra.jpeg",
            role: "Member"
        },
        {
            id: 21,
            name: "Rahul Kumar",
            image: "/members/rahul.jpeg",
            role: "Member"
        },
        {
            id: 22,
            name: "Ravi Kumar",
            image: "/members/ravi.jpeg",
            role: "Member"
        },
        {
            id: 23,
            name: "Rocky Kumar",
            image: "/members/rocky.jpeg",
            role: "Member"
        },
        {
            id: 24,
            name: "Rohit Chaudhry",
            image: "/members/rohit_chaudhry.jpeg",
            role: "Member"
        },
        {
            id: 25,
            name: "Rohit Kumar",
            image: "/members/rohit.jpeg",
            role: "Sarota"
        },
        {
            id: 26,
            name: "Sanjeev Kumar",
            image: "/members/sanjeev.jpeg",
            role: "Member"
        },
        {
            id: 27,
            name: "Sanjeet Kumar",
            image: "/members/sanjeet.jpeg",
            role: "Member"
        },
        {
            id: 28,
            name: "Sandeep Kumar",
            image: "/members/sandeep.jpeg",
            role: "Member"
        },
        {
            id: 29,
            name: "Shaktiman",
            image: "/members/shakti.jpeg",
            role: "Member"
        },
        {
            id: 30,
            name: "Shubham Mehta",
            image: "/members/shubham.jpeg",
            role: "Member"
        },
        {
            id: 31,
            name: "Shailendra Mehta",
            image: "/members/sailendra.jpeg",
            role: "Member"
        }
    ]

    const [showAll, setShowAll] = useState(false);
    const isMobile = window.innerWidth < 768;

    const visibleMembers = showAll
        ? members
        : members.slice(0, isMobile ? 6 : 8)

    // const [member, setMember] = useState([]);
    // useEffect(() => {
    //     getMembers()
    // }, [])
    // async function getMembers() {
    //     let memberList = await fetch("http://localhost:3200/members");
    //     memberList = await memberList.json();
    //     if(memberList.success) {
    //         setMember(memberList.list);
    //     }
    //     else {
    //         console.log("Data not fetched")
    //     }
    // }
    
    // useEffect(() => {
    //     if(member.length > 0) {
    //         console.log(member[0].name);
    //     }
    // })

    return (
        <>
            <section className="bg-[#f7b398] m-2 md:m-6 md:mx-[12%] rounded-md">
                <h1 className="text-center text-xl md:text-4xl text-[#f9720bef] font-bold mt-4 md:m-4 pt-2 md:pt-4"> Executive Members </h1>
                <div className="m-2 md:mx-4 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pb-3 md:pb-4">
                    {
                        visibleMembers.map((member) => (
                            <div key={member.id} className=" bg-[#f3c6b4] rounded-lg shadow-md pt-1">
                                <img src={member.image} alt={`${member.name} profile`} className="mx-auto size-28 md:size-48 rounded-md mt-2 md:mt-4 object-contain" />
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