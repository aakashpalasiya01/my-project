
"use client";
import Image from 'next/image';
import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';
import placeholder from "@/assets/images/placeholder.jpg";
import { useEffect } from 'react';

const Header = () => {

    // useEffect(() => {
    //     const

    //     window.addEventListener("scroll", () => {

    //     });



    //     return () => window.removeEventListener("scroll", true);
    // },[]);

    return (
        <header id="header" className="bt_header_wrapper header_sticky">
            <ul>
                <li>
                    <div className="search-bar">
                        <input type="text" placeholder="Search here..." />
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="1" d="M16.6751 19.4916C16.2194 19.036 16.2194 18.2973 16.6751 17.8417C17.1307 17.3861 17.8694 17.3861 18.325 17.8417L22.9916 22.5084C23.4473 22.964 23.4473 23.7027 22.9916 24.1583C22.536 24.6139 21.7973 24.6139 21.3417 24.1583L16.6751 19.4916Z" fill="white"></path>
                            <path d="M12.8333 18.6667C16.055 18.6667 18.6667 16.055 18.6667 12.8334C18.6667 9.61169 16.055 7.00002 12.8333 7.00002C9.61166 7.00002 6.99999 9.61169 6.99999 12.8334C6.99999 16.055 9.61166 18.6667 12.8333 18.6667ZM12.8333 21C8.323 21 4.66666 17.3437 4.66666 12.8334C4.66666 8.32303 8.323 4.66669 12.8333 4.66669C17.3436 4.66669 21 8.32303 21 12.8334C21 17.3437 17.3436 21 12.8333 21Z" fill="white"></path>
                        </svg>
                    </div>
                </li>
                <li>
                    <Dropdown>
                        <Dropdown.Toggle className='header-profile'>
                            <span><Image src={placeholder} alt='Profile' width={40} height={40} /></span>
                            <strong>Adam Joe</strong>
                            <small>Admin</small>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Link href="#">Action</Link>
                            <Link href="#">Another action</Link>
                            <Link href="#">Something else</Link>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
            </ul>
        </header>
    )
}

export default Header;