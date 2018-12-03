import React, { Component } from "react";
import TumbuhanMap from "../maps/tumbuhanmap";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.jenis === "tumbuhan" ? (
      this.tumb = this.props.data.result
    ) : this.props.jenis === "manfaat" ? (
      this.tumb = this.props.data.result.data[0]
    ) : null
    console.log(this.tumb.nama);
  }

  render() {
    return (
      <div className="col-12 article_sehad">
        <div className="map_sehad">

        </div>
        <div className="review col-12">
          <div className="foto">
            <img src={this.props.data.data.image} alt={this.tumb.nama} />
            {
              this.props.jenis === "tumbuhan" ? (
                <React.Fragment>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Ordo</td>
                        <td>{this.tumb.ordo}</td>
                      </tr>
                      <tr>
                        <td>Famili</td>
                        <td>{this.tumb.famili}</td>
                      </tr>
                      <tr>
                        <td>Genus</td>
                        <td>{this.tumb.genus}</td>
                      </tr>
                      <tr>
                        <td>Spesies</td>
                        <td>{this.tumb.spesies}</td>
                      </tr>
                    </tbody>
                  </table>
                  <a href={`http://localhost:3000?manfaat=` + this.tumb.nama} className="btn btn-content">Manfaat</a>
                  <button className="btn btn-content">Persebaran</button>
                </React.Fragment>
              ) : (
                  <React.Fragment>
                    <a href={`http://localhost:3000?tumbuhan=` + this.tumb.nama} className="btn btn-content">Detail Tumbuhan</a>
                    <button className="btn btn-content">Persebaran</button>
                  </React.Fragment>
                )
            }
          </div>
          <h1>{this.tumb.nama}</h1>
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
