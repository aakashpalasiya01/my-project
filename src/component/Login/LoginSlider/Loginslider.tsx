/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { loginRegisterImage } from "@/store/actions/authAction";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { RootState } from "@/store/store";
import * as authReducer from "@/store/reducers/authReducer";
import{SliderImageListItem} from "@/types/authType"

const Loginslider = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(authReducer.setLoaderImage(true));
    dispatch(loginRegisterImage());
    dispatch(authReducer.setLoaderImage(false));
  },[])

  const { ImageSlider, ImageLoader } = useAppSelector((state: RootState) => state.auth);
  return (
    <div className="login_banner">
      <Carousel fade slide={true}>
        {ImageSlider?.map((items: SliderImageListItem, index: number) => {
          return (
            <Carousel.Item key={index + 1}>
              {/* {!isLoaded ? (<picture><img className="loging_img" src={items.image.link} alt="ImageSlider" /></picture>) : ( */}
              {!ImageLoader ? (<div className="loging_img" style={{backgroundImage:`url(${items.image.link})`}}></div>) : (
                <SkeletonTheme baseColor="#fff" highlightColor="#ddd">
                  <Skeleton width={1230} height={1468} />
                </SkeletonTheme>
              )}
              <Carousel.Caption className="login_abouts"> 
                <p>
                  {items.description}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  );
};

export default Loginslider;
