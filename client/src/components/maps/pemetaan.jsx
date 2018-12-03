import React, { Component } from "react";
import {
    Map,
    TileLayer,
    GeoJSON
} from "react-leaflet";
import Geo from "./Geo";
import "../../asset/leaflet/leaflet.css"

const center = [-0.2897471, 115.0760588]

// const MyPopupGeoJson = ({ content, position }: Props) => (
//     <Marker position={position}>
//         <Popup>{content}</Popup>
//     </Marker>
// )
//
// const MyGeoJsonList = (markers) => {
//     const items = markers.map(({ key, ...props }) => (
//         <MyPopupGeoJson key={key} {...props} />
//     ))
//     return <Fragment>{items}</Fragment>
// }

class pemetaan extends Component {
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
        var dataPopup = [];
        fetch("http://localhost:5000/api/v1/maps/getStatistic", {
            method: "POST",
            headers: { "Content-Type": "application/json" }
        })
            .then(result => result.json())
            .then(data => {
                var pending = 0;
                data.forEach(function (item) {
                    var url = "http://localhost:5000/api/v1/geojson?kode_wilayah=" + item.provinsi.kode_wilayah;
                    fetch(url, {
                        method: "GET",
                        headers: { "Content-Type": "text/plain" }
                    })
                        .then(result => result.json())
                        .then(respone => {
                            dataPopup.push(item.data)
                            dataGeoJson.push(respone);
                            //if(pending == data.length -1){
                            pushJson(dataGeoJson, dataPopup);
                            //}
                            console.log(pending);
                            pending++;
                        })
                })
            })
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     this.setState({
    //         geoJson:this.geoJson
    //     })
    // }

    render() {
        const showPeta = (data, index) => {
            return (
                <GeoJSON key={data} data={data} color="red" />
            )
        }

        // const GEO = this.state.geoJson.map((item,i)=>{
        //         showPeta(item,i);
        //     })
        return (
            <Map center={center} zoom={5} style={this.style}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    this.state.geoJson.length !== 0 ? (
                        this.state.geoJson.geo !== 0 ? (
                            this.state.geoJson.geo.map((m, index) => (
                                <Geo key={index} geo={m} popup={this.state.geoJson.popup[index]} />
                            )
                            )) : ""
                    ) : ""
                }
            </Map>
        )
    }


}

export default pemetaan;

