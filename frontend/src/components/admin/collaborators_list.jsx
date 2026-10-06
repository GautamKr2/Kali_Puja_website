import { Fragment, useState, useEffect } from "react";

export default function CollaboratorsList() {
    const [collaborators, setCollaborators] = useState();

    const fetchCollaborators = async () => {
        let response = await fetch(`${import.meta.env.VITE_API_URL}/admin/collaborators-list`, {
            credentials: "include"
        });
        let data = await response.json();
        if(data.success) {
            setCollaborators(data.list);
        }
        else {
            console.log("Failed to fetch collaborators list");
        }
    }
    useEffect(() => {
        fetchCollaborators();
    }, []);

    return (
        <>
            <div className="max-w-[98%] mx-auto mt-6 ">
                <h1 className="text-3xl font-bold mb-4 text-center"> Collaborators List </h1>
                <ul className="grid gap-4 text-[17px] font-semibold grid-cols-[50px_1fr_1.5fr_0.8fr_1.5fr_0.6fr_1fr_1fr_0.6fr] mb-1">
                    <li className="list-header px-1"> S.No </li>
                    <li className="list-header"> Name </li>
                    <li className="list-header"> Address </li>
                    <li className="list-header"> Mobile No </li>
                    <li className="list-header"> Email </li>
                    <li className="list-header"> Amount </li>
                    <li className="list-header"> Taken By </li>
                    <li className="list-header"> Date </li>
                    <li className="list-header"> Time </li>
                </ul>

                {
                    collaborators && collaborators.map((collaborator, index) => (
                        <Fragment key={index}>
                            <ul className="grid gap-4 text-[15px]  grid-cols-[50px_1fr_1.5fr_0.8fr_1.5fr_0.6fr_1fr_1fr_0.6fr]">
                                <li className="list-item"> {index + 1} </li>
                                <li className="list-item"> {collaborator.name} </li>
                                <li className="list-item"> {collaborator.address} </li>
                                <li className="list-item"> {collaborator.phone} </li>
                                <li className="list-item"> {collaborator.email} </li>
                                <li className="list-item"> {collaborator.amount} </li>
                                <li className="list-item"> {collaborator.takenBy} </li>
                                <li className="list-item"> {collaborator.date} </li>
                                <li className="list-item"> {collaborator.time.slice(0, 8)} </li>
                            </ul>
                        </Fragment>
                    ))
                }
            </div>
        </>
    )
}
