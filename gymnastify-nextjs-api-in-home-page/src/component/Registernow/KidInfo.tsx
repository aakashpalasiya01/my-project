/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useRef, useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import Loginslider from '../Login/LoginSlider/Loginslider';
import Link from 'next/link';
import { ROUTES_PATH } from '@/utils/constant';

const KidInfo = ({ nextStep }: any) => {

    const simpleValidator = useRef<SimpleReactValidator>(new SimpleReactValidator());

    const [, forceUpdate] = useState<number>(0);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (simpleValidator.current.allValid()) {
            nextStep();
        } else {
            simpleValidator.current.showMessages();
            forceUpdate(1);
        }
    }

    return (
        <div className="login_area register_page">
            <section className="login_block">
                <div className="login_group position-relative">
                    <div className="login_frm">
                        <div className="logo_title">
                            <Link href="">Gymnastify</Link>
                        </div>
                        <h4>Register Now</h4>
                        <div className="Kid_info">
                            <Link href="">Kid Info</Link>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="row kids_row">
                                <div className="col-lg-6 kids_cols">
                                    <div className="mb-3">
                                        <label htmlFor="first_name" className="ele_lable">First Name</label>
                                        <input
                                            type="text"
                                            className="form-control ele_input"
                                            name='first_name'
                                            id='first_name'
                                            placeholder="First Name"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 kids_cols">
                                    <div className="mb-3">
                                        <label htmlFor="last_name" className="ele_lable">Last Name</label>
                                        <input
                                            type="text"
                                            name='last_name'
                                            id='last_name'
                                            className="form-control ele_input"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                            <label htmlFor="age" className="ele_lable">Age</label>
                                <input
                                    type="number"
                                    name="age"
                                    id="age"
                                    className="form-control ele_input"
                                    placeholder="Age"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor='group' className="ele_lable">Group</label>
                                <select
                                    className="ele_input form-control ele_select"
                                    name="group"
                                    id="group"
                                >
                                    <option value="">Please select</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor='levels' className="ele_lable">Levels</label>
                                <select
                                    className="ele_input form-control ele_select"
                                    name="levels"
                                    id="levels"
                                >
                                    <option value="">Please select</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor='branch' className="ele_lable">Branch</label>
                                <select
                                    className="ele_input form-control ele_select"
                                    name="branch"
                                    id="branch"
                                    onBlur={() => simpleValidator.current.showMessageFor('branch')}
                                >
                                    <option value="">Please select</option>
                                    <option value="4s Ranch">4s Ranch</option>
                                    <option value="La Costa">La Costa</option>
                                </select>
                            </div>
                            <div className="btn_login">
                                <button type='submit' className="btn_block primary_btn width_full">
                                    Continue
                                </button>
                                <p>
                                Already have an account ?{" "}
                                <Link href={ROUTES_PATH.LOGIN}>Login</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div className="login_ftr">
                        <p>
                            <span>By continuing, you agree to Gymnastify </span> Terms of
                            Service <span>And</span> Privacy Policy.
                        </p>
                    </div>
                </div>
                <Loginslider />
            </section>
        </div>

    )
}

export default KidInfo;