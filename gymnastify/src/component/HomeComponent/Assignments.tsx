"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import assign from "../../assets/images/assign.jpg";
import assignProfile from "../../assets/images/assign_profile.jpg";
import ProgressBar from "react-bootstrap/ProgressBar";
import leaverating from "../../assets/images/icons/leave_rating.svg";
import { useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import ComingSoon from "@/shared/common-component/ComingSoon";

function Assignments() {
  const now = 60;
  const { subscription } = useAppSelector((state: RootState) => state.auth);
  return (
    <main className="main_content">
        <ComingSoon />
         {/* <section className="assignments_block">
         <div className="container">
           <div className="assign_ments">
             <div className="assign_head">
               <h3>Assignments</h3>
             </div>
             <div className="assign_form">
               <div className="not_started">
                 <select
                   className="form-control ele_input ele_select"
                   name=""
                   id=""
                 >
                   <option value="">Not Started</option>
                   <option value="">Not Started</option>
                   <option value="">Not Started</option>
                   <option value="">Not Started</option>
                 </select>
                 <button className="reset_btn">Reset</button>
               </div>
               <div className="assign_search">
                 <input
                   className="form-control ele_input search_icn"
                   type="text"
                   placeholder="Search here…"
                 />
               </div>
             </div>
           </div>
           <div className="row">
             <div className="col-xl-3 col-lg-4 col-md-6">
               <div className="assignments_items">
                 <div className="assign_product">
                   <Image
                     src={assign}
                     alt="product"
                     className="img-fluid"
                   ></Image>
                 </div>
                 <div className="assign_content">
                   <Link href="">Blue Room Girls Levels</Link>
                   <div className="assign_profile">
                     <div className="assign_img">
                       <Image src={assignProfile} alt="icons"></Image>
                     </div>
                     <div className="assign_title">John Snow</div>
                   </div>
                   <div className="progress_assign">
                     <ProgressBar now={now} label={`${now}%`} />
                     <div className="process_com">
                       <div className="procees_percentage">48% Complete</div>
                       <div className="leave_rating">
                         <div className="leave_rating_img">
                           <Image src={leaverating} alt="icosn"></Image>
                         </div>
                         Leave a rating
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="col-xl-3 col-lg-4 col-md-6">
               <div className="assignments_items">
                 <div className="assign_product">
                   <Image
                     src={assign}
                     alt="product"
                     className="img-fluid"
                   ></Image>
                 </div>
                 <div className="assign_content">
                   <Link href="">Blue Room Girls Levels</Link>
                   <div className="assign_profile">
                     <div className="assign_img">
                       <Image src={assignProfile} alt="icons"></Image>
                     </div>
                     <div className="assign_title">John Snow</div>
                   </div>
                   <div className="progress_assign">
                     <ProgressBar now={now} label={`${now}%`} />
                     <div className="process_com">
                       <div className="procees_percentage">48% Complete</div>
                       <div className="leave_rating">
                         <div className="leave_rating_img">
                           <Image src={leaverating} alt="icosn"></Image>
                         </div>
                         Leave a rating
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="col-xl-3 col-lg-4 col-md-6">
               <div className="assignments_items">
                 <div className="assign_product">
                   <Image
                     src={assign}
                     alt="product"
                     className="img-fluid"
                   ></Image>
                 </div>
                 <div className="assign_content">
                   <Link href="">Blue Room Girls Levels</Link>
                   <div className="assign_profile">
                     <div className="assign_img">
                       <Image src={assignProfile} alt="icons"></Image>
                     </div>
                     <div className="assign_title">John Snow</div>
                   </div>
                   <div className="progress_assign">
                     <ProgressBar now={now} label={`${now}%`} />
                     <div className="process_com">
                       <div className="procees_percentage">48% Complete</div>
                       <div className="leave_rating">
                         <div className="leave_rating_img">
                           <Image src={leaverating} alt="icosn"></Image>
                         </div>
                         Leave a rating
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="col-xl-3 col-lg-4 col-md-6">
               <div className="assignments_items">
                 <div className="assign_product">
                   <Image
                     src={assign}
                     alt="product"
                     className="img-fluid"
                   ></Image>
                 </div>
                 <div className="assign_content">
                   <Link href="">Blue Room Girls Levels</Link>
                   <div className="assign_profile">
                     <div className="assign_img">
                       <Image src={assignProfile} alt="icons"></Image>
                     </div>
                     <div className="assign_title">John Snow</div>
                   </div>
                   <div className="progress_assign">
                     <ProgressBar now={now} label={`${now}%`} />
                     <div className="process_com">
                       <div className="procees_percentage">48% Complete</div>
                       <div className="leave_rating">
                         <div className="leave_rating_img">
                           <Image src={leaverating} alt="icosn"></Image>
                         </div>
                         Leave a rating
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section> */}
    </main>
  );
}

export default Assignments;
