"use client";
import React from 'react'
import Breadcrumb from "react-bootstrap/Breadcrumb";

const SafetyContent = ({ renderingContent }: any) => {
  return (
    <section className="privacy_policy">
      <section className="bred_eles">
        <div className="container">
          <Breadcrumb>
            <Breadcrumb.Item className="point_none" href="#">
              {renderingContent[0]?.title?.rendered}
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </section>
      <div className="container">
        <div className="privacy_content" dangerouslySetInnerHTML={{ __html: renderingContent[0]?.content?.rendered }}>
        </div>
      </div>
    </section>
  )
}

export default SafetyContent