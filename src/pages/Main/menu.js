// Original: https://github.com/chenglou/react-motion/tree/master/demos/demo8-draggable-list

import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu({ items }) {
  return (
    <div className="container">
      <Link to="/">
        <div className="content content-home">Home</div>
      </Link>
      <Link to="/about">
        <div className="content content-about">About</div>
      </Link>
      <Link to="/projects">
        <div className="content content-projects">Projects</div>
      </Link>
    </div>
  );
}
