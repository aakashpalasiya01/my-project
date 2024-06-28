/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React from "react";
import FavoriteClass from "./FavoriteClass";
import SubscribedProduct from "@/shared/common-component/SubscribedProduct";
import { useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { subscriptionStatus } from "@/utils/constant";

function Favorite() {
  const { subscription } = useAppSelector((state: RootState) => state.auth);

  return (
    <main className="main_content">
      {subscription?.status !== subscriptionStatus.active ? (
        <SubscribedProduct /> 
      ) : (
        <section className="classes_area">
          <FavoriteClass />
        </section>
      )}
    </main>
  );
}

export default Favorite;
