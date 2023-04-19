

import React from "react";
import { ReactComponent as Check } from "../../icons/Check.svg";
import { ReactComponent as Add } from "../../icons/Add.svg";

class Icon extends React.Component {
  render() {
    const icons = {
      add: <Add width='50' height='15' />,
      check: <Check width="16" height="16" />,
    };

    return icons[this.props.name];
  }
}

export default Icon;