import Link from "next/link";
import Image from "next/image";
import fbicn from "../../../assets/images/icons/fb_icn.svg";
import linkdinicn from "../../../assets/images/icons/linkdin_icn.svg";
import pintrest from "../../../assets/images/icons/pintrest.svg";
import twittericn from "../../../assets/images/icons/twitter_icn.svg";
import { ROUTES_PATH } from "@/utils/constant";

const Footer = () => {
  return (
    <>
      <footer className="footer_hero">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="footer_logo">
                <Link href="">Gymnastify</Link>
              </div>
              <div className="footer_items">
                <div className="footer_itemstitle">
                  <h6>Contact Info</h6>
                </div>
                <ul className="contact_info">
                  <li>San Diego, CA, US</li>
                  <li>+1 (800) 555‑0175</li>
                  <li>
                    <Link href="mail:gymnastify@gymnastify.com">
                      gymnastify@gymnastify.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="footer_items">
                <div className="footer_itemstitle">
                  <h6>Quick Links</h6>
                </div>
                <ul>
                  <li>
                    <Link href="">Skill Dictionary </Link>
                  </li>
                  <li>
                    <Link href="">Online Store</Link>
                  </li>
                  <li>
                    <Link href="">Subscriptions</Link>
                  </li>
                  <li>
                    <Link href="">Safety</Link>
                  </li>
                  <li>
                    <Link href={ROUTES_PATH.ABOUTUS}>About Us</Link>
                  </li>
                  <li>
                    <Link href={ROUTES_PATH.TEACHERS}>Teachers</Link>
                  </li>
                  <li>
                    <Link href="">Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="footer_items">
                <div className="footer_itemstitle">
                  <h6>Add Ons</h6>
                </div>
                <ul>
                  <li>
                    <Link href={ROUTES_PATH.ASSIGNMENTS}>Assignments </Link>
                  </li>
                  <li>
                    <Link href=""> Live Classes</Link>
                  </li>
                  <li>
                    <Link href="">Instructor Chat</Link>
                  </li>
                  <li>
                    <Link href=""> Upgrade Level</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="footer_items">
                <div className="footer_itemstitle">
                  <h6>Customer Support</h6>
                </div>
                <ul>
                  <li>
                    <Link href={ROUTES_PATH.FAQS}>FAQ</Link>
                  </li>
                  <li>
                    <Link href={ROUTES_PATH.PRIVACYPOLICY}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href={ROUTES_PATH.TERMSANDCONDITIONS}>Terms & condition</Link>
                  </li>
                </ul>
                <div className="follows_fter">
                  <div className="footer_itemstitle">
                    <h6>Follow Us</h6>
                  </div>
                  <ul>
                    <li>
                      <Link href="">
                        <Image src={fbicn} alt={"fbicn"} />
                      </Link>
                    </li>
                    <li>
                      <Link href="">
                        <Image src={linkdinicn} alt={"fbicn"} />
                      </Link>
                    </li>
                    <li>
                      <Link href="">
                        <Image src={pintrest} alt={"fbicn"} />
                      </Link>
                    </li>
                    <li>
                      <Link href="">
                        <Image src={twittericn} alt={"fbicn"} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="ftr_copyright">
        <div className="container">
          <p>Copyright@2023 Gymnastify</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
