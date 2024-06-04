"use client";
import Carousel from "react-bootstrap/Carousel";
import boyFitness from '@/assets/images/boy-exercise.png'
import girlFitness from '@/assets/images/girl-exercise.png'

const Loginslider = () => {

  return (
    <div className="login_banner">
      <Carousel fade slide={true}>
        <Carousel.Item>
          <div className="loging_img" style={{backgroundImage:`url(${boyFitness})`}}></div>
          <Carousel.Caption className="login_abouts"> 
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repellendus eligendi neque maxime esse totam dolores voluptas assumenda sunt ipsam, harum tempore, corrupti libero repellat praesentium quaerat. Consectetur, eaque porro?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="loging_img" style={{backgroundImage:`url(${girlFitness})`}}></div>
          <Carousel.Caption className="login_abouts"> 
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repellendus eligendi neque maxime esse totam dolores voluptas assumenda sunt ipsam, harum tempore, corrupti libero repellat praesentium quaerat. Consectetur, eaque porro?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="loging_img" style={{backgroundImage:`url(${boyFitness})`}}></div>
          <Carousel.Caption className="login_abouts"> 
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repellendus eligendi neque maxime esse totam dolores voluptas assumenda sunt ipsam, harum tempore, corrupti libero repellat praesentium quaerat. Consectetur, eaque porro?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="loging_img" style={{backgroundImage:`url(${girlFitness})`}}></div>
          <Carousel.Caption className="login_abouts"> 
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repellendus eligendi neque maxime esse totam dolores voluptas assumenda sunt ipsam, harum tempore, corrupti libero repellat praesentium quaerat. Consectetur, eaque porro?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Loginslider;