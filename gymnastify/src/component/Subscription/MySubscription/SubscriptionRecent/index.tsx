import React from "react";
import * as API from "@/store/serverApiAction/serverApis";
import moment from "moment";
import { cookies } from "next/headers";
import { User } from "../../SubscriptionDetails/ThankYouType";

async function SubscriptionRecent(props: any) {

  const response = await API.get(`/wp-json/wp/v2/users/invoice/view/?invoice_id=${props?.params?.slug}`);
  const ThankyoupageApiAction = response?.data?.data;

  const nextCookies = cookies();
  const user = nextCookies.get("user") ? nextCookies.get("user") : null;
  const userData: User | null = user ? JSON.parse(user.value) : null;

  function truncateString(str: string, maxLength: number) {
    if (str?.length <= maxLength) {
      return str;
    }
    return str?.slice(0, maxLength - 3) + '...';
  }

  const TruncatedText = ({ text, maxLength }: { text: string; maxLength: number }) => {
    const truncatedText = truncateString(text, maxLength);
    return <span>{truncatedText}</span>;
  };


  return (
    <main className="main_content">
      <section className="thank_subs">
        <div className="thank_subwrap">
          <div className="order_details">
            <div className="prvcy_title">
              <h4>Order details</h4>
            </div>
            <div className="details_orow">
              <div className="details_orcol">
                <div className="details_orlabel">
                  <label htmlFor="order_number">Order number</label>
                  <TruncatedText text={ThankyoupageApiAction?.order_number} maxLength={10} />
                </div>
              </div>
              <div className="details_orcol">
                <div className="details_orlabel">
                  <label htmlFor="date">Date</label>
                  <span>{ThankyoupageApiAction?.date ? moment(ThankyoupageApiAction?.date * 1000).format("MMMM D, YYYY") : "-"}</span>
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
                  <span>{ThankyoupageApiAction?.payment_method?.brand ? ThankyoupageApiAction?.payment_method?.brand : "-"}</span>
                </div>
              </div>
              <div className="details_orcol">
                <div className="details_orlabel">
                  <label htmlFor="total">Total</label>
                  <span>
                    ${ThankyoupageApiAction?.amount ? ThankyoupageApiAction?.amount : "-"} / Per {ThankyoupageApiAction?.interval ? ThankyoupageApiAction?.interval.charAt(0).toUpperCase() + ThankyoupageApiAction?.interval.slice(1) : '-'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SubscriptionRecent;
