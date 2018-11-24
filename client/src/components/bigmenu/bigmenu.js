import React, { Component } from "react";
import Link from "./link";
class BigMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {
          kata: "telusuri berbagai jenis tanaman obat",
          icon: "leaf",
          link: "#"
        },
        {
          kata: "pelajari berbagai klasifikasi tanaman obat",
          icon: "chart-bar",
          link: "#"
        },
        {
          kata: "telusuri berbagai jenis jamu tradisional di Indonesia",
          icon: "pills",
          link: "#"
        },
        {
          kata: "telusuri persebaran tumbuhan yang ada di Indonesia",
          icon: "map",
          link: "#"
        }
      ]
    };
    this.style = {};
  }

  render() {
    return (
      <div className="bigmenu row" style={this.style}>
        <div className="col-2">
          <h1 className="bigmenu_title">Menu</h1>
        </div>
        <div className="bigmenu_isi col-10 row">
          {this.state.menu.map(i => (
            <Link kata={i.kata} icon={i.icon} link={i.link} key={i.icon} />
          ))}
        </div>
      </div>
    );
  }
}

export default BigMenu;