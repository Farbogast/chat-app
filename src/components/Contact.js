import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.status
    };
  }
  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt={this.props.name} />
        <div>
          <h4 className="name">{this.props.name}</h4>
          <div className="status">
            <span
              className={this.state.status ? "status-online" : "status-offline"}
              onClick={event => {
                let newState = !this.state.status;
                this.setState({ status: newState });
              }}
            ></span>
            <p className="status-text">
              {this.state.status ? "Online" : "Offline"}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
