export default function Gallery() {
    const gallery = [
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
                <h1 className="text-center pt-3 md:pt-6 text-xl md:text-4xl text-[#f9720bef] font-bold"> Gallery/Videos </h1>
                <div className="m-2 md:m-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {
                        gallery.map((image) => (
                            <div key={image.id} className="bg-[#f3c6b4] rounded-md">
                                <img src={image.image} className="size-36 md:size-50 mx-auto my-3 md:my-4 object-cover" />
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}