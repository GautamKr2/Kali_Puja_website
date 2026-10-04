import {FaInstagram, FaEnvelope, FaPhone} from "react-icons/fa";

export default function Contact() {
    return (
        <>
            <section id="contact" className="bg-[#f7b398] m-2 md:mx-[12%] rounded-md p-2 md:p-3">
                <h1 className="text-center text-xl md:text-4xl text-[#f9720bef] font-bold mb-1 md:mb-4"> Contact Us </h1>
                <div className="flex flex-col items-start gap-2 md:gap-3 max-w-64 mx-auto">
                    <div className="flex justify-center items-center">
                        <span className="text-sm md:text-[20px] text-[#04313d] font-bold"> Email: </span>
                        <a href="mailto:kalipujasamiti21199@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-[12px] md:text-[16px] text-[#043f4e] hover:underline">
                            <FaEnvelope size={14} md:size={18} className="mx-2"/> kalipujasamiti21199@gmail.com
                        </a> 
                    </div>

                    <div className="flex justify-center items-center">
                        <span className="text-sm md:text-[20px] text-[#04313d] font-bold"> Instagram: </span>
                        <a href="https://www.instagram.com/sarbhada_ki_mahakali_?stkn=MW00dHpwa3c4YjByeg==" target="_blank" rel="noopener noreferrer" className="flex items-center text-[12px] md:text-[16px] text-[#043f4e] hover:underline">
                            <FaInstagram size={16} md:size={20} className="mx-2"/> Instagram
                        </a>
                    </div>

                    <div className="flex justify-center items-center">
                        <span className="text-sm md:text-[20px] text-[#04313d] font-bold"> Phone: </span>
                        <a href="tel:+91 9876543210" target="_blank" rel="noopener noreferrer" className="flex items-center text-[12px] md:text-[16px] text-[#043f4e] hover:underline">
                            <FaPhone size={12} md:size={17} className="mx-2"/> +91 7870520178
                        </a> 
                    </div>
                </div>
            </section>
        </>
    )
}