import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import fb from "../../assets/images/facebook.png";
import insta from "../../assets/images/insta.png";
import twitter from "../../assets/images/twitter.png";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside>
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="" className="size-10" />
                        <h2 className="text-3xl font-bold">JobHub</h2>
                    </div>
                    <p>Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Office</h6>
                    <p>205 North Michigan Avenue,<br /> Suite 810
                        Chicago, 60601, USA</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Email: contact@jubhub.com</p>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="flex gap-4">
                        <Link><img src={fb} alt="" /></Link>
                        <Link><img src={insta} alt="" /></Link>
                        <Link><img src={twitter} alt="" /></Link>
                    </div>
                </nav>
            </footer>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content border-t-2">
                <aside>
                    <p>Copyright © 2024 - All right reserved by JobHub</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;