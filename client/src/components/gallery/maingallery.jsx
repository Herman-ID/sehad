import React, { Component } from "react";
class MainGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="gmain-content">
                {
                    this.props.content === false ? "" : (
                        <React.Fragment>
                            <h1 className="gmain-title">{this.props.content.result.nama}</h1>
                            <h2 className="gmain-review">{this.props.content.summary.substring(0, 200) + "..."}</h2> <br />
                            <a href={`http://localhost:3000?` + this.props.type + `=` + this.props.content.result.nama} className="gmain-link"><i className="fas fa-caret-right" />lihat selengkapnya</a>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Cats_Whiskers_%282074039768%29.jpg/268px-Cats_Whiskers_%282074039768%29.jpg" className="gmain-img" />
                        </React.Fragment>
                    )
                }
            </div>
        );
    }
}
export default MainGallery;
