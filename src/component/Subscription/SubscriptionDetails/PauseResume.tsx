'use client'
import { CancelSubscription, PausedSubscription, ResumeSubscription } from '@/store/actions/authAction';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { ApiResponseCancelSubscription, PauseandResumeApiResponse } from '@/types/authType';
import { revalidateMySubscription } from '@/utils/RevalidateService';
import React from 'react'
import Swal from "sweetalert2";

const PauseResume = ({ ThankyoupageApiAction }: any) => {
    const dispatch = useAppDispatch();
    const { subscription } = useAppSelector((state: RootState) => state.auth);

    const cancelSubscription = () => {
        Swal.fire({
            title: "Are you sure cancel subscription?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes !",
        }).then((result: any) => {
            if (result.isConfirmed) {
                handleChnageCancelSubscription(subscription?.id);
            }
        });
    }
    const handleChnageCancelSubscription = (id: string | undefined) => {
        dispatch(CancelSubscription({ subscription_id: id })).then((res: ApiResponseCancelSubscription) => {
            if (res.success) {
                revalidateMySubscription();
                Swal.fire({
                    title: "Removed!",
                    text: `${res.data.data.message}`,
                    icon: "success",
                });
            }
        })
    }

    const handleChangeResume = async () => {
        Swal.fire({
            title: "Are you sure resume subscription?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!",
        }).then((result: any) => {
            if (result.isConfirmed) {
                handleChnageResumeAction(subscription?.id);
            }
        });
    }
    const handleChnageResumeAction = async (id: string | undefined) => {
        await ResumeSubscription({ subscription_id: id }).then((res: PauseandResumeApiResponse) => {
            if (res.data.success) {
                revalidateMySubscription();
                Swal.fire({
                    title: "Removed!",
                    text: `${res.data.data.message}`,
                    icon: "success",
                });
            }
        })
    }
    const handleChangePause = async () => {
        Swal.fire({
            title: "Are you sure pause subscription?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!",
        }).then((result: any) => {
            if (result.isConfirmed) {
                handleChangePauseAction(subscription?.id);
            }
        });
    }
    const handleChangePauseAction = async (id: string | undefined) => {
        await PausedSubscription({ subscription_id: id }).then((res: PauseandResumeApiResponse) => {
            if (res.data.success) {
                revalidateMySubscription();
                Swal.fire({
                    title: "Removed!",
                    text: `${res.data.data.message}`,
                    icon: "success",
                });
            }
        })
    }
    return (
        <tr>
            <td>Actions :</td>
            <td className="btn_subdeta">
                <button onClick={cancelSubscription} className="cancel_btn">Cancel</button>
                {ThankyoupageApiAction?.status === "active" && (
                    <button
                        className="cancel_btn pause_btnsub"
                        onClick={ThankyoupageApiAction?.paused ? handleChangeResume : handleChangePause}>
                        {ThankyoupageApiAction?.paused ? "Resume" : "Pause"}
                    </button>
                )}
            </td>

        </tr>
    )
}

export default PauseResume