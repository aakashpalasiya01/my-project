"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import {
  useStripe,
  useElements,
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from "@stripe/react-stripe-js";
import { StripeElements } from "@stripe/stripe-js";
import { AnyType } from "@/types/commonTypes";
import { AddStripCard, setSubscriptionPlan } from "@/store/actions/authAction";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { ROUTES_PATH } from "@/utils/constant";
import { ThreeDots } from "react-loader-spinner";
import { SubscribeResponseType } from "@/types/authType";
import Link from "next/link";
import Image from "next/image";
import ccIcn from "@/assets/images/backgrounds/cc_icn.svg";
import { revalidateCardList } from "@/utils/RevalidateService";
import MailtoLink from "@/shared/common-component/FoooterMailInbox";


const StripeCardForm = ({ productId }: { productId: string | undefined }) => {
  const router = useRouter();
  const chekBox = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state: RootState) => state.auth);
  const stripe = useStripe();
  const [error, setError] = useState({
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const [loaded, setLoaded] = useState(false);

  const elements: StripeElements | null = useElements();

  const validateFields = () => {
    if (elements) {
      const cardNumberElement = elements.getElement(
        CardNumberElement
      ) as AnyType<any>;
      const expiryElement = elements.getElement(
        CardExpiryElement
      ) as AnyType<any>;
      const cvcElement = elements.getElement(CardCvcElement) as AnyType<any>;
      const errors = {
        cardNumber: cardNumberElement?._empty ? "Card number is required" : "",
        expiry: expiryElement?._empty ? "Expiration date is required" : "",
        cvc: cvcElement?._empty ? "CVC is required" : "",
      };
      setError(errors);
      return Object.values(errors).every((err) => err === "");
    }
  };

  const handleAddCard = async () => {
    if (!validateFields()) return;
    try {
      const cardDetails = elements?.getElement(CardNumberElement);
      if (elements && stripe && cardDetails) {
        setLoaded(true);
        const stripeToken = await stripe.createToken(cardDetails).then((payload) => payload.token).catch(() => { setLoaded(false) });
        if (stripeToken) {
          const res = await AddStripCard({ card_token: stripeToken.id, is_default: chekBox?.current?.checked ? 1 : 0 });
          if (res.success && productId) {
            const body = {
              user_id: user?.user_id,
              product_id: productId,
              payment_token: res.data?.data?.payment_method_id
            }
            await dispatch(setSubscriptionPlan(body)).then((res: SubscribeResponseType) => {
              if (res) {
                router.push(ROUTES_PATH.SUBSCRIPTION_THANKU + `?sub_id=${res.id}`);
              }
            });
          } else {
            revalidateCardList();
            router.push(ROUTES_PATH.SUBSCRIPTION_CARD);
          }
        }
        setLoaded(false);
      }
      setLoaded(false);
    } catch (err) {
      setLoaded(false);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        showIcon: true,
        color: "#666",
        fontSize: "15px",
      },
      invalid: {
        color: "#fa755a",
        fontSize: "15px",
      },
    },
  };


  const getButtonLabel = (isproduct: string | undefined) => {
    if(isproduct)
      {
        return "Continue Payment";
      }else{
        return "Save Card";
      }
  };

  return (
    <main className="main_content">
      <div className="add_newpayment">
        <section className="bred_eles">
          <div className="container">
            <Breadcrumb>
              <Breadcrumb.Item className="point_none">
                Add New Card
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </section>
        <section className="card-container">
          <div className="row">
            <div className="col-md-12">
              <div className="mb-3">
                <label className="ele_lable" htmlFor="cardNumber">Card Number</label>
                <div className="cn_payicn" id="cardNumber">
                  <CardNumberElement
                    className="hl_input_field"
                    options={cardElementOptions}
                  />
                  <Image className="cn_payicn_img" src={ccIcn} alt="icons"></Image>
                </div>
                {error.cardNumber && <p className="error">{error.cardNumber}</p>}
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-3" id="Expiration">
                <label className="ele_lable" htmlFor="Expiration">Expiration</label>
                <CardExpiryElement
                  className="hl_input_field"
                  options={cardElementOptions}
                />
                {error.expiry && <p className="error">{error.expiry}</p>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3" id="cvvCard">
                <label className="ele_lable" htmlFor="cvvCard">CVV</label>
                <CardCvcElement
                  className="hl_input_field"
                  options={cardElementOptions}
                />
                {error.cvc && <p className="error">{error.cvc}</p>}
              </div>
            </div>

            <div className="col-md-12">
              <label className="checkbox_as">
                <span className="chekbox_label">Set as default</span>
                <input type="checkbox" ref={chekBox} />
                <span className="checkbox_checkmark"></span>
              </label>
            </div>
            <div className="col-md-12">
              <div className="secured_process_pay">
              <Link href={"#"} className="secured_process_lock">Secured with Gymnastify</Link>
              </div>
            </div>
            <div className="col-md-12">
              <div className="have_anyques">
                <p>
                  Have any questions? Write to our support team at{" "}
                  <MailtoLink email="help@gymnastify.com" subject="Subject" body="Body">help@gymnastify.com</MailtoLink> or visit our{" "}
                  <span>help Center.</span>
                </p>
              </div>
            </div>
            <div className="addnew_processbtn">
              <button
                className="btn_animated primary_btn btn_blockmd"
                onClick={handleAddCard}
              >
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
                ) : getButtonLabel(productId)}
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default StripeCardForm;
