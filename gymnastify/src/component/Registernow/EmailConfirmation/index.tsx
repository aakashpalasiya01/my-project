'use client';
import React from "react";
import Image from "next/image";
import thankyou from "@/assets/images/thankyou.jpg";


const EmailConfirmation = () =>{

return(
    <main className="main_content">
    <section className="thankyou">
      <div className="container">
      <div className="thankyou_block">
        <div className="thankyou_img">
          <Image src={thankyou} alt="thankyou" className="img-fluid"></Image>
          <div className="thankyou_content">
            <div className="sec_title">
              <h2>So Close! <br /> To complete the process please check your inbox, open the email from us & click the link in it to confirm it’s you!</h2>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  </main>
)
}

export default EmailConfirmation