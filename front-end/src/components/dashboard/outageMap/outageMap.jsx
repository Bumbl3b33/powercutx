import React from "react";
import ColouredMap from "../map/colouredMap";

class OutageMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { colours: {} };
  }

  static getDerivedStateFromProps(props, state) {
    var districtCode, colour;
    var colours = new Object();
    props.outages.forEach(({ DistrictName, Total }) => {
      districtCode =
        DistrictName === "Matale"
          ? "mle"
          : DistrictName === "Matara"
          ? "mra"
          : DistrictName.toLowerCase().substr(0, 3);

      /*
      +---------+-----------+
      |Threshold|   Colour  |
      +---------+-----------+
      | > 5     |   red     |
      | > 3     |   yellow  |
      | <=3     |   default |
      +---------+-----------+
      */
      colour = Total > 5 ? "#FF0000" : Total > 3 ? "#FFFF00" : "";

      //adding colour to list
      colours[districtCode] = colour;
    });
    return { colours: colours };
  }

  render() {
    return <ColouredMap colours={this.state.colours} />;
  }
}

export default OutageMap;
