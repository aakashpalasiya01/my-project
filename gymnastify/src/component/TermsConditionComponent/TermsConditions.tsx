/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function TermsConditions() {
  return (
    <main className="main_content">
      <section className="privacy_policy">
        <section className="bred_eles">
          <div className="container">
            <Breadcrumb>
              <Breadcrumb.Item className="point_none" href="#">
                Terms & conditions
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </section>
        <div className="container">
          <div className="privacy_content">
            <p>
              “Gymnastify” is an innovative platform designed to revolutionize
              the world of gymnastics. Whether you’re a beginner, intermediate,
              or advanced gymnast, Gymnastify offers a comprehensive suite of
              tools and resources to enhance your skills, optimize your training
              regimen, and track your progress like never before.
            </p>
            <p>
              With Gymnastify, you can access a vast library of instructional
              videos, tutorials, and tips crafted by expert gymnasts and
              coaches. From mastering fundamental techniques to perfecting
              advanced maneuvers, our curated content covers all aspects of
              gymnastics, catering to athletes of all levels and disciplines.
            </p>
            <p>
              But Gymnastify is more than just a repository of knowledge—it’s a
              dynamic training companion. Our interactive training plans are
              tailored to your skill level and goals, providing personalized
              workouts and drills to help you improve your strength,
              flexibility, and technique. Whether you’re training at home, in
              the gym, or on the go, Gymnastify empowers you to take your
              performance to the next level.
            </p>
            <p>
              Additionally, Gymnastify offers cutting-edge performance tracking
              and analysis tools. With our intuitive progress tracking features,
              you can monitor your development over time, identify areas for
              improvement, and set achievable milestones to keep you motivated
              and on track toward your goals.
            </p>
            <p>
              Whether you’re aiming for the podium or simply looking to enhance
              your gymnastics skills for fun and fitness, Gymnastify is your
              ultimate partner on your journey to gymnastic excellence. Join the
              Gymnastify community today and unlock your full potential in the
              world of gymnastics.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TermsConditions;
