"use server"
import { revalidatePath } from "next/cache";

export const revalidateCardList = () => {
    revalidatePath('/(private)/subscription', 'page');
}

export const revalidateMySubscription = () => {
    revalidatePath('/(private)/subscription/subscription-details', 'page');
}

export const revalidateAllLayout = () => {
    revalidatePath('/', 'layout');
}