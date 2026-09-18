import { useState } from "react"

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
    

    const visibleImages = showAll
        ? gallery
        : gallery.slice(0, isMobile ? 6 : 8)

    return (
        <>
            <section className="bg-[#f7b398] m-2 md:m-6 md:mx-[12%] rounded-md">
                <h1 className="text-center pt-3 md:pt-6 text-xl md:text-4xl text-[#f9720bef] font-bold"> Gallery/Videos </h1>
                <div className="m-2 md:m-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {
                        visibleImages.map((image) => (
                            <div key={image.id} className="bg-[#f3c6b4] rounded-md">
                                <img src={image.image} className="size-25 md:size-50 mx-auto my-2 md:my-4 object-cover" />
                            </div>
                        ))
                    }
                </div>

                {
                    gallery.length > 8 && (
                        <div className="text-center text-md md:text-xl mx-auto pb-3">
                            <button onClick={() => setShowAll(!showAll)}
                                className="bg-[#f3c6b4] text-[#f9720bef] font-semibold px-7 py-1 cursor-pointer rounded-lg hover:bg-[#fa9e79]">
                                {showAll ? "Show less images" : "Show more images"}
                            </button>
                        </div>
                    )
                }
            </section>
        </>
    )
}