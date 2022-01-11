import React from "react";
import axios from "axios";
export default class Score extends React.Component {
  state = {};
  tryAgain = () => {
    window.location = "/";
  };
  async componentDidMount() {
    let { name, count } = this.props;
    console.log(name, count);
    let date = new Date();
    let dates = date.toLocaleString();
    let obj = { name: name, error: count, date: dates };
    let response = await axios.post(
      "https://peaceful-lowlands-08735.herokuapp.com/datapost",
      obj
    );
    let { data } = response;
  }
  render() {
    let { name, count } = this.props;
    return (
      <div className="">
        <div className="scorecard">
          <div className="error">
            Wrong Answer = <span className="text-danger">{count}</span>
          </div>
          <div className="continue-btn-wrapper">
            <button
              className="continue-btn"
              onClick={() => this.tryAgain()}
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }
}