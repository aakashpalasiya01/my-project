/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import Link from "next/link";
import Image from "next/image";
import fbicn from "@/assets/images/icons/fb_icn.svg";
import { ROUTES_PATH } from "@/utils/constant";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { SocialIconAction } from "@/store/actions/homeAction";
import * as homeReducer from "@/store/reducers/homeReducer";
import { RootState } from "@/store/store";
import MailtoLink from "@/shared/common-component/FoooterMailInbox";

const Footer = () => {
  const dispatch = useAppDispatch();

  const { subscription, user } = useAppSelector((state: RootState) => state.auth);
  const { SocialIcon } = useAppSelector((state: RootState) => state.home);

  interface SocialFollow {
    name: string;
    icon: string;
    social_url: string;
  }

  interface ApiResponse {
    social_follow: SocialFollow[];
  }


  useEffect(() => {
    SocialIconAction().then((res: ApiResponse) => {
      dispatch(homeReducer.setSocialIcon(res.social_follow));
    })
  }, []);

  const conditionalSubPlan = user ? "home#subs_plan" : "guest#subs_plan";

  return (
    <>
      <footer className="footer_hero">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 col-xl-3">
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
                    {/* <Link href="mailto:gymnastify@gymnastify.com?subject=Subject&body=Body">
                      gymnastify@gymnastify.com
                    </Link> */}
                      <MailtoLink email="help@gymnastify.com" subject="Subject" body="Body">help@gymnastify.com</MailtoLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="footer_items">
                <div className="footer_itemstitle">
                  <h6>Quick Links</h6>
                </div>
                <ul>
                  {/* <li>
                    <Link href="">Skill Dictionary </Link>
                  </li>
                  <li>
                    <Link href="">Online Store</Link>
                  </li> */}
                  <li>
                    <Link href={subscription ? ROUTES_PATH.SUBSCRIPTION : conditionalSubPlan}>{subscription ? "My Subscriptions" : "Subscriptions"}</Link>
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
                    <Link href={ROUTES_PATH.BLOG}>Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-md-6 col-lg-3">
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
            </div> */}
            <div className="col-md-6 col-lg-4 col-xl-3">
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

              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="follows_fter">
                <div className="footer_itemstitle">
                  <h6>Follow Us</h6>
                </div>
                <ul>
                  {SocialIcon.map((item: SocialFollow, index: number) => {
                    return (
                      <li key={index + 1}>
                        <Link href={item?.social_url ? item?.social_url : ""}>
                          <Image src={item?.icon ? item?.icon : fbicn} alt={item?.name} width={37} height={37} />
                        </Link>
                      </li>
                    )
                  })}
                </ul>
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
