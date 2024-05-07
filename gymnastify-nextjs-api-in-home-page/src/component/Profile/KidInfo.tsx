/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import closeCircle from "../../assets/images/icons/close_circle.svg";
import Image from 'next/image';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { registerGroup } from '@/store/actions/authAction';
import { exploreSkill } from '@/store/actions/homeAction';
import * as homeReducer from '@/store/reducers/homeReducer';
import * as authReducer from '@/store/reducers/authReducer';
import { v4 as uuidv4 } from 'uuid';
import { ProfileRemovePhoto } from '@/store/actions/profileAction';
import Swal from 'sweetalert2';

const KidInfo = ({ form, handleChange, simpleValidator, setForm, isProfileLoaded, userID }: any) => {
    const { Group } = useAppSelector((state: RootState) => state.auth);
    const { Taxonomy } = useAppSelector((state: RootState) => state.home);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const FetchData = async () => {
            await registerGroup().then((res: any) => {
                dispatch(authReducer.setRegisterGroup(res.data));
            })
            await exploreSkill().then((res: any) => {
                dispatch(homeReducer.setTaxonomy(res.data));
            })
        }
        FetchData();
    }, [])

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files: any = e.target.files?.length ? e.target.files : [];
        if (files) {
            const filesArray = Array.from(files);
            const imageUrls = filesArray.map((file: any) => {
                return {
                    image_url: URL.createObjectURL(file),
                    image_id: uuidv4(),
                    file
                }
            });
            setForm((prevForm: any) => ({
                ...prevForm,
                gallery: [...prevForm.gallery, ...imageUrls]
            }));
        }
    }

    const handleConfirm = (image_id: string | number, isLocal: boolean) => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
          }).then(async (result: any) => {
            if (result.isConfirmed) {
                if(isLocal) {
                    await handleRemoveImage(image_id);
                } else {
                    setForm((prevForm: any) => ({
                        ...prevForm,
                        gallery: prevForm.gallery.filter((e: any) => e.image_id !== image_id)
                    }));
                }
            }
        });
    }

    const handleRemoveImage = async (image_id: string | number) => {
        await ProfileRemovePhoto(image_id, userID).then((res: any) => {
            try {
              if (res.success) {
                setForm((prevForm: any) => ({
                    ...prevForm,
                    gallery: prevForm.gallery.filter((e: any) => e.image_id !== image_id)
                }));
                Swal.fire({
                    title: "Delete!",
                    text: "Deleted successfully!",
                    icon: "success"
                });
              }
            } catch (error: any) {
              console.log(error.message);
            }
        })
    }

    return (
        <div className="prouser_items">
            <div className="prouser_link">
                Kid Info
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="first_name" className="ele_lable">First Name</label>
                        <input
                            className="form-control ele_input"
                            type="text"
                            name='first_name'
                            id='first_name'
                            value={form.first_name}
                            onChange={handleChange}
                            onBlur={() => simpleValidator.current.showMessageFor(form.first_name)}
                            placeholder="John"
                        />
                        <div>
                            {simpleValidator.current.message('first_name', form.first_name, 'required')}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="last_name" className="ele_lable">Last Name</label>
                        <input
                            className="form-control ele_input"
                            type="text"
                            name='last_name'
                            id='last_name'
                            onChange={handleChange}
                            value={form.last_name}
                            onBlur={() => simpleValidator.current.showMessageFor(form.last_name)}
                            placeholder="Smith"
                        />
                        <div>
                            {simpleValidator.current.message('last_name', form.last_name, 'required')}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="age" className="ele_lable">Age</label>
                        <input
                            className="form-control ele_input"
                            type="text"
                            name="age"
                            id="age"
                            onChange={handleChange}
                            value={form.age}
                            onBlur={() => simpleValidator.current.showMessageFor(form.age)}
                            placeholder="20"
                        />
                        <div>
                            {simpleValidator.current.message('age', form.age, 'required')}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="group" className="ele_lable">Group</label>
                        <select
                            className="form-control ele_input ele_select"
                            name="group"
                            id="group"
                            onChange={handleChange}
                            value={form.group}
                            onBlur={() => simpleValidator.current.showMessageFor(form.group)}
                        >
                            <option value="">Please select</option>
                            {Group.map((item: any) => (
                                <option key={item?.id} value={item?.slug ? item?.slug : "-"}>{item?.name ? item?.name : "-"}</option>
                            ))}
                        </select>
                        <div>
                            {simpleValidator.current.message('group', form.group, 'required')}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="levels" className="ele_lable">Levels</label>
                        <select
                            className="form-control ele_input ele_select"
                            name="levels"
                            id="levels"
                            onChange={handleChange}
                            value={form.levels}
                            onBlur={() => simpleValidator.current.showMessageFor(form.levels)}
                        >
                            <option value="">Please select</option>
                            {Taxonomy.map((item: any, index: number) => (
                                <option key={item?.id} value={item?.slug ? item?.slug : "-"}>{item?.name ? item?.name : "-"}</option>
                            ))}
                        </select>
                        <div>
                            {simpleValidator.current.message('levels', form.levels, 'required')}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="branch" className="ele_lable">Branch</label>
                        <select
                            className="form-control ele_input ele_select"
                            name="branch"
                            id="branch"
                            onChange={handleChange}
                            value={form.branch}
                            onBlur={() => simpleValidator.current.showMessageFor(form.branch)}
                        >
                            <option value="">Please select</option>
                            <option value="4s Ranch">4s Ranch</option>
                            <option value="La Costa">La Costa</option>
                        </select>
                        <div>
                            {simpleValidator.current.message('branch', form.branch, 'required')}
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="mb-3">
                        <label className="ele_lable">Photo</label>
                        <div className="drag_area" >
                            <input type="file"
                                id="gallery"
                                name='gallery'
                                onChange={handlePhotoChange}
                            />
                            <div>
                                <div
                                    className="drag_ele"
                                >
                                    <label className="drop_filed" htmlFor='gallery'>{'Drag & Drop File'}</label>
                                    <p>Maximum 10</p>
                                </div>
                                {/* <p className='gallery_text'>{form?.gallery?.length ? form?.gallery?.length+ " Photos selected" : ""}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="mb-3">
                        <label className="ele_lable">Media uploaded</label>
                        <div className="media_wrap">
                            {isProfileLoaded ? (
                                <SkeletonTheme baseColor="#fff" highlightColor="#444">
                                    <Skeleton width={160} height={90} />
                                </SkeletonTheme>
                            ) : (
                                <>
                                {Array.isArray(form.gallery) && form.gallery.length ? (
                                  form.gallery.map((item: any) => (
                                    <div className="media_imgup" key={item.image_id}>
                                      <Image
                                        className="media_img"
                                        src={item.image_url}
                                        alt="media"
                                        width={160}
                                        height={90}
                                      />
                                      <button className="closed_circle" type="button" onClick={() => handleConfirm(item.image_id, !item.file)}>
                                        <Image src={closeCircle} alt="media" />
                                      </button>
                                    </div>
                                  ))
                                ) : (
                                  <p>No Gallery Images</p>
                                )}
                              </>
                              
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default KidInfo;