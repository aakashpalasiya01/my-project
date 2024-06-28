/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import * as MySubReducer from "@/store/reducers/mySubReducer";
import { RootState } from '@/store/store';
import { getOrderDataDetails } from '@/store/actions/mySubAction';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import moment from 'moment';
import { ROUTES_PATH } from '@/utils/constant';
import Link from 'next/link';
import { SubscriptionResponse } from './MySubType';
import Image from 'next/image';
import view from "../../../assets/images/view.svg"


export default function SubscriptionPlanCard() {
    const dispatch = useAppDispatch();
    const { invoiceHistoryList, orderLoading } = useAppSelector((state: RootState) => state.mySub);
    useEffect(() => {
        async function FetchOrderDetails() {
            dispatch(MySubReducer.setOrderLoading(true));
            await getOrderDataDetails().then((res: SubscriptionResponse) => {
                if (res.success) {
                    dispatch(MySubReducer.setInvoiceData(res.data.data.subscriptions))
                }
            })
            dispatch(MySubReducer.setOrderLoading(false));
        }
        FetchOrderDetails();
    }, [])


    const OrderTableRowContent = (
        invoiceHistoryList?.map((IHListItem: any, index: number) => {
            return (
                <tr key={IHListItem.id}>
                    <td>{IHListItem?.id}</td>
                    <td>{IHListItem.subscription_type ? IHListItem.subscription_type : "-"}</td>
                    <td>{IHListItem.subscription_status ? IHListItem.subscription_status.charAt(0).toUpperCase() + IHListItem.subscription_status.slice(1) : "-"}</td>
                    <td>{IHListItem.start_date ? moment(IHListItem.start_date * 1000).format("DD/MM/YYYY") : "-"}</td>
                    <td><Link href={`${ROUTES_PATH.MY_SUBSCRIPTION_DETAILS}/${IHListItem.subscription_id}`}><Image src={view} alt='view'/></Link></td>
                </tr>
            )
        })
    );

    const SkeletonContent = (
        <SkeletonTheme baseColor="#fff" highlightColor="#000">
                <Skeleton width={1365.99} height={48.98} count={1} />
        </SkeletonTheme>
    );

    return orderLoading ? SkeletonContent : OrderTableRowContent
};