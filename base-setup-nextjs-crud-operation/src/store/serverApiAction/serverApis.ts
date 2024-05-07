"use server";
import axios from "@/utils/axiosConfig";
import { redirect } from "next/navigation";
import { cookies } from 'next/headers';

export const post = async (url: string, body:object) => axios.post(url, body);

export const get = (url: string, params?:object) => axios.get(url, { params });

export const fetchData = () => axios.get("https://jsonplaceholder.typicode.com/posts");

export const login = async (formData: FormData) => {
    const loginUrl = 'https://json-placeholder.mock.beeceptor.com/login';
    try {
      const rawFormData = {
        username: formData.get('username'),
        password: formData.get('password')
      }
      const response = await fetch(loginUrl, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(rawFormData)
      });
      const result = await response.json();
      // Set cookie
      cookies().set('token', result.token)
      
    } catch (err) {
        console.log(err);
    }
    // redirect("/");
  }