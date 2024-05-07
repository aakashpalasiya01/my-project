export interface FAQResponse {
    total_faqs: number;
    total_pages: number;
    current_page: number;
    per_page: number;
    faqs: FAQ[];
}
export interface FAQ {
    id: number;
    title: string;
    content: string;
}