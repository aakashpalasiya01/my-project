"use client";
import { setSubscriptionPlan } from "@/store/actions/authAction";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { SubscribeResponseType } from "@/types/authType";
import { ROUTES_PATH } from "@/utils/constant";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

const PayNowButton = ({ productId, payment_method_id }: { productId: string; payment_method_id: string }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state: RootState) => state.auth);
  const [loaded, setLoaded] = useState(false);

  const handlePayNow = () => {
    const body = {
      user_id: user?.user_id,
      product_id: productId,
      payment_token: payment_method_id
    }
    setLoaded(true);
    dispatch(setSubscriptionPlan(body)).then((res: SubscribeResponseType) => {
      if(res) {
        router.push(ROUTES_PATH.SUBSCRIPTION_THANKU + `?sub_id=${res.id}`);
      }
      setLoaded(false);
    }).catch(() => {
      setLoaded(false);
    });
  };

  return (
    <div className="cc_btn_py">
      <button className="btn_animated btn_blockmd primary_btn" onClick={handlePayNow}>
        {loaded ? (
          <ThreeDots
            height="20"
            width="50"
            radius="9"
            color="#fff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            visible={true}
          />
        ) : "Pay Now" }
      </button>
    </div>
  )};

export default PayNowButton;
