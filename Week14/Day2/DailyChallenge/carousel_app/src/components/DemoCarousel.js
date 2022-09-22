import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends Component {
  render() {
    return (
      <div style={{ width: "500px", margin: "0 auto" }}>
        <Carousel>
          <div>
            <img src="/assets/hong-kong.jpg" />
            <p className="legend">Hong Kong</p>
          </div>
          <div>
            <img src="/assets/macao.webp" />
            <p className="legend">Macao</p>
          </div>
          <div>
            <img src="/assets/japan.webp" />
            <p className="legend">Japan</p>
          </div>
          <div>
            <img src="/assets/las-vegas.webp" />
            <p className="legend">Las Vegas</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default DemoCarousel;
