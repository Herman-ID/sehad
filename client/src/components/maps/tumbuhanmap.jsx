import React, { Component } from "react";
import {
    Map,
    TileLayer,
    GeoJSON
} from "react-leaflet";
import TGeo from "./TGeo";
import "../../asset/leaflet/leaflet.css"

const center = [-0.2897471, 115.0760588]

class Tumbuhanmap extends Component {
    constructor(asd) {
        super(asd);
        this.state = {
            geoJson: [],
            status: false,
        };
        this.geoJson = [];
        this.style = {
            width: "100%",
            height: "100%"
        }
    }

    componentDidMount() {
        const pushJson = (data, datapopup) => {
            // geo:data.map(m =>())
            this.setState({
                geoJson: { geo: data, popup: datapopup }
            })
        }
        var dataGeoJson = [];
        var dataPopup = []; var pending = 0;
        this.props.data.provinsi.forEach(function (item) {
            var url = "http://localhost:5000/api/v1/geojson?kode_wilayah=" + item.provinsi;
            fetch(url, {
                method: "GET",
                headers: { "Content-Type": "text/plain" }
            })
                .then(result => result.json())
                .then(respone => {
                    dataPopup.push(item.nama_provinsi)
                    dataGeoJson.push(respone);
                    //if(pending == data.length -1){
                    pushJson(dataGeoJson, dataPopup);
                    //}
                    console.log(pending);
                    pending++;
                })
        })
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     this.setState({
    //         geoJson:this.geoJson
    //     })
    // }

    render() {

        // const GEO = this.state.geoJson.map((item,i)=>{
        //         showPeta(item,i);
        //     })
        return (
            <React.Fragment>
                <div className="map-title row">
                    <h1>Pemetaan Tanaman {this.props.data.result.nama}</h1>
                    <a href={`http://localhost:3000?tumbuhan=` + this.props.data.result.nama} className="btn btn-content">Detail Tumbuhan</a>
                    <a href={`http://localhost:3000?manfaat=` + this.props.data.result.nama} className="btn btn-content">Manfaat</a>

                </div>
                <Map center={center} zoom={5} style={this.style}>

                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        this.state.geoJson.length !== 0 ? (
                            this.state.geoJson.geo !== 0 ? (
                                this.state.geoJson.geo.map((m, index) => (
                                    <TGeo key={index} geo={m} popup={this.state.geoJson.popup[index]} />
                                )
                                )) : ""
                        ) : ""
                    }
                </Map>
            </React.Fragment>
        )
    }


}

export default Tumbuhanmap;

