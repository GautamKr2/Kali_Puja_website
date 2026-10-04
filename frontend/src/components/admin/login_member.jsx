import { Fragment, useState, useEffect } from "react";

export default function LoginMember() {
    const [signInMembers, setSignInMembers] = useState();

    const fetchSignedInMembers = async () => {
        let response = await fetch(`${import.meta.env.VITE_API_URL}/admin/signed-members`);
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
            <div className="max-w-[98%] mx-auto mt-6 ">
                <h1 className="text-3xl font-bold mb-4 text-center"> Signed In Members List </h1>
                <ul className="grid gap-4 text-[17px] font-semibold grid-cols-[60px_2fr_1fr_2fr_2fr] mb-1">
                    <li className="list-header"> S.No </li>
                    <li className="list-header"> Name </li>
                    <li className="list-header"> Mobile No </li>
                    <li className="list-header"> UserName </li>
                    <li className="list-header"> Password </li>
                </ul>

                {
                    signInMembers && signInMembers.map((member, index) => (
                        <Fragment key={index}>
                            <ul className="grid gap-4 text-[15px]  grid-cols-[60px_2fr_1fr_2fr_2fr]">
                                <li className="list-item"> {index + 1} </li>
                                <li className="list-item"> {member.name} </li>
                                <li className="list-item"> {member.phone} </li>
                                <li className="list-item"> {member.username} </li>
                                <li className="list-item"> {member.password} </li>
                            </ul>
                        </Fragment>
                    ))
                }
            </div>
        </>
    )
}