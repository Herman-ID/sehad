import React, { Component } from "react";
import {
    Circle,
    CircleMarker,
    Map,
    Popup,
    TileLayer,
    GeoJSON
} from "react-leaflet";
import "../../asset/leaflet/leaflet.css"

import "react-responsive-carousel/lib/styles/carousel.min.css";

class TGeo extends Component {
    constructor(props) {
        super(props);
        //this.panjang = this.props.popup.tumbuhan.data.length;
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.geo !== null ? (
                        <GeoJSON key={this.props.geo} data={this.props.geo} color="red" >
                            <Popup key={this.props.geo}>
                                {this.props.popup}
                            </Popup>
                        </GeoJSON>
                    ) : ""
                }
            </React.Fragment>
        );
    }


}

export default TGeo;

