"use client"
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import {InitialSingleBlogStateType,SingleBlogInterface,RelatedBlogInterface} from "@/component/SingleBlogComponent/singleBlogType";


const initialState:(InitialSingleBlogStateType) = {
    singleBlog:{
        id: 0,
        date: "",
        date_gmt: "",
        guid: {
          rendered: ""
        },
        modified: "",
        modified_gmt: "",
        slug: "",
        status: "",
        type: "",
        link: "",
        title: {
          rendered: ""
        },
        content: {
          rendered: "",
          protected: false
        },
        excerpt: {
          rendered: "",
          protected: false
        },
        author: 0,
        featured_media: 0,
        comment_status: "",
        ping_status: "",
        sticky: false,
        template: "",
        format: "",
        meta: {
          footnotes: ""
        },
        categories: [],
        tags: [],
        acf: [],
        image: {
          normalImage: "",
          retinaImage: ""
        },
        _links: {
          self: [
            {
              href: ""
            }
          ],
          collection: [
            {
              href: ""
            }
          ],
          about: [
            {
              href: ""
            }
          ],
          author: [
            {
              embeddable: false,
              href: ""
            }
          ],
          replies: [
            {
              embeddable: false,
              href: ""
            }
          ],
          "version-history": [
            {
              count: 0,
              href: ""
            }
          ],
          "predecessor-version": [
            {
              id: 0,
              href: ""
            }
          ],
          "wp:featuredmedia": [
            {
              embeddable: false,
              href: ""
            }
          ],
          "wp:attachment": [
            {
              href: ""
            }
          ],
          "wp:term": [
            {
              taxonomy: "",
              embeddable: false,
              href: ""
            }
          ],
          curies: [
            {
              name: "",
              href: "",
              templated: false
            }
          ]
        }
      },
    loadingSingleBlog:false,
    relatedBlogsList:[],
    loadingRelatedBlog:false
};

const SingleBlogSlice = createSlice({
    name:"singleBlog",
    initialState,
    reducers:{
        setUpdateSingleBlog:(state,action:PayloadAction<SingleBlogInterface>)=>{
            state.singleBlog = action.payload
        },
        setLoadingSingle:(state,action:PayloadAction<boolean>)=>{
            state.loadingSingleBlog = action.payload
        },
        setUpdatedRelatedBlogs:(state,action:PayloadAction<RelatedBlogInterface[]>)=>{
          state.relatedBlogsList = action.payload
        },
        setLoadingRelatable:(state,action:PayloadAction<boolean>)=>{
          state.loadingRelatedBlog = action.payload
        }
    }
});

export const {setUpdateSingleBlog,setLoadingSingle,setUpdatedRelatedBlogs,setLoadingRelatable} = SingleBlogSlice.actions;
export default SingleBlogSlice.reducer;