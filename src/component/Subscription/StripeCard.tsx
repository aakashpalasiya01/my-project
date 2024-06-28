import { StripCardType } from "./SubscriptionType";
import Image from "next/image";
import ccedit from "@/assets/images/icons/edit_icn.svg";
import checkIcn from "@/assets/images/icons/check_icn.svg";
import DeleteButton from "./DeleteButton";
import DefaultRadio from "./DefaultRadio";


interface StripeCardPropsType {
  item: StripCardType;
}

const StripeCard = ({ item }: StripeCardPropsType) => {
  return (
    <div className="ccard_details_items shadow_card" style={{boxShadow: +item.is_default ? "1px 2px 3px 1px rgb(0 0 0 / 50%)" : "inherit"}}>
      <div className="cc_details_items_top">
        <div
          className="cc_details_top_left"
          style={{ textTransform: "capitalize" }}
        >
          {item.brand} <Image src={checkIcn} alt="icons"></Image>
        </div>
        <div className="cc_details_top_right">
          <div className="cart_actions">
          {/* <button className="btn_acedit">
                <Image src={ccedit} alt="icons"></Image>
           </button> */}
            <DeleteButton itemId={item.id} />
          </div>
        </div>
      </div>
      <div className="cc_details_items_middle">XXXX XXXX XXXX {item.last4}</div>
      <div className="cc_details_items_bottom">
        <label className="as_default">
          <span className="as_default_label">Set as default</span>

          <DefaultRadio is_default={+item.is_default} card_token={item.id} />

          <span className="as_checkmark"></span>
        </label>
      </div>
    </div>
  );
};

export default StripeCard;
