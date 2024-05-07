'use client'
import Image from 'next/image';
import React from 'react'
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import subplan from "@/assets/images/subplan.svg";

const Subscription = () => {
  return (
<section className="subs_plan">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="subsplan_block">
                <div className="sec_title">
                  <h2>Subscription Plan</h2>
                </div>
                <div className="plan_sbtab">
                  <Tabs
                    defaultActiveKey="home"
                    id="uncontrolled-tab-example"
                  >
                    <Tab eventKey="home" title="Monthly Billing">
                      <div className="subsplan_content position-relative">
                        <div className="subsplan_ele position-relative">
                          <h4>Pre-Recorded Classes</h4>
                          <div className="subplan_amount">
                            <div className="subplan_doller">$9</div>
                            <span>
                              .99 <span className="per_month">Per Month</span>
                            </span>
                          </div>
                          <p>
                            Dive into the world of knowledge with our Pre-
                            Recorded Class Subscription. Gain access to a rich
                            collection of pre-recorded classes on a variety of
                            skills.
                          </p>
                          <div className="get_started">
                            <button className="primary_btn btn_blockmd">
                              Get Started
                            </button>
                          </div>
                        </div>
                        <div className="sbsplan_layers"></div>
                      </div>
                    </Tab>
                    <Tab eventKey="profile" title="Annual Billing">
                      <div className="subsplan_content position-relative">
                        <div className="subsplan_ele position-relative">
                          <h4>Pre-Recorded Classes</h4>
                          <div className="subplan_amount">
                            <div className="subplan_doller">$15</div>
                            <span>
                              .99 <span className="per_month">Per Month</span>
                            </span>
                          </div>
                          <p>
                            Dive into the world of knowledge with our Pre-
                            Recorded Class Subscription. Gain access to a rich
                            collection of pre-recorded classes on a variety of
                            skills.
                          </p>
                          <div className="get_started">
                            <button className="primary_btn btn_blockmd">
                              Get Started
                            </button>
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
                <Image src={subplan} alt="subplan" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>  )
}

export default Subscription