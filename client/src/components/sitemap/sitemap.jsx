import React, { Component } from "react";
class SiteMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isopen: false
    };
    this.sitemap = [
      {
        nama: "Tumbuhan",
        link: "tumbuhan",
        children: [
          {
            nama: "tumbuhan",
            link: "tumbuhan"
          },
          {
            nama: "tumbuhan",
            link: "tumbuhan"
          }
        ]
      },
      { nama: "Jamu", link: "jamu", children: [] },
      {
        nama: "Persebaran",
        link: "persebaran",
        children: []
      },
      {
        nama: "Klasifikasi",
        link: "klasifikasi",
        children: []
      },
    ];
    this.style = {};
    this.onTutup = this.onTutup.bind(this);
  }
  Click(link) {
    console.log(link);
  }
  onTutup() {
    if (this.state.isopen === true) {
      this.style = {
        blursite: {
          display: "none",
          opacity: 0
        },
        sitemap: {
          left: "-400px"
        },
        button: {
          left: "0px"
        }
      };
    } else {
      this.style = {
        blursite: {
          display: "block",
          opacity: 0.7
        },
        sitemap: {
          left: "0px"
        },
        button: {
          left: "300px"
        }
      };
    }
    this.setState({ isopen: !this.state.isopen });
    console.log("click");
  }
  render() {
    return (
      <React.Fragment>
        <div style={this.style.blursite} className="blursite" />
        <div className="sitemap" style={this.style.sitemap}>
          <h3>Sehad</h3>
          <ul>
            {this.sitemap.map((m, index) => (
              <li key={m.nama + index}>
                <a
                  onClick={() => {
                    this.Click(m.link);
                  }}
                >
                  {m.nama}
                </a>
                {m.children.length !== 0 ? (
                  <ul>
                    {m.children.map((m, index) => (
                      <li key={m.nama + index}>
                        <a
                          onClick={() => {
                            this.Click(m.link);
                          }}
                        >
                          {m.nama}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                    ""
                  )}
              </li>
            ))}
          </ul>
        </div>
        <button
          className="buttonsitemap"
          style={this.style.button}
          onClick={this.onTutup}
        >
          <i
            className={`fas fa-arrow-${
              this.state.isopen === false ? "right" : "left"
              }`}
          />
        </button>
      </React.Fragment>
    );
  }
}

export default SiteMap;
