import React from 'react';
import './landing.css';

const Landing = () => {
  return (
    <div>
      <h2>Welcome to</h2>
      <img
        className="logo"
        src="/images/SFRLogo.png"
        alt="Secret Family Recipes"
      />
      <div className='landingCont'>
        <p>Welcome to SecretFamilyRecipesWhateverItEndsUpBeing.com! Here, you have a great place to store your family's cherished and coveted dishes (I swear, if Aunt Cathy tries to steal my cookbook away into the bathroom to sneak a peek one more time...) in a safe and secure manor, whether they've been passed-down for generations, or you whipped up a materpiece in the kitchen this afternoon, you'll never have to forget (or let slip!) a single ingredient ever again!</p>
      </div>
    </div>
  )
}

export default Landing;

