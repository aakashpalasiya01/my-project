"use server"
import axios from "@/utils/axiosConfig"
import { revalidatePath } from "next/cache";

export const post = async (url: string, body:object) => axios.post(url, body);

export const get = (url: string, params?:object) => axios.get(url, { params });

export const del = async (url: string, params?: object) =>  axios.delete(url, { params });
