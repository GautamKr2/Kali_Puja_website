import About from "./About";
import Members from "./Members";

export default function Home() {
    return (
        <>
            <div className="h-[60vh] bg-[url('/kali_img.jpeg')] bg-contain bg-center mt-4 md:mt-8"></div>

            <h2 className="text-2xl md:text-4xl text-[#f9720bef] font-bold text-center my-2"> Welcome </h2>

            <About />
            <Members />
            <h1>Gallery Page</h1>
            <h1>Contact Page</h1>
        </>
    )
}