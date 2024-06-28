/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import closeCircle from "@/assets/images/icons/close_circle.svg";
import Image from 'next/image';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { BranchNameRegisterForm, registerGroup } from '@/store/actions/authAction';
import { exploreSkillHome } from '@/store/actions/homeAction';
import * as homeReducer from '@/store/reducers/homeReducer';
import * as authReducer from '@/store/reducers/authReducer';
import { ProfileRemovePhoto } from '@/store/actions/profileAction';
import Swal from 'sweetalert2';
import { KidInfoPropType, PrflGrpResInterface, ExploreSkillResType, ProfImgDataType, ProfileFormState, ApiRemovePhotoResponse, SkillsType } from './ProfileType';
import CropImage from './CropPhotoImage';
import { BranchLevels, BranchResponse } from '@/types/authType';

const KidInfo = ({ form, handleChange, simpleValidator, setForm, isProfileImageLoaded, userID, handleBlur }: KidInfoPropType) => {
    const { Group } = useAppSelector((state: RootState) => state.auth);
    const { BranchName } = useAppSelector((state: RootState) => state.home);
    const dispatch = useAppDispatch();
    useEffect(() => {
        const FetchData = async () => {
            await registerGroup().then((res: PrflGrpResInterface) => {
                dispatch(authReducer.setRegisterGroup(res.data));
            })
            await exploreSkillHome().then((res: ExploreSkillResType) => {
                dispatch(homeReducer.setTaxonomy(res.data));
            });
            await BranchNameRegisterForm().then((res: BranchResponse) => {
                if (res?.data?.success) {

                    dispatch(homeReducer.setBranchName(res.data?.data || []));
                }
            });
        }
        FetchData();
    }, [])
    
    const updateGallery = (galleryArray:[],imageID:string|number) => {
        return galleryArray.filter((e: ProfImgDataType) => e.image_id !== imageID)
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
                if (isLocal) {
                    await handleRemoveImage(image_id);
                } else {
                    setForm((prevForm: ProfileFormState) => ({
                        ...prevForm,
                        gallery: updateGallery(prevForm.gallery,image_id)
                    }));
                }
            }
        });
    }


    const handleRemoveImage = async (image_id: string | number) => {
        await ProfileRemovePhoto(image_id, userID).then((res: ApiRemovePhotoResponse) => {
            try {
                if (res.success) {
                    setForm((prevForm: ProfileFormState) => ({
                        ...prevForm,
                        gallery: updateGallery(prevForm.gallery,image_id)
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
    };



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
                            onBlur={() => {
                                simpleValidator.current.showMessageFor('first_name')
                                handleBlur('first_name');
                            }}
                            placeholder="John"
                        />
                        <div>
                            {simpleValidator.current.message('first_name', form.first_name, 'required|alpha', {
                                messages: {
                                    alpha: "The first name field should only contain letters."
                                }
                            })}
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
                            onBlur={() => {
                                handleBlur('last_name');
                                simpleValidator.current.showMessageFor('last_name')
                            }}
                            placeholder="Smith"
                        />
                        <div>
                            {simpleValidator.current.message('last_name', form.last_name, 'required|alpha', {
                                messages: {
                                    alpha: "The last name field should only contain letters."
                                }
                            })}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="age" className="ele_lable">Age</label>
                        <input
                            className="form-control ele_input inputno_remove"
                            type="number"
                            name="age"
                            id="age"
                            onChange={handleChange}
                            value={form.age}
                            onKeyDown={(event) => {
                                if (event.key === 'e' || event.key === '+' || event.key === '-' || event.key === "E" || event.key === "ArrowUp" || event.key === "ArrowDown") {
                                    event.preventDefault();
                                }
                            }}
                            onBlur={() => {
                                simpleValidator.current.showMessageFor('age')
                                handleBlur('age')
                            }}
                            placeholder="20"
                        />
                        <div>
                            {simpleValidator.current.message('age', form.age,"required|numeric|max:2|regex:^[1-9][0-9]*$")}
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
                            onBlur={() => {
                                simpleValidator.current.showMessageFor('group')
                                handleBlur('group')
                            }}
                        >
                            <option value="">Please select</option>
                            {Group?.map((item: any) => (
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
                            onBlur={() => {
                                simpleValidator.current.showMessageFor('levels')
                                handleBlur('levels')
                            }}
                        >
                            <option value="">Please select</option>
                            {Group.find((singleGrp: SkillsType) => singleGrp?.slug === form?.group)?.skills?.map((item: SkillsType) => (
                                <option
                                    key={item?.slug}
                                    value={item?.slug ? item?.slug : "-"}
                                >
                                    {item?.name ? item?.name : "-"}
                                </option>
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
                            onBlur={() => {
                                simpleValidator.current.showMessageFor('branch')
                                handleBlur('branch')
                            }}
                        >
                            <option value="">Please select</option>
                            {BranchName?.map((item: BranchLevels) => (
                                <option
                                    key={item?.branch_name}
                                    value={item?.branch_name ? item?.branch_name : "-"}
                                >
                                    {item?.branch_name ? item?.branch_name : "-"}
                                </option>
                            ))}
                        </select>
                        <div>
                            {simpleValidator.current.message('branch', form.branch, 'required')}
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <CropImage setForm={setForm} />
                </div>
                <div className="col-md-12">
                    <div className="mb-3">
                        <label htmlFor='media' className="ele_lable">Media uploaded</label>
                        <div className="media_wrap">
                            {isProfileImageLoaded ? (
                                <SkeletonTheme baseColor="#fff" highlightColor="#ddd">
                                    <Skeleton width={160} height={90} />
                                </SkeletonTheme>
                            ) : (
                                <>
                                    {Array.isArray(form.gallery) && form.gallery.length ? (
                                        form.gallery?.map((item: any) => (
                                            <div className="media_imgup" key={item.image_id}>
                                                <Image
                                                    className="media_img"
                                                    src={item.image_url}
                                                    alt="media"
                                                    width={100}
                                                    height={100}
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
