import React, { Component } from "react";
import { render } from "react-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
// =====basic======
// componentDidMount() {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       console.log(position)
//     });
//   }

// ========combine error/success=========
// componentDidMount() {
//     navigator.geolocation.getCurrentPosition(
//       function(position) {
//         console.log(position);
//       },
//       function(error) {
//         console.error("Error Code = " + error.code + " - " + error.message);
//       }
//     );
//   }

// sync location
componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
    }
  }



  render() {
    return (
      <div>
        <h4>Using geolocation JavaScript API in React</h4>
      </div>
    );
  }
}
