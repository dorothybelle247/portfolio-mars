import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl'

class Home extends Component {
    render(){
        return(
            <div style={{width: '100%', height:'50px', margin: 'auto'}}>
            <Grid className="landing-grid">
            <Cell col={12}>
            <h1 className="portfolio">portfolio</h1>
            <div className="banner-text">
                Front-End web developer
            </div>
            <div className="languages">
            <div class="mdc-layout-grid">
  <div class="mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell"> <img src="https://arcweb.co/wp-content/uploads/2016/10/react-logo-1000-transparent.png" alt="Smiley face" ></img></div>
    <div class="mdc-layout-grid__cell"> <img src="https://arcweb.co/wp-content/uploads/2016/10/react-logo-1000-transparent.png" alt="Smiley face" ></img> </div>
    <div class="mdc-layout-grid__cell"></div>
  </div>
</div>
            </div>

          
            </Cell>
            <p>React ? css</p>
            </Grid>
           </div>
        )
    }
}


export default Home;