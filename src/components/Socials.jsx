import React from "react";
import { FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdWhatsapp } from "react-icons/md";

const Socials = () => {
  return (
    <div
      className="social-main"
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <a
        href="tel:+917760618621"
        target="_blank"
        rel="noopener noreferrer"
        title="Call Us"
      >
        <FaPhoneAlt size={25} color="#f1eada" />
      </a>

      {/* Email */}
      <a
        href="mailto:socialdining.office@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Email Us"
      >
        <MdEmail size={35} color="#f1eada" />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/socialdining.in/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
      >
        <FaInstagram size={30} color="#f1eada" />
      </a>

      <a
        href=" https://chat.whatsapp.com/LjWiAruHW0303oDiwl0m8V?mode=ems_copy_t&fbclid=PAZXh0bgNhZW0CMTEAAae35F_acDe25gXkC5FA2dRRvJTe9xImdKUR0kLmm2h9rBaPtAGvjXkFwErpxw_aem_OeuKGd6hwLmEC3xgiBYyaQ"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
      >
        <MdWhatsapp size={30} color="#f1eada" />
      </a>
    </div>
  );
};

export default Socials;
