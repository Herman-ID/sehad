import React, { Component } from "react";
class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.tumb = this.props.data.result;
    console.log(this.tumb);
  }

  render() {
    return (
      <div className="col-12 article_sehad">
        <div className="review col-12">
          <div className="foto">
            <img src={this.props.data.data.image} alt={this.tumb.nama} />
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
            <button className="btn btn-content">Manfaat</button>
            <button className="btn btn-content">Persebaran</button>
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
