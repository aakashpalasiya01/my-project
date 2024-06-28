import React from "react";
import TeachersCard from "./TeachersCard";
import Link from "next/link";

function Teachers() {

  return (
    <main className="main_content">
      <section className="teachers">
        <section className="bred_eles"><div className="container"><nav aria-label="breadcrumb"><ol className="breadcrumb"><li className="breadcrumb-item point_none"><Link href="#">Teachers</Link></li></ol></nav></div></section>
        <TeachersCard />
      </section>
    </main>
  );
}

export default Teachers;
