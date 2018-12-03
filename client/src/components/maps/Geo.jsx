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
import { Carousel } from 'react-responsive-carousel';

class Geo extends Component {
    constructor(props) {
        super(props);
        this.panjang = this.props.popup.tumbuhan.data.length;
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.geo !== null ? (
                        <GeoJSON key={this.props.geo} data={this.props.geo} color={
                            this.panjang > 0 && this.panjang <= 2 ? "green" :
                                this.panjang > 2 && this.panjang <= 5 ? "yellow" :
                                    "red"
                        } >
                            <Popup key={this.props.geo}>
                                {this.props.popup.tumbuhan.data.map(m => (
                                    <a className="card card_tumbuhan" href={`http://localhost:3000?tumbuhan=` + m.nama}>
                                        <div >
                                            <h1>{m.nama}</h1>
                                            <p>{m.latin}</p>
                                        </div>
                                    </a>
                                ))}
                            </Popup>
                        </GeoJSON>
                    ) : ""
                }
            </React.Fragment>
        );
    }


}

export default Geo;

