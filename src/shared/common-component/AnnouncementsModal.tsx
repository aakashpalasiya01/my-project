'use client';
import { NewsLetterAction } from '@/store/actions/homeAction';
import { NewsLetterFormValue, NewsLetterResType } from '@/types/authType';
import { forSuccess } from '@/utils/CommonService';
import React, { useState } from 'react'

const AnnouncementsModal = () => {
    const defaultValue: NewsLetterFormValue = {
        email: ""
    }

    const [form, setForm] = useState<NewsLetterFormValue>(defaultValue);


    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, email: target.value });
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (form.email) {
            const newsLetterFormatData = new FormData();
            newsLetterFormatData.append("email", form.email);
            await NewsLetterAction(newsLetterFormatData).then((res: NewsLetterResType) => {
                if (res.success) {
                    forSuccess(res?.data?.data?.message);
                    setForm(defaultValue);
                }
            })
        }
    }

    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="join_our_title">
                        <h4>Want to hear about announcements & news?</h4>
                        <p>Join our mailing list!</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <form onSubmit={handleSubmit}>
                        <div className="form_join">
                            <span className='joinus_field'>
                                <input
                                    id='email'
                                    value={form.email}
                                    onChange={handleChange}
                                    type="email"
                                    placeholder="Email"
                                    className="form-control"
                                    required
                                />
                            </span>
                            <button type='submit' className="btn_animated join_btn outline_btn">Join Us</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AnnouncementsModal;