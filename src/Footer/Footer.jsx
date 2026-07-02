import { FaXTwitter } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="bg-black mt-20">
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row justify-between  text-white py-10">
        <div className="flex flex-col gap-5 mb-10 lg:mb-0">
          <h1 className="font-bold text-2xl">CS — Ticket System</h1>
          <p className=" max-w-75 text-[#A1A1AA]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex flex-col gap-5 mb-10 lg:mb-0">
          <p className="font-bold text-xl">Company</p>
          <p className="text-[#A1A1AA]">About Us</p>
          <p className="text-[#A1A1AA]">Our Mission</p>
          <p className="text-[#A1A1AA]">Contact Sales</p>
        </div>

        <div className="flex flex-col gap-5 mb-10 lg:mb-0">
          <p className="font-bold text-xl">Services</p>
          <p className="text-[#A1A1AA]">Products & Services</p>
          <p className="text-[#A1A1AA]">Customer Stories</p>
          <p className="text-[#A1A1AA]">Download Apps</p>
        </div>
        <div className="flex flex-col gap-5 mb-10 lg:mb-0">
          <p className="font-bold text-xl">Information</p>
          <p className="text-[#A1A1AA]">Privacy Policy</p>
          <p className="text-[#A1A1AA]">Terms & Conditions</p>
          <p className="text-[#A1A1AA]">Join Us</p>
        </div>
        <div className="flex flex-col gap-5 mb-10 lg:mb-0">
          <p className="font-bold text-xl">Social Links</p>
          <div className="flex items-center gap-3">
            <div className="bg-white text-black p-1 rounded-2xl">
              <FaXTwitter />
            </div>
            <p className="text-[#A1A1AA]">@CS — Ticket System</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white text-black p-1 rounded-2xl">
              <RiLinkedinFill />
            </div>
            <p className="text-[#A1A1AA]">@CS — Ticket System</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white text-black p-1 rounded-2xl">
              <FaFacebookF />
            </div>
            <p className="text-[#A1A1AA]">@CS — Ticket System</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white text-black p-1 rounded-2xl">
              <HiOutlineMail />
            </div>
            <p className="text-[#A1A1AA]">support@cst.com</p>
          </div>
        </div>
      </div>
      <p className="text-white font-bold  text-center py-6 border-t border-[#A1A1AA] w-11/12 mx-auto">
        &copy; 2025 CS — Ticket System. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
