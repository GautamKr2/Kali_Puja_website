export default function Contact() {
    return (
        <>
            <section className="bg-[#f7b398] m-2 md:mx-[12%] rounded-md p-2 md:p-3">
                <h1 className="text-center text-xl md:text-4xl text-[#f9720bef] font-bold mb-1 md:mb-4"> Contact Us </h1>
                <div className="text-center">
                    <div className="flex justify-center items-center">
                        <span className="text-sm md:text-[20px] text-[#04313d] font-bold mr-2 md:mr-3"> Email: </span>
                        <a href="mailto:kalipujasamiti21199@gmail.com" className="text-[12px] md:text-[16px] text-[#043f4e] hover:underline"> kalipujasamiti21199@gmail.com </a> 
                    </div>
                    <div className="flex justify-center items-center">
                        <span className="text-sm md:text-[20px] text-[#04313d] font-bold mr-2 md:mr-3 -ml-19 md:-ml-24.75"> Phone: </span>
                        <a href="tel:+91 9876543210" className="text-[12px] md:text-[16px] text-[#043f4e] hover:underline"> +91 9876543210 </a> 
                    </div>
                </div>
            </section>
        </>
    )
}