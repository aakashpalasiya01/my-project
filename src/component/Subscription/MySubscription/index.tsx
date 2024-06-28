import dynamic from "next/dynamic";
import { RecentOrderTable } from "./RecentOrderTable";
import SubscriptionPlanCard from "./subscriptionplancard";

const MySubCard = dynamic(() => import("./MySubCard"), {
  ssr: false
});


export default function MySubscription() {
 
  return (
    <main className="main_content">
      <div className="mysub_group">
        <section className="mysub_block">
          <div className="container">
            <MySubCard/>
          </div>
        </section>
        <section className="his_orderflow">
          <div className="container">
            <div className="sec_title text-center">
              {/* <h2>Order History</h2> */}
            </div>
            <div className="cart_table table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Subscriptions</th>
                    <th>Subscription Type</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <SubscriptionPlanCard/>
                </tbody>
              </table>
            </div>
          </div>
          <div className="container">
            <div className="sec_title text-center">
              <h2>Recent Orders</h2>
            </div>
            <div className="cart_table table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Order</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <RecentOrderTable/>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

