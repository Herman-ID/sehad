import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper, Polygon, } from 'google-maps-react';

class gmaps extends Component{
    constructor(asd){
        super(asd);
        this.geoJson =[];
    }

    componentDidMount() {
        const toPolygon = _.map(coordinates, function(entry) {
            return _.reduce(entry, function(list, polygon) {
                // This map() only transforms the data.
                _.each(_.map(polygon, function(point) {
                    // Important: the lat/lng are vice-versa in GeoJSON
                    return new google.maps.LatLng(point[1], point[0]);
                }), function(point) {
                    list.push(point);
                });

                return list;
            }, []);
        });

        fetch("http://localhost:5000/api/v1/geojson?kode_wilayah=010000",{
            method:"GET",
            headers: { "Content-Type": "text/plain" }
        })
            .then(result => result.json())
            .then(data=>{
                // this.geoJson = data;
                // console.log(data.features[0].geometry.type );
                // let filterGeoJsonType = data.filter(function(data){
                //     return data.features[0].geometry.type === "MultiPolygon" || data.features[0].geometry.type === "Polygon"
                // });
                var path =  toPolygon(data.features[0].geometry.coordinates);
                this.geoJson = new Polygon
                console.log(this.geoJson);
            })
    }
    render(){
        if (!this.props.loaded) return <div>Loading...</div>;

        const polygon = [
            { lat: 37.789411, lng: -122.422116 },
            { lat: 37.785757, lng: -122.421333 },
            { lat: 37.789352, lng: -122.415346 }
        ];
        return (
            <Map
                google={this.props.google}
                className="map"
                style={{ height: '100%', position: 'relative', width: '100%' }}
                zoom={14}>
                <Polygon
                    fillColor="#0000FF"
                    fillOpacity={0.35}
                    paths={[this.geoJson]}
                    strokeColor="#0000FF"
                    strokeOpacity={0.8}
                    strokeWeight={2}
                />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: `AIzaSyAiWlZhewddMv8EhGF9-5rv6VxWhwVPItQ`
})(gmaps)