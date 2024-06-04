'use client';
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import * as MySubReducer from "@/store/reducers/mySubReducer";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { RootState } from '@/store/store';
import { RecentOrdersAction } from '@/store/actions/mySubAction';
import moment from 'moment';
import Link from 'next/link';
import { ROUTES_PATH } from '@/utils/constant';
import { InvoiceHistoryItem, SupscriptionRecentResponse } from './MySubType';
import view from "../../../assets/images/view.svg"
import Image from 'next/image';

export const RecentOrderTable = () => {

    const dispatch = useAppDispatch();
    const { RecentOrderLoading, RecentOrders } = useAppSelector((state: RootState) => state.mySub);

    function truncateString(str: string, maxLength: number) {
        if (str?.length <= maxLength) {
            return str;
        }
        return str?.slice(0, maxLength - 3) + '...';
    }

    const TruncatedText = ({ text, maxLength }: { text: string; maxLength: number }) => {
        const truncatedText = truncateString(text, maxLength);
        return <span>{truncatedText}</span>;
    };

    function formatString(input:string) {
        return input?.replace("month", " month");
    }

    useEffect(() => {
        async function FetchOrderDetails() {
            dispatch(MySubReducer.setRecentOrderLoading(true));
            await RecentOrdersAction().then((res: SupscriptionRecentResponse) => {
                if (res.success) {
                    dispatch(MySubReducer.setRecentOrders(res.data.data.invoice_history))
                }
                dispatch(MySubReducer.setRecentOrderLoading(false));
            })
        }
        FetchOrderDetails();
    }, [])

    const OrderTableRowContent = (
        RecentOrders?.map((IHListItem: InvoiceHistoryItem, index: number) => {
            return (
                <tr key={index + 1}>
                    <td>
                        <TruncatedText text={IHListItem?.order_number} maxLength={10} />
                    </td>
                    <td>{IHListItem?.date ? moment(IHListItem?.date * 1000).format("DD/MM/YYYY") : "-"}</td>
                    <td>{IHListItem.status}</td>
                    <td>
                    ${IHListItem?.amount ? IHListItem?.amount : "-"} / Per {IHListItem?.interval ? IHListItem?.interval.charAt(0).toUpperCase() + IHListItem?.interval.slice(1) : '-'}
                    </td>
                    <td><Link href={`${ROUTES_PATH.MY_SUBSCRIPTION_ORDER}/${IHListItem.id}`}><Image src={view} alt='view'/></Link></td>
                </tr>
            )
        })
    );

    const SkeletonContent = (
        <SkeletonTheme baseColor="#fff" highlightColor="#000">
            <tbody>
                <Skeleton width={1365.99} height={48.98} count={1} />
            </tbody>
        </SkeletonTheme>
    );

    return RecentOrderLoading ? SkeletonContent : OrderTableRowContent
};