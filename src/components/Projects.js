import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
      

    if(this.state.activeTab === 0){
      return(
        <div className="row" >
          {/* Project 1 */}
          <div className="col-sm-3 col-md-12">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.cookingclassy.com/wp-content/uploads/2018/01/chocolate-covered-strawberry-cupcakes-3.jpg) center / cover'}} >Cupcake Website</CardTitle>
            <CardText>
              For a cupcake company name taste and see my team and i created the website
              <br />
              The languages that were used are HTML, CSS, JavaScript, 
              MYSQL, nosql, Google Authentication, Angular
            </CardText>
            <CardActions border>
              {/* <Button colored>GitHub</Button> */}
              {/* <Button colored>CodePen</Button> */}
              <Button colored><a href="https://github.com/dorothybelle247"  target="blank">Github</a></Button>
              <Button colored><a href="https://agile-savannah-42839.herokuapp.com/"  target="blank">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </div>
          <br />


           {/* Project 2 */}
           <div className="col-sm-3 col-md-12">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80) center / cover'}} >Food Website</CardTitle>
            <CardText>
            A website that allows users to choose a meal and it calculates the caalories of the meal.
              <br />
              The languages and technologies that were used are HTML5, CSS3, NODEJS, API'S, SASS AND MYSQL
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/dorothybelle247"  target="blank">Github</a></Button>
              {/* <Button colored>CodePen</Button> */}
              <Button colored><a href="https://mhoobler.github.io/food-project/" target="blank">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </div>

<br />
           {/* Project 3 */}
           <div className="col-sm-3 col-md-12">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://static1.squarespace.com/static/5877f8432e69cf17b666a5f9/t/59a41c6349fc2ba429d7ee00/1510750292011/Paint20Pots.jpg?format=1500w) center / cover'}} >Home Design</CardTitle>
            <CardText>
              An ideabook app that allows users to browse through home ideas, 
              <br />
              The languages that were used are React, HTML, CSS, SASS, MongoGB, mongoose, and sql 
            </CardText>
            <CardActions border>
            <Button colored><a href="https://github.com/dorothybelle247"  target="blank">Github</a></Button>
              {/* <Button colored>CodePen</Button> */}
              
              <Button colored><a href="https://final-project-226.herokuapp.com/"  target="blank">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </div>
          
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }
  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Projects</Tab>
          {/* <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab> */}
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}
export default Projects;