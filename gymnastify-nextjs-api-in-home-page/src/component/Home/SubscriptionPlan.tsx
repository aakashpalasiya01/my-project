/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from "next/image";
import subplan from "@/assets/images/subplan.svg";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getPlanProductList } from "@/store/actions/authAction";
import CheckoutFormModal from "./CheckoutFormModal";

const SubscriptionPlan = () => {

    const dispatch = useAppDispatch();
    const { productList } = useAppSelector(state => state.auth);

    useEffect(() => {
        dispatch(getPlanProductList())
    },[]);

  return (
    <section className="subs_plan" id="subs_plan">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="subsplan_block">
              <div className="sec_title">
                <h2>Subscription Plan</h2>
              </div>
              
              <div className="plan_sbtab">
                <Tabs defaultActiveKey="0" id="uncontrolled-tab-example">
                    {productList.map((item, index) => (
                        <Tab eventKey={index} title={item.name} key={item.id}>
                            <div className="subsplan_content position-relative">
                                <div className="subsplan_ele position-relative">
                                    <h4>{ item.name }</h4>
                                    <div className="subplan_amount">
                                        <div className="subplan_doller">${+item.amount}</div>
                                        <span>
                                            {/* .{Number((+item.amount - Math.floor(+item.amount)).toFixed(2))} */}
                                            / <span className="per_month"> Per Month</span>
                                        </span>
                                    </div>
                                    <p style={{ minHeight: 78 }}>
                                        {item.description}
                                    </p>
                                    <div className="get_started">
                                        <CheckoutFormModal productId={item.id} />
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
              <Image src={subplan} alt="subplan" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlan;
