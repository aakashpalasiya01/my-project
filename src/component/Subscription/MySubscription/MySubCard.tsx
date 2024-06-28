import moment from "moment";
import Link from "next/link";
import { cookies } from "next/headers";
import { SubscribeResponseType } from "@/types/authType";
import { ROUTES_PATH, subscriptionStatus } from "@/utils/constant";
import CancleSubscription from "./CancleSubscription";

export default function MySubCard() {
  
  const nextCookies = cookies();
  const isSubscription = nextCookies.get("subscription") ? nextCookies.get("subscription") : null;

  const subscription: SubscribeResponseType | null = isSubscription ? JSON.parse(isSubscription.value) : null;
  if (!subscription || subscription?.status === subscriptionStatus.canceled) return null;

  const endData = subscription?.current_period_end ? moment(subscription?.current_period_end * 1000).format("MMMM D, YYYY") : "-";

  if(subscription?.status === subscriptionStatus.canceled) return null;

  
  return (
    <div className="mysub_card">
      <div className="monthly_mysub">
        <div className="monthly_mysub_left">
          <div className="mysub_title">
            <h3>{ subscription.plan.interval } Subscription</h3>
            <Link href={ROUTES_PATH.SUBSCRIPTION_DETAILS}>
              View Details
            </Link>
          </div>
          <div className="details_orow">
            <div className="details_orcol">
              <div className="details_orlabel">
                <label htmlFor="SubscriptionType">Subscription Type</label>
                <span>{subscription?.plan.interval}</span>
              </div>
            </div>
            <div className="details_orcol">
              <div className="details_orlabel">
                <label htmlFor="EndDate">End Date</label>
                <span>{endData}</span>
              </div>
            </div>
            <div className="details_orcol">
              <div className="details_orlabel">
                <label htmlFor="NextBillDate">Next Bill Date</label>
                <span>{endData}</span>
              </div>
            </div>
            <div className="details_orcol">
              <div className="details_orlabel">
                <label htmlFor="NextBillAmount">Next Bill Amount</label>
                <span>
                  ${typeof subscription?.plan?.price === 'number' ? subscription?.plan?.price.toFixed(2) : "-"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="monthly_mysub_right">
          <Link href={ROUTES_PATH.SUBSCRIPTION_CARD} className="btn_animated outline_btn btn_blockmd">
            Update Payment Method
          </Link>
          <CancleSubscription />
        </div>
      </div>
    </div>
  );
}
