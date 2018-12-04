import React, { Component } from "react";
import Link from "./link";
class BigMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {
          kata: "telusuri home",
          icon: "home",
          link: "about"
        },
        {
          kata: "telusuri berbagai jenis tanaman obat",
          icon: "leaf",
          link: "gallery_tumbuhan"
        },
        {
          kata: "pelajari berbagai klasifikasi tanaman obat",
          icon: "chart-bar",
          link: "klasifikasi"
        },
        {
          kata: "telusuri persebaran tumbuhan yang ada di Indonesia",
          icon: "map",
          link: "pemetaan"
        }
      ]
    };
    this.style = {
      muncul: {
        display: "flex"
      },
      hidden: {
        display: "none"
      }
    };
  }

  render() {
    return (
      <div
        className="bigmenu row"
        style={
          this.props.hidden === false ? this.style.hidden : this.style.muncul
        }
      >
        <div className="col-2">
          <h1 className="bigmenu_title">Menu</h1>
        </div>
        <div className="bigmenu_isi col-10 row">
          {this.state.menu.map(i => (
            <Link
              click={this.props.pindahmenu}
              kata={i.kata}
              icon={i.icon}
              link={i.link}
              key={i.icon}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default BigMenu;
