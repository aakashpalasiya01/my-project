"use client";
import logo from "@/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
// import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from "react-bootstrap/esm/AccordionButton";

function CustomToggle({ children, eventKey, callback }: any) {
    // const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    // const isCurrentEventKey = activeEventKey === eventKey;
  
    return (
        // ${isCurrentEventKey ? "mm-active" : ""}
        <button className={`has-arrow mm-active`} onClick={decoratedOnClick}>
            <div className="menu-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="IconlyHome"><g id="Home">
                    <path id="Home_2" d="M9.13478 20.7733V17.7156C9.13478 16.9351 9.77217 16.3023 10.5584 16.3023H13.4326C13.8102 16.3023 14.1723 16.4512 14.4393 16.7163C14.7063 16.9813 14.8563 17.3408 14.8563 17.7156V20.7733C14.8539 21.0978 14.9821 21.4099 15.2124 21.6402C15.4427 21.8705 15.7561 22 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0008C21.1356 20.3588 21.5 19.487 21.5 18.5778V9.86686C21.5 9.13246 21.1721 8.43584 20.6046 7.96467L13.934 2.67587C12.7737 1.74856 11.1111 1.7785 9.98539 2.74698L3.46701 7.96467C2.87274 8.42195 2.51755 9.12064 2.5 9.86686V18.5689C2.5 20.4639 4.04738 22 5.95617 22H7.87229C8.55123 22 9.103 21.4562 9.10792 20.7822L9.13478 20.7733Z" fill="#130F26"></path>
                    </g></g>
                </svg>
            </div>	
            <span className="nav-text">{children}</span>
        </button>
    );
}

const Sidebar = () => {

    const [ toggle, setToggle ] = useState(false);

    return (
    <div className={`side-bar ${toggle ? "menu-toggle" : ""}`}>
        <div className="nav-header">
            <Link href="/" className="brand-logo">
				<div className="logo">
					<svg className="logo-abbr" width="43" height="34" viewBox="0 0 43 34" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect x="22.6154" width="19.6154" height="6.53846" rx="3.26923" fill="white"></rect>
						<rect x="22.6154" y="9.15387" width="19.6154" height="6.53846" rx="3.26923" fill="white"></rect>
						<rect x="22.6154" y="18.3077" width="19.6154" height="6.53846" rx="3.26923" fill="white"></rect>
						<rect x="0.384583" y="18.3077" width="19.6154" height="6.53846" rx="3.26923" fill="white"></rect>
						<rect x="22.6154" y="27.4615" width="19.6154" height="6.53846" rx="3.26923" fill="white"></rect>
						<rect x="0.384583" y="27.4615" width="19.6154" height="6.53846" rx="3.26923" fill="white"></rect>
					</svg>
                    <Image src={logo} alt="logo" height="30" width="122" className="brand-title" />

				</div>
            </Link>
            <div className="nav-control">
                <button className={`hamburger ${toggle ? "is-active" : ""}`} onClick={() => setToggle(!toggle)}>
                    <span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path opacity="0.4" d="M16.7548 0.333313H20.7051C22.341 0.333313 23.6667 1.67014 23.6667 3.31994V7.30359C23.6667 8.95339 22.341 10.2902 20.7051 10.2902H16.7548C15.1188 10.2902 13.7932 8.95339 13.7932 7.30359V3.31994C13.7932 1.67014 15.1188 0.333313 16.7548 0.333313Z" fill="white"></path>
						<path fillRule="evenodd" clipRule="evenodd" d="M3.29492 0.333313H7.24522C8.8812 0.333313 10.2068 1.67014 10.2068 3.31994V7.30359C10.2068 8.95339 8.8812 10.2902 7.24522 10.2902H3.29492C1.65894 10.2902 0.333313 8.95339 0.333313 7.30359V3.31994C0.333313 1.67014 1.65894 0.333313 3.29492 0.333313ZM3.29492 13.7097H7.24522C8.8812 13.7097 10.2068 15.0466 10.2068 16.6964V20.68C10.2068 22.3287 8.8812 23.6666 7.24522 23.6666H3.29492C1.65894 23.6666 0.333313 22.3287 0.333313 20.68V16.6964C0.333313 15.0466 1.65894 13.7097 3.29492 13.7097ZM20.705 13.7097H16.7547C15.1188 13.7097 13.7931 15.0466 13.7931 16.6964V20.68C13.7931 22.3287 15.1188 23.6666 16.7547 23.6666H20.705C22.341 23.6666 23.6666 22.3287 23.6666 20.68V16.6964C23.6666 15.0466 22.341 13.7097 20.705 13.7097Z" fill="white"></path>
					</svg>
						
                </button>
            </div>
        </div>
        <div className="dlabnav dz-bg">
			<div className="dlabnav-scroll mm-active ps ps--active-y">
            
            <Accordion>
				<ul className="metismenu mm-show" id="menu">
					<li>
                        <Accordion.Item eventKey="0">
                            <CustomToggle eventKey="0">Dashboard</CustomToggle>
                            {/* <Accordion.Body>
                                <ul className="mm-collapse">
                                    <li><a href="" className="active">Dashboard Light</a></li>
                                    <li><a href="">Balance Page</a></li>
                                    <li><a href="">Card Center</a></li>
                                    <li><a href="">Invoices</a></li>
                                    <li><a href="">Transaction Details</a></li>
                                    <li><a href="">Transaction History</a></li>
                                </ul>
                            </Accordion.Body> */}
                        </Accordion.Item>
					</li>
                    <li>
                        <div className="accordion-item">
                            <button>
                                <div className="menu-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.34933 14.8577C5.38553 14.8577 2 15.47 2 17.9174C2 20.3666 5.364 21 9.34933 21C13.3131 21 16.6987 20.3877 16.6987 17.9404C16.6987 15.4911 13.3347 14.8577 9.34933 14.8577Z" fill="#B9A8FF"></path>
                                        <path opacity="0.4" d="M9.34935 12.5248C12.049 12.5248 14.2124 10.4062 14.2124 7.76241C14.2124 5.11865 12.049 3 9.34935 3C6.65072 3 4.48633 5.11865 4.48633 7.76241C4.48633 10.4062 6.65072 12.5248 9.34935 12.5248Z" fill="#763ed0"></path>
                                        <path opacity="0.4" d="M16.1734 7.84875C16.1734 9.19507 15.7605 10.4513 15.0364 11.4948C14.9611 11.6021 15.0276 11.7468 15.1587 11.7698C15.3407 11.7995 15.5276 11.8177 15.7184 11.8216C17.6167 11.8704 19.3202 10.6736 19.7908 8.87118C20.4885 6.19676 18.4415 3.79543 15.8339 3.79543C15.5511 3.79543 15.2801 3.82418 15.0159 3.87688C14.9797 3.88454 14.9405 3.90179 14.921 3.93246C14.8955 3.97174 14.9141 4.02253 14.9395 4.05607C15.7233 5.13216 16.1734 6.44207 16.1734 7.84875Z" fill="#763ed0"></path>
                                        <path d="M21.7791 15.1693C21.4317 14.444 20.5932 13.9466 19.3172 13.7023C18.7155 13.5586 17.0853 13.3545 15.5697 13.3832C15.5472 13.3861 15.5344 13.4014 15.5325 13.411C15.5295 13.4263 15.5364 13.4493 15.5658 13.4656C16.2663 13.8048 18.9738 15.2805 18.6333 18.3928C18.6186 18.5289 18.7292 18.6439 18.8671 18.6247C19.5335 18.5318 21.2478 18.1705 21.7791 17.0475C22.0736 16.4534 22.0736 15.7635 21.7791 15.1693Z" fill="#B9A8FF"></path>
                                    </svg>
                                </div>	
                                <span className="nav-text">Users</span>
                            </button>
                        </div>
					</li>
                    <li>
                        <div className="accordion-item">
                            <button>
                                <div className="menu-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="IconlyActivity">
                                        <g id="Activity">
                                        <path id="Activity_2" fillRule="evenodd" clipRule="evenodd" d="M17.1799 4.41C17.1799 3.08 18.2599 2 19.5899 2C20.9199 2 21.9999 3.08 21.9999 4.41C21.9999 5.74 20.9199 6.82 19.5899 6.82C18.2599 6.82 17.1799 5.74 17.1799 4.41ZM13.3298 14.7593L16.2198 11.0303L16.1798 11.0503C16.3398 10.8303 16.3698 10.5503 16.2598 10.3003C16.1508 10.0503 15.9098 9.8803 15.6508 9.8603C15.3798 9.8303 15.1108 9.9503 14.9498 10.1703L12.5308 13.3003L9.75976 11.1203C9.58976 10.9903 9.38976 10.9393 9.18976 10.9603C8.99076 10.9903 8.81076 11.0993 8.68976 11.2593L5.73076 15.1103L5.66976 15.2003C5.49976 15.5193 5.57976 15.9293 5.87976 16.1503C6.01976 16.2403 6.16976 16.3003 6.33976 16.3003C6.57076 16.3103 6.78976 16.1893 6.92976 16.0003L9.43976 12.7693L12.2898 14.9103L12.3798 14.9693C12.6998 15.1393 13.0998 15.0603 13.3298 14.7593ZM15.4498 3.7803C15.4098 4.0303 15.3898 4.2803 15.3898 4.5303C15.3898 6.7803 17.2098 8.5993 19.4498 8.5993C19.6998 8.5993 19.9398 8.5703 20.1898 8.5303V16.5993C20.1898 19.9903 18.1898 22.0003 14.7898 22.0003H7.40076C3.99976 22.0003 1.99976 19.9903 1.99976 16.5993V9.2003C1.99976 5.8003 3.99976 3.7803 7.40076 3.7803H15.4498Z" fill="#130F26"></path>
                                        </g></g>
                                    </svg>
                                </div>	
                                <span className="nav-text">Projects</span>
                            </button>
                        </div>
					</li>
                    <li>
                        <div className="accordion-item">
                            <button>
                                <div className="menu-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="IconlyFilter">
                                        <g id="Filter">
                                        <path id="Filter_2" fillRule="evenodd" clipRule="evenodd" d="M8.87774 6.37856C8.87774 8.24523 7.33886 9.75821 5.43887 9.75821C3.53999 9.75821 2 8.24523 2 6.37856C2 4.51298 3.53999 3 5.43887 3C7.33886 3 8.87774 4.51298 8.87774 6.37856ZM20.4933 4.89833C21.3244 4.89833 22 5.56203 22 6.37856C22 7.19618 21.3244 7.85989 20.4933 7.85989H13.9178C13.0856 7.85989 12.4101 7.19618 12.4101 6.37856C12.4101 5.56203 13.0856 4.89833 13.9178 4.89833H20.4933ZM3.50777 15.958H10.0833C10.9155 15.958 11.5911 16.6217 11.5911 17.4393C11.5911 18.2558 10.9155 18.9206 10.0833 18.9206H3.50777C2.67555 18.9206 2 18.2558 2 17.4393C2 16.6217 2.67555 15.958 3.50777 15.958ZM18.5611 20.7778C20.4611 20.7778 22 19.2648 22 17.3992C22 15.5325 20.4611 14.0196 18.5611 14.0196C16.6623 14.0196 15.1223 15.5325 15.1223 17.3992C15.1223 19.2648 16.6623 20.7778 18.5611 20.7778Z" fill="#130F26"></path>
                                        </g></g>
                                    </svg>
                                </div>	
                                <span className="nav-text">Product</span>
                            </button>
                        </div>
					</li>
				</ul>
				</Accordion>
				<div className="copyright">
					<p className="fs-14"><strong>Bitcot Personal Banking Admin</strong> © 2024 All Rights Reserved</p>
					
				</div>
			</div>
		</div>
    </div>
    )
}

export default Sidebar