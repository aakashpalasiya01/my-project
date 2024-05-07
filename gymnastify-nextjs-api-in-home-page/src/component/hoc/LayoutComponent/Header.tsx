"use client";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Link from "next/link";
import notifi from "../../../assets/images/icons/notifi.svg";
import quest from "../../../assets/images/icons/ques.svg";
import userflow from "../../../assets/images/icons/userflow.png";
import { ROUTES_PATH } from "@/utils/constant";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { usePathname, useRouter } from "next/navigation";
import { logoutAction } from "@/store/actions/authAction";
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

const Header = () => {
  // const { token, user } = useAppSelector((state: RootState) => state.auth);
  const token='';
  const user ='';
  const pathname = usePathname()
  const dispatch = useAppDispatch()
  const router = useRouter();
  // const userID: any = user?.user_id;
  const userID=''

  const handleLogout = async () => {
    Swal.fire({
      title: "Are you sure Logout?",
      icon: "warning",

      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "logout!"
    }).then((result: any) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "logout!",
          text: "You have been logout successfully.",
          icon: "success"
        }).then(() => Logout());
      }
    });
  }

  const Logout = async () => {
    await dispatch(logoutAction(userID));
    router.push(ROUTES_PATH.LOGIN);
  }

  return (
    <header className="header_hero">
      <Navbar expand="lg">
        <div className="container">
          <Navbar.Brand href={ROUTES_PATH.HOME}>
            <span>Gym</span>nastify
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="inner_nav" id="basic-navbar-nav">
            {!token ? (
              <Nav className="ml-auto gym_items">
                <li className="regi_nowbtn">
                  <Link href={ROUTES_PATH.LOGIN}>Login</Link>
                </li>
                <li className="regi_nowbtn">
                  <Link
                    className="active"
                    href={ROUTES_PATH.REGISTRATION}
                  >
                    Register Now
                  </Link>
                </li>
              </Nav>
            ) : (
              <>
                <Nav className="me-auto inner_nav_left">
                  <li>
                    <Link className={pathname.includes(ROUTES_PATH.HOME) ? `active` : ``} href={ROUTES_PATH.HOME}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className={pathname.includes(ROUTES_PATH.WATCHLIST) ? `active` : ``} href={ROUTES_PATH.WATCHLIST}>Watch List</Link>
                  </li>
                  <li>
                    <Link className={pathname.includes(ROUTES_PATH.ASSIGNMENTS) ? `active` : ``} href={ROUTES_PATH.ASSIGNMENTS}>Assignments</Link>
                  </li>
                  <li>
                    <Link href={ROUTES_PATH.INSTRUCTORCHAT}>Instructor Chat</Link>
                  </li>
                </Nav>
                <Nav className="ml-auto inner_nav_right">
                  <li>
                    <Link href="#">
                      <Image src={notifi} alt="icons"></Image>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image src={quest} alt="icons"></Image>
                    </Link>
                  </li>
                  <li>
                    <Dropdown className="dropdown_inner">
                      <Dropdown.Toggle id="dropdown-basic" className="dropdwn_btn">
                        <span className="dropdown_titlebg">{user ? `${user?.first_name && user?.first_name?.charAt(0)?.toUpperCase() + user?.first_name?.slice(1,)} ${user?.last_name && user?.last_name?.charAt(0)?.toUpperCase() + user?.last_name?.slice(1,)}` : ""}</span>
                        {/* <span className="dropdown_title">Registered</span> */}
                        <Image src={userflow} alt="userflow"></Image>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <li><Dropdown.Item as={Link} href={ROUTES_PATH.FAVORITES}>Favorites</Dropdown.Item></li>
                        <li><Dropdown.Item href="">Blog</Dropdown.Item></li>
                        <li><Dropdown.Item as={Link} href={ROUTES_PATH.FAQS}>FAQs</Dropdown.Item></li>
                        <li><Dropdown.Item as={Link} href={ROUTES_PATH.WATCHHISTORY}>Watch History</Dropdown.Item></li>
                        <li><Dropdown.Item as={Link} href={ROUTES_PATH.PROFILE}>Profile and Settings</Dropdown.Item></li>
                        <li><Dropdown.Item href="" onClick={handleLogout}>Logout</Dropdown.Item></li>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </Nav>
              </>
            )}
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
