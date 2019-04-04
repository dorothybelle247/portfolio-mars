import React, { Component } from "react";
import { Grid, Cell,List, ListItem, ListItemContent  } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          {/* <Cell col={6}>
            <h2>Dorothy Prince</h2>
            <div className="WOMAN" />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Curabitur sodales ligula in libero. Sed dignissim
              lacinia nunc.
            </p>
          </Cell> */}
          <Cell col={6}>
          <h2>Contact me</h2>
          <hr />
         
              <div className='Clist'>
              <List>
              <ListItem>
    <ListItemContent style={{fontSize:'30px'}}>
    <i className= 'fa fa-phone-square' area-hidden='true'/>
    973-389-3533</ListItemContent>
  </ListItem>
  <ListItem>
  <ListItemContent style={{fontSize:'30px'}}>
    <i className= 'fa fa-envelope' area-hidden='true'/>
    dorothybelle@gmail.com</ListItemContent>
  </ListItem>
  <ListItem>
  <ListItemContent style={{fontSize:'25px'}}>
    <i className= 'fa fa-envelope' area-hidden='true'/>
    dorothyprince94@yahoo.com</ListItemContent>
  </ListItem>

</List>
<p>REACT, HTML, CSS, Bootstrap <br/> HTML5, CSS3, Flexbox<br/> Metarialize.css, Senmatic UI
<br/>JavaScript </p>
<a href="https://docs.google.com/document/d/1G_hmcU-Lj3KWI5Ht36Vj0T9i4S16ZMbLrwVc7wFhQRw/edit?usp=sharing">resume</a>
        </div>
          </Cell>
           
        </Grid>
      </div>
    );
  }
}

export default Contact;
