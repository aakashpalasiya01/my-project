/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from "next/image";
import subplan from "@/assets/images/subplan.svg";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getPlanProductList } from "@/store/actions/authAction";
// import CheckoutFormModal from "./CheckoutFormModal";
import { RootState } from "@/store/store";
import Link from "next/link";
import { ROUTES_PATH, subscriptionStatus } from "@/utils/constant";
import moment from "moment";

const SubscriptionPlan = () => {
  const dispatch = useAppDispatch();
  const { productList } = useAppSelector(state => state.auth);
  const { subscription, user } = useAppSelector((state: RootState) => state.auth);

  const currentTimestamp = moment().unix();

  useEffect(() => {
    if ((subscription && +subscription?.current_period_end <=  currentTimestamp) || !subscription || subscription.status === subscriptionStatus.canceled) dispatch(getPlanProductList());
  }, []);

  // The provided timestamp is greater than the current time.
  if (subscription && +subscription?.current_period_end > currentTimestamp && subscription.status === subscriptionStatus.active) {
    return null;
  }

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
                  {productList.map((item, index) => (
                    <Tab
                      eventKey={index}
                      title={item.interval_name}
                      key={item.id}
                    >
                      <div className="subsplan_content position-relative">
                        <div className="subsplan_ele position-relative">
                          <h4>{item.name}</h4>
                          <div className="subplan_amount">
                            <div className="subplan_doller">
                              ${+item.amount}
                            </div>
                            <span>
                              {/* .{Number((+item.amount - Math.floor(+item.amount)).toFixed(2))} */}
                              /{" "}
                              <span className="per_month">
                                {" "}
                                Per {item.interval}
                              </span>
                            </span>
                          </div>
                          <p style={{ minHeight: 78 }}>{item.description}</p>
                          <div className="get_started">
                            {/* <CheckoutFormModal productId={item.id} /> */}
                            <Link
                              href={
                                user ? ROUTES_PATH.SUBSCRIPTION_CARD +
                                `?product_id=${item.id}`
                                : ROUTES_PATH.LOGIN
                              }
                              className="btn_animated primary_btn btn_blockmd over_hidden"
                            >
                              Get Started
                            </Link>
                          </div>
                        </div>
                        <div className="sbsplan_layers"></div>
                      </div>
                    </Tab>
                  ))}
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
  );
};

export default SubscriptionPlan;
