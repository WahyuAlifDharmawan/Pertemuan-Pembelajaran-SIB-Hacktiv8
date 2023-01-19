import React from "react";

class HeroName extends React.Component {
  render() {
    return (
      <>
        <h3>Hero Name</h3>
        <p>{this.props.name}</p>
        <br />
      </>
    );
  }
}

//pengiriman props dari komponen Hero ke komponen HeroName
export default class Hero extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Iron Man",
    };
  }

  render() {
    return (
      <>
        <p>Step one</p>
        <HeroName name="Hercules" />
        <p>Step Two using state</p>
        <HeroName name={this.state.name} />
      </>
    );
  }
}
