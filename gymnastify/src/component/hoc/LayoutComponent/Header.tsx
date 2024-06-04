"use client";
import Image from "next/image";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Link from "next/link";
// import notifi from "@/assets/images/icons/notifi.svg";
// import quest from "@/assets/images/icons/ques.svg";
import userflow from "@/assets/images/icons/profile.png";
import { ROUTES_PATH } from "@/utils/constant";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { usePathname, useRouter } from "next/navigation";
import { logoutAction } from "@/store/actions/authAction";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import { revalidateAllLayout } from "@/utils/RevalidateService";

const Header = () => {
  const { token, user, subscription } = useAppSelector(
    (state: RootState) => state.auth
  );
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const userID: any = user?.user_id;

  const handleLogout = async () => {
    Swal.fire({
      title: "Are you sure Logout?",
      icon: "warning",

      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "logout!",
    }).then((result: any) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "logout!",
          text: "You have been logout successfully.",
          icon: "success",
        }).then(() => {
          Logout();
          revalidateAllLayout();
        });
      }
    });
  };

  const Logout = async () => {
    await dispatch(logoutAction(userID));
    router.push(ROUTES_PATH.LOGIN);
  };
  const Profile_name = subscription ? (
    <span className="dropdown_title">
      {user?.first_name &&
        user?.first_name.charAt(0).toUpperCase() +
        user?.first_name.slice(1)}{" "}
      {user?.last_name &&
        user?.last_name.charAt(0).toUpperCase() + user?.last_name.slice(1)}
    </span>
  ) : "Registered";

  return (
    <header className="header_hero">
      <Navbar expand="lg">
        <div className="container">
          <Link href={ROUTES_PATH.HOME}>
            <Navbar.Brand data-aos="fade-down">
              <span>Gym</span>nastify
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="inner_nav" id="basic-navbar-nav">
            {!token ? (
              <ul className="navbar-nav ml-auto gym_items">
                <li className="regi_nowbtn">
                  <Link href={ROUTES_PATH.LOGIN}>Login</Link>
                </li>
                <li className="regi_nowbtn">
                  <Link className="active" href={ROUTES_PATH.REGISTRATION}>
                    Register Now
                  </Link>
                </li>
              </ul>
            ) : (
              <>
                <ul className="navbar-nav me-auto inner_nav_left">
                  <li>
                    <Link
                      className={
                        pathname.includes(ROUTES_PATH.HOME) ? `active` : ``
                      }
                      href={ROUTES_PATH.HOME}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        pathname.includes(ROUTES_PATH.WATCHLIST) ? `active` : ``
                      }
                      href={ROUTES_PATH.WATCHLIST}
                    >
                      Watch List
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        pathname.includes(ROUTES_PATH.ASSIGNMENTS)
                          ? `active`
                          : ``
                      }
                      href={ROUTES_PATH.ASSIGNMENTS}
                    >
                      Assignments
                    </Link>
                  </li>
                  <li>
                    <Link href={ROUTES_PATH.INSTRUCTORCHAT}>
                      Instructor Chat
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto inner_nav_right">
                  {/* <li>
                    <Link href="#">
                      <Image src={notifi} alt="icons"></Image>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image src={quest} alt="icons"></Image>
                    </Link>
                  </li> */}
                  <li>
                    <Dropdown className="dropdown_inner">
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        className="dropdwn_btn"
                      >
                        {subscription && user ? (
                          <span className="dropdown_titlebg">
                            {user?.levels?.replace(/-/g, " ")}
                          </span>
                        ) : (
                          <span className="dropdown_title">{Profile_name}</span>
                        )}
                        <span className="icn_imgprofile">
                          <Image
                            src={
                              user?.user_profile_photo
                                ? user?.user_profile_photo
                                : userflow
                            }
                            alt="User"
                            width={43}
                            height={43}
                          ></Image>
                        </span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <li className="dropdwn_itemslable">
                          <Dropdown.Item>
                            <Link href={ROUTES_PATH.PROFILE}>
                              <span>{user?.first_name &&
                                user?.first_name?.charAt(0)?.toUpperCase() +
                                user?.first_name?.slice(1)}{" "}
                                {user?.last_name &&
                                  user?.last_name?.charAt(0)?.toUpperCase() + user?.last_name?.slice(1)}</span>
                            </Link>
                            <Link href={ROUTES_PATH.PROFILE}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="11.374"
                                height="11.374"
                                viewBox="0 0 11.374 11.374"
                              >
                                <path
                                  id="Icon_feather-edit-2"
                                  data-name="Icon feather-edit-2"
                                  d="M10.848,3.691A1.48,1.48,0,0,1,12.94,5.783L5.877,12.846,3,13.631l.785-2.877Z"
                                  transform="translate(-2.5 -2.757)"
                                  fill="none"
                                  stroke="#000"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1"
                                />
                              </svg>
                            </Link>
                          </Dropdown.Item>
                        </li>
                        <li>
                          <Dropdown.Item as={Link} href={ROUTES_PATH.FAVORITES}>
                            Favorites
                          </Dropdown.Item>
                        </li>
                        <li>
                          <Dropdown.Item as={Link} href={ROUTES_PATH.BLOG}>
                            Blog
                          </Dropdown.Item>
                        </li>
                        <li>
                          <Dropdown.Item as={Link} href={ROUTES_PATH.FAQS}>
                            FAQs
                          </Dropdown.Item>
                        </li>
                        {subscription && (<li>
                          <Dropdown.Item as={Link} href={ROUTES_PATH.SUBSCRIPTION}>
                            My Subscriptions
                          </Dropdown.Item>
                        </li>)}
                        <li>
                          <Dropdown.Item as={Link} href={ROUTES_PATH.SUBSCRIPTION_CARD}>
                            Payment Method
                          </Dropdown.Item>
                        </li>
                        <li>
                          <Dropdown.Item as={Link} href={ROUTES_PATH.TEACHERS}>
                            Teachers
                          </Dropdown.Item>
                        </li>
                        <li>
                          <Dropdown.Item
                            as={Link}
                            href={ROUTES_PATH.WATCHHISTORY}
                          >
                            Watch History
                          </Dropdown.Item>
                        </li>
                        <li>
                          <Dropdown.Item as={Link} href={ROUTES_PATH.PROFILE}>
                            Profile and Settings
                          </Dropdown.Item>
                        </li>
                        <li>
                          <Dropdown.Item href="" onClick={handleLogout}>
                            Logout
                          </Dropdown.Item>
                        </li>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </ul>
              </>
            )}
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
