"use client"
import * as API from "../serverApiAction/clientApis";

export const getSingleClassData = async(classId:number) => { 
    const response = await API.get(`/wp-json/wp/v2/class/${classId}`);
    return response;
}; 