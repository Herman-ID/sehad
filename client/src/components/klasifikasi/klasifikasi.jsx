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
            jenis: "famili"
        };
        this.chartConfigs = {
            type: 'bar2d',
            width: 600,
            height: 400,
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "",
                    "subCaption": "",
                    "xAxisName": "",
                    "yAxisName": "Jumlah",
                    "numberSuffix": "K",
                    "theme": "fusion"
                },
                "data": []
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
                datas.famili.data.map(m => (
                    this.chartConfigs.dataSource.data.push(
                        {
                            "label": m.famili.toLowerCase(),
                            "value": m.jumlah_tanaman
                        }
                    )
                ));
                this.chartConfigs.dataSource.chart = {
                    "caption": "Jumlah tanaman sesuai famili",
                    "subCaption": "",
                    "xAxisName": "famili",
                    "yAxisName": "Jumlah",
                    "numberSuffix": "",
                    "theme": "fusion"
                }
                this.setState({ data: datas });
                console.log(this.state.data);
            }
            );
        ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
    }

    click(jenis) {
        if (jenis === "ordo") {
            this.chartConfigs.dataSource.data = []
            this.state.data.ordo.data.map(m => (
                this.chartConfigs.dataSource.data.push(
                    {
                        "label": m.ordo.toLowerCase(),
                        "value": m.jumlah_tanaman,
                    }
                )
            ));

            this.chartConfigs.dataSource.chart = {
                "caption": "Jumlah tanaman sesuai ordo",
                "xAxisName": "ordo",
                "yAxisName": "Jumlah",
                "numberSuffix": "",
                "theme": "fusion"
            }
            this.setState({ jenis: "ordo" });
        } else if (jenis === "genus") {
            this.chartConfigs.dataSource.data = []
            this.state.data.genus.data.map(m => (
                this.chartConfigs.dataSource.data.push(
                    {
                        "label": m.genus.toLowerCase(),
                        "value": m.jumlah_tanaman
                    }
                )
            ));

            this.chartConfigs.dataSource.chart = {
                "caption": "Jumlah tanaman sesuai genus",
                "xAxisName": "genus",
                "yAxisName": "Jumlah",
                "numberSuffix": "",
                "theme": "fusion"
            }
            this.setState({ jenis: "genus" });
        } else if (jenis === "famili") {
            this.chartConfigs.dataSource.data = []
            this.state.data.famili.data.map(m => (
                this.chartConfigs.dataSource.data.push(
                    {
                        "label": m.famili.toLowerCase(),
                        "value": m.jumlah_tanaman
                    }
                )
            ));

            this.chartConfigs.dataSource.chart = {
                "caption": "Jumlah tanaman sesuai famili",
                "xAxisName": "famili",
                "yAxisName": "Jumlah",
                "numberSuffix": "",
                "theme": "fusion"
            }
            this.setState({ jenis: "famili" });
        }
    }


    render() {
        return (
            <div className="sehad_klasifikasi">
                <div className="row">
                    <ReactFC {...this.chartConfigs} />
                    <table >
                        <tbody>
                            <tr>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <table className="table table-striped col-12">
                    <tbody>
                        {
                            this.state.data.length !== 0 ? (
                                <React.Fragment>
                                    <tr >
                                        <td>Famili</td>
                                        <td>{this.state.data.famili.data.length}</td>
                                        <td><button className="btn" onClick={() => this.click("famili")}>Lihat</button></td>
                                    </tr>
                                    <tr >
                                        <td>Ordo</td>
                                        <td>{this.state.data.ordo.data.length}</td>
                                        <td><button className="btn" onClick={() => this.click("ordo")}>Lihat</button></td>
                                    </tr>
                                    <tr >
                                        <td>Genus</td>
                                        <td>{this.state.data.genus.data.length}</td>
                                        <td><button className="btn" onClick={() => this.click("genus")}>Lihat</button></td>
                                    </tr>
                                </React.Fragment>
                            ) : null
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Klasifikasi;
