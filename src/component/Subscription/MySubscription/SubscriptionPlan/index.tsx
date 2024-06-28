import React from 'react'
import * as API from "@/store/serverApiAction/serverApis";
import moment from 'moment';


const index = async (props: any) => {
    const response = await API.get(`/wp-json/wp/v2/users/subscription/view/?subscription_id=${props?.params?.slug}`)
    const Subscriptionplan = response?.data?.data;

    return (
        <main className="main_content">
            <section className="subs_details">
                <div className="sec_title_md text-center">
                    <h5>Subscription details</h5>
                </div>
                <div className="cart_table table-responsive">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>{Subscriptionplan?.status == "active" ? "Start date :" : "Subcription status :"}</td>
                                <td>{Subscriptionplan?.status == "active" ? moment(Subscriptionplan?.start_date * 1000).format("MMMM D, YYYY") : Subscriptionplan?.status}</td>
                            </tr>
                            <tr>
                                <td>Last order date :</td>
                                <td>{Subscriptionplan?.end_date ? moment(Subscriptionplan?.end_date * 1000).format("MMMM D, YYYY") : "-"}</td>
                            </tr>
                            {Subscriptionplan?.status == "active" ? (
                                <tr>
                                    <td>Next payment date :</td>
                                    <td>{Subscriptionplan?.end_date ? moment(Subscriptionplan?.end_date * 1000).format("MMMM D, YYYY") : "-"}</td>
                                </tr>
                            ) : (null)}

                            {Subscriptionplan?.status == "active" ? (
                                <tr>
                                    <td>Payment :</td>
                                    <td>{Subscriptionplan?.payment_method?.brand ? "Via" + " " + Subscriptionplan?.payment_method?.brand.charAt(0).toUpperCase() + Subscriptionplan?.payment_method?.brand.slice(1) : "-"}</td>
                                </tr>
                            ) : (null)}
                                        {/* <tr>
                            <td>Paid Term(s): All Access Pass :</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Minimum Period(s) :</td>
                            <td>- -</td>
                        </tr> */}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    )
}

export default index