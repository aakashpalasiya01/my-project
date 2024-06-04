import React from "react";
import Link from "next/link";
import Image from "next/image";
import hero_banner2 from "@/assets/images/hero_banner2.jpg";

function Teachers() {
  return (
    <main className="main_content">
      <section className="teachers">
        <section className="bred_eles">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item point_none">
                  <Link href="#">Teachers</Link>
                </li>
              </ol>
            </nav>
          </div>
        </section>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div className="effect_product teach_items">
                <div className="effect_img teach_img">
                  <Image
                    src={hero_banner2}
                    alt="icons"
                    className="img-fluid"
                    width={295}
                    height={172}
                  />
                </div>
                <h5>John Snow</h5>
                <p>instructors</p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="effect_product teach_items">
                <div className="effect_img teach_img">
                  <Image
                    src={hero_banner2}
                    alt="icons"
                    className="img-fluid"
                    width={295}
                    height={172}
                  />
                </div>
                <h5>John Snow</h5>
                <p>instructors</p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="effect_product teach_items">
                <div className="effect_img teach_img">
                  <Image
                    src={hero_banner2}
                    alt="icons"
                    className="img-fluid"
                    width={295}
                    height={172}
                  />
                </div>
                <h5>John Snow</h5>
                <p>instructors</p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="effect_product teach_items">
                <div className="effect_img teach_img">
                  <Image
                    src={hero_banner2}
                    alt="icons"
                    className="img-fluid"
                    width={295}
                    height={172}
                  />
                </div>
                <h5>John Snow</h5>
                <p>instructors</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Teachers;
