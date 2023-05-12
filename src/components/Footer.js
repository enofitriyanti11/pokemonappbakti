import { FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="footer footer-center p-10 bg-base-200 text-base-content rounded"
      style={{ backgroundColor: "#537188" }}
    >
      <div className="grid grid-flow-col gap-4">
        <a href="/#" className="link link-hover">About us</a>
        <a href="/#" className="link link-hover">Contact</a>
        <a href="/#" className="link link-hover">Jobs</a>
        <a href="/#" className="link link-hover">Press kit</a>
      </div>

      <div className="grid grid-flow-col gap-4">
        <a href="/#" >
          <FaTwitter size={20} className="text-white" />
        </a>
        <a href="/#" >
          <FaYoutube size={20} className="text-white" />
        </a>
        <a href="/#" >
          <FaFacebookF size={20} className="text-white" />
        </a>
      </div>

      <div>
        <p className="text-white">
          Copyright © 2023 - All right reserved by ACME Industries Ltd
        </p>
      </div>
    </footer>
  )
}

export default Footer;
