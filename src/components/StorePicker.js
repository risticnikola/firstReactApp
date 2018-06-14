import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  storeInput = React.createRef();

  selectStore = e => {
    e.preventDefault();
    const storeName = this.storeInput.current.value;
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.selectStore}>
        <input
          type="text"
          required
          ref={this.storeInput}
          placeholder="Text into"
          defaultValue={getFunName()}
        />
        <button>Search</button>
      </form>
    );
  }
}

export default StorePicker;
