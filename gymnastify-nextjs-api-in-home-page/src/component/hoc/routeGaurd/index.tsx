'use client';
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PUBLIC_PATH, ROUTES_PATH } from "@/utils/constant";
import { emailVerify } from "@/store/actions/authAction";
import { forError } from "@/utils/CommonService";
import Swal from "sweetalert2";

export const RouterGuard = ({ children }: { children: React.ReactNode }) => {
  const { token, user } = useAppSelector((state: RootState) => state.auth);
  
  
  const router = useRouter();
  const pathname = usePathname();
  const [authorized, setAuthorized] = useState(false);
  const searchParams = useSearchParams();
  const activation_key = searchParams.get('activation_key');

  useEffect(() => {
    authCheck(pathname);
  }, [token, user, pathname]);

  async function authCheck(url: string) {
    const isPublicPath = Object.values(PUBLIC_PATH).includes(url);
    if(activation_key) {
      try {
        const res = await emailVerify(activation_key);
        if(res.success) {
          router.push(ROUTES_PATH.LOGIN);
          Swal.fire({
            title: "Verification!",
            text: "Your email successfully verified!",
            icon: "success"
          })
          return false;
        } else {
          forError(res.data.message);
        }
      } catch {
        
      }
    }
    if (!token && !user && !isPublicPath) {
      router.push(ROUTES_PATH.GUEST);
      return false;
    }
    if (token && isPublicPath) {
      router.push(ROUTES_PATH.HOME);
      return false;
    }
    setAuthorized(true);
  }

  return authorized ? children : <></>;
};
