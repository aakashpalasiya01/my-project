import React from "react";
import { cookies } from "next/headers";
import moment from "moment";
import * as API from "@/store/serverApiAction/serverApis";
import { Subscription } from "./ThankYouType";
import PauseResume from "./PauseResume";

const SubscriptionDetails = async () => {

  const nextCookies = cookies();

  const subscription = nextCookies.get("subscription") ? nextCookies.get("subscription") : null;
  if (!subscription) return "User Not Subscribed";
  const subscriptionData = subscription ? JSON.parse(subscription.value) : null;
  const response = await API.get(`/wp-json/wp/v2/users/subscription/view/?subscription_id=${subscriptionData?.id}&cache=${moment().unix()}`)
  const ThankyoupageApiAction: Subscription = response.data.data;

  return (
    <main className="main_content">
      <section className="subs_details">
        <div className="sec_title_md text-center">
          <h5>Subscription Detail</h5>
        </div>
        <div className="cart_table table-responsive">
          <table className="table">
            <tbody>
              <tr>
                <td>Start date :</td>
                <td>{ThankyoupageApiAction?.start_date ? moment(ThankyoupageApiAction?.start_date * 1000).format("MMMM D, YYYY") : "-"}</td>
              </tr>
              <tr>
                <td>Last order date :</td>
                <td>{ThankyoupageApiAction?.end_date ? moment(ThankyoupageApiAction?.end_date * 1000).format("MMMM D, YYYY") : "-"}</td>
              </tr>
              <tr>
                <td>Next payment date :</td>
                <td>{ThankyoupageApiAction?.end_date ? moment(ThankyoupageApiAction?.end_date * 1000).format("MMMM D, YYYY") : "-"}</td>
              </tr>
              <tr>
                <td>Payment :</td>
                <td>Via {ThankyoupageApiAction?.payment_method?.brand ? ThankyoupageApiAction?.payment_method?.brand : "-"}</td>
              </tr>
              <PauseResume ThankyoupageApiAction={ThankyoupageApiAction}/>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default SubscriptionDetails;
