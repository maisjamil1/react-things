import React from 'react';

function Header(props) {
    return (
      <>
        <h1>heaader - songs list</h1>
        <p>songs : {props.Counter}</p>
      </>
    )
  }

  export default Header;
