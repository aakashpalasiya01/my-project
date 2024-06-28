'use client';
import { CancelSubscription } from '@/store/actions/authAction';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { ApiResponseCancelSubscription } from '@/types/authType';
import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import Swal from "sweetalert2";

const CancleSubscription = () => {
    const dispatch = useAppDispatch();
    const { subscription } = useAppSelector((state: RootState) => state.auth);
    const [loaded, setLoaded] = useState(false);

    const cancelSubscription = () => {
        Swal.fire({
            title: "Are you sure cancel subscription?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
        }).then((result: any) => {
            if (result.isConfirmed) {
                handleChnageCancelSubscription(subscription?.id);
            }
        });
    }
    const handleChnageCancelSubscription = async (id: string | undefined) => {
        setLoaded(true);
        await dispatch(CancelSubscription({subscription_id: id })).then((res: ApiResponseCancelSubscription) => {
            Swal.fire({
                title: "Removed!",
                text: `${res.data.data.message}`,
                icon: "success",
            });
            setLoaded(false);
        }).catch(() => {
            setLoaded(false);
        })
    }

    return (
        <button
            type="button"
            className="btn_animated outline_btn btn_blockmd"
            onClick={cancelSubscription}
        >
             {loaded ?
                  <ThreeDots
                    height="25"
                    width="80"
                    radius="9"
                    color="#fff"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{ display: "block" }}
                    visible={true}
                  />
                  : 'Cancel Subscription'}
        </button>
    )
}

export default CancleSubscription