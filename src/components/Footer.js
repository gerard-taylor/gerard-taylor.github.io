import React, { Component } from "react";
import $ from "jquery";

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedBasicInfo: {},
    };
  }

  loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedBasicInfo: data.basic_info });
        document.title = `${this.state.sharedBasicInfo.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }
  
  componentDidMount() {
    this.loadSharedData();
  }

  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.state.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    console.log("name", this.state?.sharedBasicInfo?.name)
    return (
      <footer>
        <div className="col-md-12">
          <div className="social-links">{networks}</div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Copyright &copy;{" "}
                {this.state.sharedBasicInfo
                  ? this.state.sharedBasicInfo.name
                  : "???"}
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
