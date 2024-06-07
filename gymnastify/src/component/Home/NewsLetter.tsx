import React from 'react'

const NewsLetter = () => {
  return (
    <section className="join_our">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="join_our_title">
                                <h4>Want to hear about announcements & news?</h4>
                                <p>Join our mailing list!</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <form >
                                <div className="form_join">
                                    <span className='joinus_field'>
                                        <input
                                            id='email'
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
            </section>
  )
}

export default NewsLetter