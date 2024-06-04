
export interface SubDataInterface {
    "id": string,
    "subscription_id":string,
    "start_date": string,
    "end_date": string,
    "next_payment_date": string,
    "subscription_type": string,
    "price": number,
    "subscription_status": string
}

export interface SubDetailsResType {
    "success": boolean,
    "data": SubDataInterface
}



export type OrderDetailParamsType = {
    page:number,
    per_page:number
}

export interface InvoiceListItemInterface {
    "id": string,
    "amount": number,
    "currency": string,
    "status": string,
    "date": string,
    "description": null,
    "subscription_id": string,
    "subscription_status": string,
    "product_name": string
}

export interface ResPaginationInterface {
    "has_more": true,
    "next_page": 2
}

interface InvoicePayloadInterface{
    "invoice_history": InvoiceListItemInterface[],
    "pagination": ResPaginationInterface
}

interface InvoiceResDataInterface{
    "success":boolean,
    "data":InvoicePayloadInterface
}

export interface InvoiceResType {
    "success": boolean,
    "data": InvoiceResDataInterface
}

export type OrderPagination = {
    page:number,
    per_page:number,
    // has_more:boolean,
    // next_page:number
}




export type SubscriptionResponse = {
    data: {
        success: boolean;
        data: {
            page: number;
            per_page: number;
            total: string;
            total_pages: number;
            subscriptions: Plan_Subscription[];
        };
    };
    success: boolean;
};

export type Plan_Subscription = {
    id: string;
    subscription_id: string;
    subscription_status: 'canceled'; // You can extend this type with more status options if there are any.
    create_date: string;
    start_date: string;
    end_date: number;
    subscription_type: 'month' | 'year'; // Assuming these are the only types. Extend if necessary.
    price: number;
    payment_methods: PaymentMethod[] | [];
};

type PaymentMethod = {
    id: string;
    brand: string;
    last4: string;
    exp_month: number;
    exp_year: number;
} | {};


export type InitialSubDtlType = {
    subscriberDetailList: SubDataInterface[],
    mySubLoading:boolean,
    invoiceHistoryList: Plan_Subscription[],
    orderLoading:boolean,
    RecentOrderLoading: boolean,
    RecentOrders:InvoiceHistoryItem[],
    InvoiceTableData:InvoiceListItemInterface[],

}



export type SupscriptionRecentResponse = {
    data: {
        success: boolean;
        data: {
            invoice_history: InvoiceHistoryItem[];
            pagination: Pagination;
        };
    };
    success: boolean;
};

export type InvoiceHistoryItem = {
    id: string;
    order_number:string;
    amount: number;
    currency: string;
    status: string; // This can be changed to a literal type if there are specific predefined statuses, e.g., 'paid' | 'pending' | 'failed'
    date: number;
    description: string | null;
    subscription_id: string;
    subscription_status: string; // This can also be a literal type, e.g., 'active' | 'canceled' | 'expired'
    product_name: string;
    interval:string;

};

type Pagination = {
    has_more: boolean;
    next_page: number;
};
