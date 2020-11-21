import React from 'react';

const NavBar = ({logOut}) => {

  return (
    <div>
    <img
        className="navLogo"
        src="/images/SFRLogo.png"
        alt="Secret Family Recipes"
      />
      <button className='fadeBttn' onClick={() => logOut()}>Log Out</button>
    </div>
  )
}

export default NavBar;