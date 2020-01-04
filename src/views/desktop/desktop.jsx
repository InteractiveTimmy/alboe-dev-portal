import React, { Component } from 'react';

import './desktop.scss';

export default class Desktop extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    // identity acts as a `home` reset.
    // nav populates automatically based on sections of the current page.
    return (
      <>
        <header>
          <div className="identity">
            <div className="icon">Icon</div>
            <div className="title">Alboe Development</div>
          </div>
          <nav>
            <div className="item">Projects</div>
            <div className="item">News</div>
          </nav>
        </header>
        <section>section</section>
        <section>section</section>
        <section>section</section>
        <footer>
          <div className="legal">
            <div>Privacy</div>
          </div>
          <div className="tools">
            <div>About</div>
          </div>
          <div className="links">
            <div>T</div>
            <div>F</div>
            <div>G</div>
          </div>
        </footer>
      </>
    );
  }
}
