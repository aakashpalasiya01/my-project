export interface StripCardType {
    id: string;
    brand: string;
    last4: string | number;
    exp_month: string | number;
    exp_year: string | number;
    is_default: string | number;
    card_id: string;
}