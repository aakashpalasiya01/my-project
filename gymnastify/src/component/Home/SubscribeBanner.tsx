import React, { useEffect, useState } from "react";
import { RegisterPageTopBanner } from "@/store/actions/registeredAction";
import { useAppDispatch } from "@/store/hooks";
import Link from "next/link";
import { ExploreBannerType } from "./Home";
import Skeleton from "react-loading-skeleton";

const SubscribeBanner = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [bannerData, setBannerData] = useState<ExploreBannerType>();

  const fetchBannerData = async () => {
    setLoading(true);
    let res = await dispatch(RegisterPageTopBanner());
    setBannerData(res);
    setLoading(false);
  };
  useEffect(() => {
    fetchBannerData();
  }, []);
  return (

      <section
            className="explore_banner"
            style={{
                backgroundImage: loading ? 'none' : `url(${bannerData?.background_image?.url})`,
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6">
                        <div className="explore_block">
                            {loading ? (
                                <>
                                    <Skeleton height={20} width={100} />
                                    <Skeleton height={40} width={300} style={{ marginTop: '10px' }} />
                                    <Skeleton height={40} width={200} style={{ marginTop: '10px' }} />
                                    <Skeleton height={40} width={150} style={{ marginTop: '20px' }} />
                                </>
                            ) : (
                                <>
                                    <h6 data-aos="fade-left" data-aos-duration="1000">{bannerData?.top_heading}</h6>
                                    <h4 data-aos="fade-left" data-aos-duration="1000">
                                        {bannerData?.title}
                                        <span className="invets_text">{bannerData?.main_title}</span>
                                    </h4>
                                    <div className="explore_btn" data-aos="fade-left" data-aos-duration="1000">
                                        <Link
                                            className="btn_animated white_btn btn_blockmd"
                                            href={bannerData?.button?.link ?? '#'}
                                        >
                                            {bannerData?.button?.name ?? 'Subscribe Now'}
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    
  );
};

export default SubscribeBanner;
