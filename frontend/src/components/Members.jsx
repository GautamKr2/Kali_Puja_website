export default function() {
    const members = [
        {
            id: 1,
            name: "Gautam",
            image: "/kali_img.jpeg",
            role: "President"
        },
        {
            id: 2,
            name: "Gautam",
            image: "/kali_img.jpeg",
            role: "President"
        },
        {
            id: 3,
            name: "Gautam",
            image: "/kali_img.jpeg",
            role: "President"
        }
    ]
    return (
        <>
            <section>
                <h1> Executive Members </h1>
                <div className="grid grid-cols-3 gap-6">
                    {
                        members.map((member) => (
                            <div key={member.id}>
                                <img src={member.image} alt={`${member.name} profile`} className="size-40" />
                                <h3> {member.name} </h3>
                                <p> {member.role} </p>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}