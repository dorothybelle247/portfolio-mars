import React, { Component } from "react";
import { Grid } from "react-mdl";
class About extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
        
          {/* <Cell col={6}>
            <h2>Dorothy Prince</h2>
            <div className="WOMAN" /> */}
            {/* <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Curabitur sodales ligula in libero. Sed dignissim
              lacinia nunc.
            </p> */}
          {/* </Cell>
          <Cell col={6}>
          <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              My name is Dorothy, Ive been coding for 3 years. I first went to college to become a graphic 
              designer, 
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Curabitur sodales ligula in libero. Sed dignissim
              lacinia nunc.
            </p>
          </Cell> */}

<div className="col s12 m7">
    <h2 className="header">About me</h2>
    <div className="card horizontal">
      <div className="card-image">
        {/* <img src="https://lorempixel.com/100/190/nature/6" alt='sun'> */}
        {/* <div className="WOMAN" /> */}
        <img className="WOMAN" src="https://i.pinimg.com/736x/10/a3/6b/10a36b03bb050580d235cc4926d0cd54.jpg?b=t"  alt='go' />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <p>My name is Dorothy Prince, I am a front-end developer
              with back end end experiences. I first went to college 
              to become a graphic designer. I discovered coding while 
              doing some online code challenges, I become good at it.
              I switched my focus to computer programming, because of
               my graphic design background I was able to create beautiful design 
               with purpose. Ive been able to work with some amazing clients and 
               teammates, helping 
               to build their website, and spreading their message across.</p>
        </div>
        <div className="card-action">
          <a href="a">This is a link</a>
        </div>
      </div>
    </div>
  </div>
          
        </Grid>
        
      </div>
    );
  }
}

export default About;
