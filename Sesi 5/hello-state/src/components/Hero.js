import React from "react";

class HeroName extends React.Component {
  render() {
    return <h3>{this.props.name}</h3>;
  }
}

export default class Hero extends React.Component {
  render() {
    return <HeroName name="Hercules" />;
  }
}
