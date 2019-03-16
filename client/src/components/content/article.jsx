import React, { Component } from "react";
import TumbuhanMap from "../maps/tumbuhanmap";
import Sosmed from "../navbar/sosmed";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="col-12 article_sehad">
        <Sosmed type={this.props.jenis} nama={
            this.props.jenis === "tumbuhan" ? (
                this.props.data.result.nama
            ) : this.props.jenis === "manfaat" ? (
                this.props.data.result.data[0].nama
            ) : null
        } />
        <div className="map_sehad">

        </div>
        <div className="review col-12">
          <div className="foto">
            <img src={this.props.data.data.image} alt={
                this.props.jenis === "tumbuhan" ? (
                    this.props.data.result.nama
                ) : this.props.jenis === "manfaat" ? (
                    this.props.data.result.data[0].nama
                ) : null
            } />
            {
              this.props.jenis === "tumbuhan" ? (
                <React.Fragment>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Ordo</td>
                        <td>{
                            this.props.jenis === "tumbuhan" ? (
                                this.props.data.result.ordo
                            ) : this.props.jenis === "manfaat" ? (
                                this.props.data.result.data[0].ordo
                            ) : null
                        }</td>
                      </tr>
                      <tr>
                        <td>Famili</td>
                        <td>{
                            this.props.jenis === "tumbuhan" ? (
                                this.props.data.result.famili
                            ) : this.props.jenis === "manfaat" ? (
                                this.props.data.result.data[0].famili
                            ) : null
                        }</td>
                      </tr>
                      <tr>
                        <td>Genus</td>
                        <td>{
                            this.props.jenis === "tumbuhan" ? (
                                this.props.data.result.genus
                            ) : this.props.jenis === "manfaat" ? (
                                this.props.data.result.data[0].genus
                            ) : null
                        }</td>
                      </tr>
                      <tr>
                        <td>Spesies</td>
                        <td>{
                            this.props.jenis === "tumbuhan" ? (
                                this.props.data.result.spesies
                            ) : this.props.jenis === "manfaat" ? (
                                this.props.data.result.data[0].spesies
                            ) : null
                        }</td>
                      </tr>
                    </tbody>
                  </table>
                  <a href={`http://localhost:3000?manfaat=` +
                      (this.props.jenis === "tumbuhan" ? (
                          this.props.data.result.nama
                      ) : this.props.jenis === "manfaat" ? (
                          this.props.data.result.data[0].nama
                      ) : null)
                  } className="btn btn-content">Manfaat</a>
                  
                </React.Fragment>
              ) : (
                  <React.Fragment>
                    <a href={`http://localhost:3000?tumbuhan=` +
                        (this.props.jenis === "tumbuhan" ? (
                            this.props.data.result.nama
                        ) : this.props.jenis === "manfaat" ? (
                            this.props.data.result.data[0].nama
                        ) : null)
                    } className="btn btn-content">Detail Tumbuhan</a>
                  </React.Fragment>
                )
            }
              <a href={`http://localhost:3000?peta=` +
                  (this.props.jenis === "tumbuhan" ? (
                      this.props.data.result.nama
                  ) : this.props.jenis === "manfaat" ? (
                      this.props.data.result.data[0].nama
                  ) : null)
              } className="btn btn-content">Pemetaan Tumbuhan</a>
                  
          </div>
          <h1>{
              this.props.jenis === "tumbuhan" ? (
                  this.props.data.result.nama
              ) : this.props.jenis === "manfaat" ? (
                  this.props.data.result.data[0].nama
              ) : null
          }</h1>
          <div
            className="artrev"
            dangerouslySetInnerHTML={{ __html: this.props.data.data.full }}
          />
        </div>
      </div>
    );
  }
}

export default Article;
