import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import TeachersCard from "./TeachersCard";

function Teachers() {

  return (
    <main className="main_content">
      <section className="teachers">
        <section className="bred_eles"><div className="container"><nav aria-label="breadcrumb"><ol className="breadcrumb"><li className="breadcrumb-item point_none"><a href="#" role="button" >Teachers</a></li></ol></nav></div></section>
        <TeachersCard />
      </section>
    </main>
  );
}

export default Teachers;
