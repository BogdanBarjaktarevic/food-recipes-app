import React, { Component } from "react";
import Icon from "../../UI/Icons/Icon/Icon";
import Sidebar from "../../UI/Sidebar/Sidebar";
import "./Bookmarks.css";

class Bookmarks extends Component {
  state = {
    showSidebar: false
  };

  sidebarClosedHandler = () => {
    this.setState({ showSidebar: false });
  };

  sidebarOpenHandler = () => {
    this.setState({ showSidebar: true });
  };

  render() {
    return (
      <>
        <Icon
          attachClass="heart circular orange big icon bookmark-icon"
          click={this.sidebarOpenHandler}
        />
        <Sidebar
          open={this.state.showSidebar}
          closed={this.sidebarClosedHandler}
          recipes={this.props.recipes}
          loading={this.props.loading}
        />
      </>
    );
  }
}

export default Bookmarks;
