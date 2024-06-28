"use client"
import { paginationTeachersType } from '@/component/TeachersComponent/TeacherType';
import * as API from "../serverApiAction/clientApis";

export const getTeachersData = async(params:paginationTeachersType) => { 
    const response = await API.get(`/wp-json/wp/v2/instructors/`,params);
    return response.data.data;
}; 