import React, { Component } from "react";
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';



class Klasifikasi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
        this.chartConfigs = {
            type: 'column2d',
            width: 600,
            height: 400,
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "Countries With Most Oil Reserves [2017-18]",
                    "subCaption": "In MMbbl = One Million barrels",
                    "xAxisName": "Country",
                    "yAxisName": "Reserves (MMbbl)",
                    "numberSuffix": "K",
                    "theme": "fusion"
                },
                "data": [
                    {
                        "label": "Venezuela",
                        "value": "290"
                    },
                    {
                        "label": "Saudi",
                        "value": "260"
                    },
                    {
                        "label": "Canada",
                        "value": "180"
                    },
                    {
                        "label": "Iran",
                        "value": "140"
                    },
                    {
                        "label": "Russia",
                        "value": "115"
                    },
                    {
                        "label": "UAE",
                        "value": "100"
                    },
                    {
                        "label": "US",
                        "value": "30"
                    },
                    {
                        "label": "China",
                        "value": "30"
                    }
                ]
            },
        };
    }
    componentDidMount() {
        fetch("http://localhost:5000/api/v1/getKlasifikasi", {
            method: "POST",
            headers: { "Content-Type": "application/json" }
        })
            .then(result => result.json())
            .then(datas => {
                this.setState({ data: datas });
                console.log(this.state.data);
            }
            );
        ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
    }



    render() {
        return (
            <div >
                <div className="row">
                    <ReactFC {...this.chartConfigs} />
                    <table>
                        <tbody>
                            <tr>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Klasifikasi;
