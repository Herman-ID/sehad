import React, { Component } from "react";
class Gallery extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="gallery">
        <div className="row gallery-list">
          <div className="col-3 gallery-temp">
            <a>
              <p className="gallery-no">01</p>
              <h1 className="gallery-title">Headphones</h1>
              <p className="gallery-subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores laborum recusandae
              </p>
            </a>
          </div>
          <div className="col-3 gallery-temp">
            <a>
              <p className="gallery-no">01</p>
              <h1 className="gallery-title">Headphones</h1>
              <p className="gallery-subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores laborum recusandae
              </p>
            </a>
          </div>
          <div className="col-3 gallery-temp">
            <a>
              <p className="gallery-no">01</p>
              <h1 className="gallery-title">Headphones</h1>
              <p className="gallery-subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores laborum recusandae
              </p>
            </a>
          </div>
          <div className="col-3 gallery-temp">
            <a>
              <p className="gallery-no">01</p>
              <h1 className="gallery-title">Headphones</h1>
              <p className="gallery-subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores laborum recusandae
              </p>
            </a>
          </div>
        </div>
        <div className="gallery-main row">
          <div className="gmain-btn">

            <button className="gmain-btn-2">
              01
                <br />
              <i className="fas fa-caret-right" />
            </button>
            <button className="gmain-btn-1">
              04
                <br />
              <i className="fas fa-caret-left" />
            </button>
          </div>
          <div className="gmain-content">
            <h1 className="gmain-title">Kunyit</h1>
            <h2 className="gmain-review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur architecto itaque ad eligendi harum sapiente iure
              accusamus illum, esse totam laudantium aliquam, at, eos molestias
              adipisci consectetur natus quas ea?
            </h2><br />
            <a href="#" className="gmain-link"><i className="fas fa-caret-right" />  lihat selengkapnya</a>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Cats_Whiskers_%282074039768%29.jpg/268px-Cats_Whiskers_%282074039768%29.jpg" className="gmain-img" />
          </div>
        </div>
      </div >
    );
  }
}
export default Gallery;
