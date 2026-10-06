import { Fragment, useState, useEffect } from "react";

export default function LoginMember() {
    const [signInMembers, setSignInMembers] = useState();

    const fetchSignedInMembers = async () => {
        let response = await fetch(`${import.meta.env.VITE_API_URL}/admin/signed-members`, {
            credentials: "include"
        });
        let data = await response.json();
        if(data.success) {
            setSignInMembers(data.list);
        }
        else {
            console.log("Failed to fetch members list");
        }
    }
    useEffect(() => {
        fetchSignedInMembers();
    }, []);
    return (
        <>
            <div className="w-[98%] mx-auto mt-3 md:mt-6">
                <h1 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 text-center"> Signed In Members List </h1>
                <div className="overflow-x-auto w-full">
                    <ul className="min-w-[400px] md:min-w-[1000px] grid gap-1 md:gap-4 text-[11px] md:text-[17px] font-semibold grid-cols-[0.64fr_1.7fr_1.2fr_1.7fr_1.7fr] mb-1">
                        <li className="list-header"> S.No </li>
                        <li className="list-header"> Name </li>
                        <li className="list-header"> Mobile No </li>
                        <li className="list-header"> UserName </li>
                        <li className="list-header"> Password </li>
                    </ul>

                    {
                        signInMembers && signInMembers.map((member, index) => (
                            <Fragment key={index}>
                                <ul className="min-w-[400px] md:min-w-[1000px] grid gap-1 md:gap-4 text-[9px] md:text-[15px]  grid-cols-[0.64fr_1.7fr_1.2fr_1.7fr_1.7fr]">
                                    <li className="list-item pl-3"> {index + 1} </li>
                                    <li className="list-item"> {member.name} </li>
                                    <li className="list-item"> {member.phone} </li>
                                    <li className="list-item"> {member.username} </li>
                                    <li className="list-item"> {member.password} </li>
                                </ul>
                            </Fragment>
                        ))
                    }
                </div>
            </div>
        </>
    )
}