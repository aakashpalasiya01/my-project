"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import deletedIcn from "../../assets/images/icons/delete_icn.svg";
import blueedit from "../../assets/images/icons/blue_edit_icn.svg";
import paypalbutton from "../../assets/images/icons/paypal.svg";

function AddCart() {
  return (
    <main className="main_content">
      <section className="cart_flowblock">
        <div className="container">
          <div className="cart_flw cart_table table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Plan</th>
                  <th>Price</th>
                  <th>Coupon</th>
                  <th>Subtotal</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Annual Plan</td>
                  <td>$19.99 / Per Month</td>
                  <td>--</td>
                  <td>$19.99 / Per Month</td>
                  <td className="cart_actions">
                    <button className="btn_acedit">
                      <Image src={blueedit} alt="icons"></Image>
                    </button>
                    <button className="btn_acdeleted">
                      <Image src={deletedIcn} alt="icons"></Image>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="cart_table cart_annually table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <div className="cart_value">
                      <h6>BEST VALUE</h6>
                      <h4>Annually | $25.99/mo</h4>
                      <p>
                        Your card will be charged $245. You can cancel your{" "}
                        <br /> membership at any time by going to your account
                        settings
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="add_coupon">
                      <input
                        className="ele_input form-control"
                        type="text"
                        placeholder="Coupon Code"
                      />
                      <button className="primary_btn">Apply</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Plan :</td>
                  <td className="annually_title">Premium</td>
                </tr>
                <tr>
                  <td>Price :</td>
                  <td className="annually_title">$19.99/ per month</td>
                </tr>
                <tr>
                  <td>Coupon :</td>
                  <td className="annually_title">Not available</td>
                </tr>
                <tr>
                  <td>Subtotal :</td>
                  <td className="annually_title">$19.99/ per month</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="process_pay">
            <button className="cancel_btn">Cancel</button>
            <button className="btn_block primary_btn">
              Proceed To Payment
            </button>
          </div>
        </div>
      </section>
      <section className="selected_payment">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="select_payleft">
                <div className="select_methodbtn">
                  <label className="ele_lable">Select a payment method</label>
                  <button type="button" className="btn_paypal">
                    <Image src={paypalbutton} alt="icons"></Image>
                  </button>
                  <div className="orselected">
                    <span>Or</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="mb-3">
                      <label className="ele_lable">Card Number</label>
                      <input className="ele_input form-control" type="text" placeholder="1234 1234 1234 1234" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label className="ele_lable">Expiration</label>
                      <input type="text" className="ele_input form-control" placeholder="MM/YY" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label className="ele_lable">CVV</label>
                      <input type="text" placeholder="CVV" className="ele_input form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label className="ele_lable">Country</label>
                      <select className="ele_select ele_input form-control"></select>  
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label className="ele_lable">Zip</label>
                      <input className="form-control ele_input" type="text" placeholder="90210" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="select_payright"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AddCart;
