"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import thanksub from "../../assets/images/icons/thank_sub.svg";

function AddCart() {
  return (
    <main className="main_content">
      <section className="thank_subs">
        <div className="thank_subwrap">
          <div className="thanksub_icn">
            <Image src={thanksub} alt="icons"></Image>
            <div className="thanksub_title text-center">
              <h4>
                Thank you. <br /> Your subscription plan has been Confirm!
              </h4>
            </div>
            <div className="back_homebtn">
              <button className="btn_blockmd primary_btn">Back To Home</button>
            </div>
          </div>
          <div className="order_details">
            <div className="prvcy_title">
              <h4>Order details</h4>
            </div>
            <div className="details_orow">
              <div className="details_orcol">
                <div className="details_orlabel">
                  <label>Order number</label>
                  <span>771</span>
                </div>
              </div>
              <div className="details_orcol">
                <div className="details_orlabel">
                  <label>Date</label>
                  <span>August 25, 2023</span>
                </div>
              </div>
              <div className="details_orcol">
                <div className="details_orlabel">
                  <label>Email</label>
                  <span>rabecavasin@gmail.com</span>
                </div>
              </div>
              <div className="details_orcol">
                <div className="details_orlabel">
                  <label>Payment method</label>
                  <span>PayPal</span>
                </div>
              </div>
              <div className="details_orcol">
                <div className="details_orlabel">
                  <label>Total</label>
                  <span>$19.99 / Per Month</span>
                </div>
              </div>
            </div>
            <div className="cart_table table-responsive">
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
            </div>
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
                    <td>$19.99 / Per Month</td>
                  </tr>
                  <tr>
                    <td>Coupon:</td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td>Subtotal:</td>
                    <td>$19.99</td>
                  </tr>
                  <tr>
                    <td>Payment Method:</td>
                    <td>Paypal</td>
                  </tr>
                  <tr>
                    <td>Total:</td>
                    <td>$19.99 / Per Month</td>
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

export default AddCart;
