/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React  from "react";
import Accordion from "react-bootstrap/Accordion";

function Faqs() {
 
  return (
    <main className="main_content">
      <section className="faqs_block">
        <div className="container">
          <div className="more_videos_title">
            <h3>FAQs</h3>
          </div>
          <div className="faqs_content">
          <Accordion defaultActiveKey={"1"}>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header><span>Lorem Ipsum is simply dummy</span> </Accordion.Header>
                        <Accordion.Body>
                          <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <Accordion defaultActiveKey={"2"}>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header><span>Lorem Ipsum is simply dummy</span> </Accordion.Header>
                        <Accordion.Body>
                          <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <Accordion defaultActiveKey={"3"}>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header><span>Lorem Ipsum is simply dummy</span> </Accordion.Header>
                        <Accordion.Body>
                          <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Faqs;
