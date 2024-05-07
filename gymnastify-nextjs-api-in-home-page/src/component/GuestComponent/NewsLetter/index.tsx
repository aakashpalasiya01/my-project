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
              <div className="form_join">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                />
                <button className="join_btn outline_btn">Join Us</button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default NewsLetter