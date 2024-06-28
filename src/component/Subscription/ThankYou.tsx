import React from "react";
import Image from "next/image";
import thanksub from "@/assets/images/icons/thank_sub.svg";
import * as API from "@/store/serverApiAction/serverApis";
import { ROUTES_PATH } from "@/utils/constant";
import Link from "next/link";
import moment from "moment";
import { Subscription, User } from "./SubscriptionDetails/ThankYouType";
import { cookies } from "next/headers";

async function ThankYou(props: any) {
  const response = await API.get(`/wp-json/wp/v2/users/subscription/view/?subscription_id=${props?.searchParams?.sub_id}`)
  const ThankyoupageApiAction: Subscription = response?.data?.data;
  const nextCookies = cookies();
  const user = nextCookies.get("user") ? nextCookies.get("user") : null;
  const userData: User | null = user ? JSON.parse(user.value) : null;


  return (
    <main className="main_content">
      <section className="thank_subs">
        <div className="thank_subwrap">
          <div className="thanksub_icn">
            <Image src={thanksub} alt="icons"></Image>
            <div className="thanksub_title text-center">
              <h4>
                Thank you. <br /> Your subscription plan has been Confirmed!
              </h4>
            </div>
            <Link href={ROUTES_PATH.HOME}>
              <div className="back_homebtn">
                <button className="btn_animated btn_blockmd primary_btn">Back To Home</button>
              </div>
            </Link>
          </div>
          <div className="order_details">
            <div className="prvcy_title">
              <h4>Order details</h4>
            </div>
            <div className="details_orow">
              <div className="details_orcol">
                <div className="details_orlabel">
                  <label htmlFor="order_number">Order number</label>
                  <span className="text-truncated">{ThankyoupageApiAction?.last_invoice?.id}</span>
                </div>
              </div>
              <div className="details_orcol">
                <div className="details_orlabel">
                  <label htmlFor="date">Date</label>
                  <span className="text-capitalize">{ThankyoupageApiAction?.last_invoice?.date ? moment(ThankyoupageApiAction?.last_invoice?.date * 1000).format("MMMM D, YYYY") : "-"}</span>
                </div>
              </div>
              <div className="details_orcol">
                <div className="details_orlabel">
                  <label htmlFor="email">Email</label>
                  <span className="email-truncated">{userData?.email ? userData?.email : "-"}</span>
                </div>
              </div>
              <div className="details_orcol">
                <div className="details_orlabel">
                  <label htmlFor="payment">Payment method</label>
                  <span className="text-capitalize">{ThankyoupageApiAction?.payment_method?.brand ? ThankyoupageApiAction.payment_method.brand.charAt(0).toUpperCase() + ThankyoupageApiAction.payment_method.brand.slice(1) : "-"}</span>
                </div>
              </div>
              <div className="details_orcol">
                <div className="details_orlabel">
                  <label htmlFor="total">Total</label>
                  <span className="d-flex">
                    ${ThankyoupageApiAction?.last_invoice?.amount_due ? ThankyoupageApiAction?.last_invoice?.amount_due : "-"} 
                    <span className="per_month">/ Per {ThankyoupageApiAction?.plan?.interval ? ThankyoupageApiAction?.plan?.interval.charAt(0).toUpperCase() + ThankyoupageApiAction?.plan?.interval.slice(1) : "-"}</span>
                  </span>
                </div>
              </div>
            </div>
            {/* <div className="cart_table table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Plan</th>
                    <th>Price</th>
                    <th>Coupon</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Annual Plan</td>
                    <td>$19.99 / Per Month</td>
                    <td>--</td>
                    <td>$19.99 / Per Month</td>
                  </tr>
                </tbody>
              </table>
            </div> */}
          </div>
          <div className="order_details ordersub_details">
            <div className="prvcy_title">
              <h4>Subscription details</h4>
            </div>
            <div className="cart_table table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Plan</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Premium:</td>
                    <td>
                    ${ThankyoupageApiAction?.last_invoice?.amount_due ? ThankyoupageApiAction?.last_invoice?.amount_due : "-"} / Per {ThankyoupageApiAction?.plan?.interval ? ThankyoupageApiAction?.plan?.interval.charAt(0).toUpperCase() + ThankyoupageApiAction?.plan?.interval.slice(1) : "-"}
                    </td>
                  </tr>
                  <tr>
                    <td>Coupon:</td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td>Subtotal:</td>
                    <td>${ThankyoupageApiAction?.last_invoice?.amount_due ? ThankyoupageApiAction?.last_invoice?.amount_due : "-"}</td>
                  </tr>
                  <tr>
                    <td>Payment Method:</td>
                    <td className="text-capitalize">{ThankyoupageApiAction?.payment_method?.brand ? ThankyoupageApiAction?.payment_method?.brand.charAt(0).toUpperCase() + ThankyoupageApiAction?.payment_method?.brand.slice(1) : "-"}</td>
                  </tr>
                  <tr>
                    <td>Total:</td>
                    <td>
                    ${ThankyoupageApiAction?.last_invoice?.amount_due ? ThankyoupageApiAction?.last_invoice?.amount_due : "-"} / Per {ThankyoupageApiAction?.plan?.interval ? ThankyoupageApiAction?.plan?.interval.charAt(0).toUpperCase() + ThankyoupageApiAction?.plan?.interval.slice(1) : "-"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ThankYou;