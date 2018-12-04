import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import Guide1 from "../../asset/img/guide(1).jpeg";
import Guide2 from "../../asset/img/guide(2).jpeg";
import Guide3 from "../../asset/img/guide(3).jpeg";
import ImageSlide from "./imageslide";
import Arrow from "./arrow";

class Guide extends Component {
    constructor(props) {
        super(props);
        this.style = {
            back: {
                display: "block",
            },
            front: {
                display: "block",
            }
        };
        this.state = {
            currentImageIndex: 0
        }
        this.imgUrls = [
            Guide1,
            Guide2,
            Guide3,
        ]
        this.previousSlide = this.previousSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }

    previousSlide() {
        const lastIndex = this.imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide() {
        if (this.state.currentImageIndex === this.imgUrls.length - 1) {
            this.props.onGuide
        }
        const lastIndex = this.imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
        console.log(this.state.currentImageIndex, this.imgUrls.length)
    }

    render() {
        return (
            <React.Fragment>
                <div className="guide-back" />
                <div className="guide-main" style={this.style.front}>
                    <div className="carousel row">
                        {this.state.currentImageIndex === 0 ? null : (<Arrow
                            direction="left"
                            clickFunction={this.previousSlide}
                            glyph="&#9664;" />)
                        }

                        <ImageSlide url={this.imgUrls[this.state.currentImageIndex]} />

                        {this.state.currentImageIndex === 2 ? null : (<Arrow
                            direction="right"
                            clickFunction={this.nextSlide}
                            glyph="&#9654;" />) 
                        }
                        {this.state.currentImageIndex === 2 ? (<Arrow
                            direction="right"
                            clickFunction={this.props.onGuide}
                            glyph="&#9654;" />) : null
                        }
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default Guide;
