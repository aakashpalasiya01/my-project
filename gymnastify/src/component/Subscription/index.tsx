import React from "react";
import Link from "next/link";
import { ROUTES_PATH } from "@/utils/constant";
import * as API from "@/store/serverApiAction/serverApis";
import { StripCardType } from "./SubscriptionType";
import StripeCard from "./StripeCard";
import Image from "next/image";
import emptyBoxicn from "@/assets/images/icons/empty_boxicn.png";
import AddNewButton from "./AddNewButton";
import moment from "moment";
import PayNowButton from "./PayNowButton";

const Subscription = async (props: any) => {
  const productId = props?.searchParams?.product_id;

  // Fetch the latest card list
  const res = await API.get("wp-json/wp/v2/users/payment-method?cache="+moment().unix(), { cache: moment().unix() });

  // Handle no cards scenario
  const noCardAdded = (
    <div className="no_datafind">
      <div className="no_datafind_block">
        <div className="nodata_img">
          <Image src={emptyBoxicn} alt="icons"></Image>
        </div>
        <p>No Card Added</p>
      </div>
    </div>
  );

  // Extract card list from response
  const cardList: StripCardType[] = res?.data?.data?.card_list;

  const isDefaultCard = cardList.find(e => +e.is_default === 1);

  const defaultCardId = isDefaultCard ? isDefaultCard.id : (cardList.length ? cardList[0].id : null);
  // Render the list of cards
  const cardListContent = (
    <>
      <div className="row">
        {cardList?.map(item => (
          <div className="col-lg-6 col-xl-3" key={item.id}>
            <StripeCard item={item} />
          </div>
        ))}
      </div>
      {productId && defaultCardId ? (
        <PayNowButton productId={productId} payment_method_id={defaultCardId} />
      ) : null}
    </>
  );

  // Determine the content to display
  const cardContent = res.success && cardList?.length ? cardListContent : noCardAdded

  return (
    <main className="main_content">
      <section className="ccard_details">
        <div className="container">
          <div className="cc_card_head">
            <div className="cc_card_head_title">Card Details</div>
            {cardList && cardList.length > 2 ?
              <AddNewButton /> :
              <Link
                href={
                  ROUTES_PATH.ADD_NEW_CARD +
                  `${productId ? "?product_id=" + productId : ""}`
                }
                className="btn_animated btn_blocksm primary_btn"
              >
                Add New
              </Link>
            }
          </div>
          {(cardList?.length) ? <p><b>Note:</b> Payment will be deducted automatically from the default card on next renewal date.</p> : null}
          {res?.message && !res?.success ? 
            <div className="fade alert alert-danger alert-dismissible show">
              <div className="alert-heading h4">Oh snap! You got an error!</div>
              <p>{res?.message}</p>
            </div>
          : cardContent}
        </div>
      </section>
    </main>
  );
};

export default Subscription;
