import React, { Component } from "react";

const ImageSlide = ({ url }) => {
    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <img className="image_guide" src={url} />
    );
}

export default ImageSlide;