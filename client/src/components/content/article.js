import React, { Component } from "react";
import Menu from "./menu";
class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        title: "Kunyit",
        extract:
          "Kunyit atau kunir, (Curcuma longa Linn. syn. Curcuma domestica Val.), adalah termasuk salah satu tanaman rempah-rempah dan obat asli dari wilayah Asia Tenggara. Tanaman ini kemudian mengalami penyebaran ke daerah Malaysia, Indonesia, Australia bahkan Afrika. Hampir setiap orang Indonesia dan India serta bangsa Asia umumnya pernah mengonsumsi tanaman rempah ini, baik sebagai pelengkap bumbu masakan, jamu atau untuk menjaga kesehatan dan kecantikan.\nKunyit tergolong dalam kelompok jahe-jahean, Zingiberaceae. Kunyit dikenal di berbagai daerah dengan beberapa nama lokal, seperti turmeric (Inggris), kurkuma (Belanda), kunyit (Indonesia dan Malaysia), janar (Banjar), kunir (Jawa), koneng (Sunda), konyet (Madura,).",
        photo:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Curcuma_longa_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-199.jpg/220px-Curcuma_longa_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-199.jpg"
      }
    };
  }

  render() {
    return (
      <div className="col-12 article_sehad">
        <div className="row">
          <div className="review col-7">
            <h1>{this.state.data.title}</h1>
            <p>{this.state.data.extract}</p>
          </div>
          <div className="foto col-5">
            <img src={this.state.data.photo} alt={this.state.data.title} />
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
