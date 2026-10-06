import { Fragment, useState, useEffect } from "react";

export default function MemberList() {
    const [members, setMembers] = useState();

    const fetchMembers = async () => {
        let response = await fetch(`${import.meta.env.VITE_API_URL}/admin/members-list`, {
            credentials: "include"
        });
        let data = await response.json();
        if(data.success) {
            setMembers(data.list);
        }
        else {
            console.log("Failed to fetch members list");
        }
    }
    useEffect(() => {
        fetchMembers();
    }, []);

    return (
        <>
            <div className="w-[98%] mx-auto mt-3 md:mt-6 ">
                <h1 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 text-center"> Members List </h1>
                <div className="overflow-x-auto w-full">
                    <ul className="min-w-[400px] md:min-w-[1000px] grid gap-1 md:gap-4 text-[11px] md:text-[17px] font-semibold grid-cols-[0.64fr_3fr_2fr_2fr] mb-1">
                        <li className="list-header"> S.No </li>
                        <li className="list-header"> Name </li>
                        <li className="list-header"> Mobile No </li>
                        <li className="list-header"> Role </li>
                    </ul>

                    {
                        members && members.map((member, index) => (
                            <Fragment key={index}>
                                <ul className="min-w-[400px] md:min-w-[1000px] grid gap-1 md:gap-4 text-[9px] md:text-[15px]  grid-cols-[0.64fr_3fr_2fr_2fr]">
                                    <li className="list-item pl-3"> {index + 1} </li>
                                    <li className="list-item"> {member.name} </li>
                                    <li className="list-item"> {member.phone} </li>
                                    <li className="list-item"> {member.role} </li>
                                </ul>
                            </Fragment>
                        ))
                    }
                </div>
            </div>
        </>
    )
}