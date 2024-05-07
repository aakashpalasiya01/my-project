// "use server";
import { AxiosRequestHeaders } from "axios";
import { cookies as nextCookies } from "next/headers";
import Cookies from "js-cookie";

interface HeadersDefaults {
    headers: AxiosRequestHeaders,
    url: string
}

const authInterceptor = (config: HeadersDefaults) => {
    const token = nextCookies().get("token")?.value;
    // const token = Cookies.get("token");
    const refresh_token = Cookies.get("refresh_token");
    if (token) {
        if(config?.url === '/refresh') {
            config.headers['Authorization'] = `Bearer ${refresh_token}`;
        } else {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
    }
    return config;
}
export default authInterceptor;