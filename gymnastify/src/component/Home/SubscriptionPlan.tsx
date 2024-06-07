import Image from 'next/image'
import React from 'react'

import Link from 'next/link';
import subplan from "@/assets/images/subplan.svg";


import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const SubscriptionPlan = () => {
  return (
    <section className="subs_plan" id="subs_plan">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="subsplan_block">
                                <div className="sec_title">
                                    <h2>Subscription Plan</h2>
                                </div>
                                <div
                                    className="plan_sbtab"
                                    data-aos="zoom-in-right"
                                    data-aos-duration="1000"
                                >
                                    <Tabs defaultActiveKey="0" id="uncontrolled-tab-example">
                                        <Tab
                                            eventKey={0}
                                            title={"Monthly Billing"}
                                            key={"Monthly Billing"}
                                        >
                                            <div className="subsplan_content position-relative">
                                                <div className="subsplan_ele position-relative">
                                                    <h4>Pre-Recorded Classes</h4>
                                                    <div className="subplan_amount">
                                                        <div className="subplan_doller">
                                                            $9
                                                        </div>
                                                        <span>
                                                            {/* .{Number((+item.amount - Math.floor(+item.amount)).toFixed(2))} */}
                                                            /{" "}
                                                            <span className="per_month">
                                                                {" "}
                                                                Per Month
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <p style={{ minHeight: 78 }}>
                                                        Dive into the world of knowledge with our Pre- Recorded Class Subscription. Gain access to a rich collection of pre-recorded classes on a variety of skills.
                                                    </p>
                                                    <div className="get_started">
                                                        {/* <CheckoutFormModal productId={item.id} /> */}
                                                        <Link
                                                            href={"#"}
                                                            className="btn_animated primary_btn btn_blockmd over_hidden"
                                                        >
                                                            Get Started
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="sbsplan_layers"></div>
                                            </div>
                                        </Tab>
                                        <Tab
                                            eventKey={1}
                                            title={"Annual Billing"}
                                            key={"Annual Billing"}
                                        >
                                            <div className="subsplan_content position-relative">
                                                <div className="subsplan_ele position-relative">
                                                    <h4>Pre-Recorded Classes</h4>
                                                    <div className="subplan_amount">
                                                        <div className="subplan_doller">
                                                            $9
                                                        </div>
                                                        <span>
                                                            /{" "}
                                                            <span className="per_month">
                                                                {" "}
                                                                Per Year
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <p style={{ minHeight: 78 }}>
                                                        Dive into the world of knowledge with our Pre- Recorded Class Subscription. Gain access to a rich collection of pre-recorded classes on a variety of skills.
                                                    </p>
                                                    <div className="get_started">
                                                        <Link
                                                            href={"#"}
                                                            className="btn_animated primary_btn btn_blockmd over_hidden"
                                                        >
                                                            Get Started
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="sbsplan_layers"></div>
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="subsplan_img">
                                <Image
                                    src={subplan}
                                    alt="subplan"
                                    className="img-fluid"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default SubscriptionPlan