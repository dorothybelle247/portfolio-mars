import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer,Content } from 'react-mdl';
import './App.css';
import Main from './components/Main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      
      // <div style={{height: '300px', position: 'relative'}}>
      <Layout fixedHeader>
          {/* <Header className="header-color" title={<span><span style={{ Color: '#E4EE8' }}>Area / </span><strong>The Title</strong></span>}> */}
          <Header className="header-color" title={<span><span style={{ Color: '#E4EE8' }}>  </span><strong> <Link to="/home">  <div className='door' >dorothy</div> </Link></strong></span>}>
              <Navigation>
                  {/* <Link to="/">Home</Link> */}
                  {/* <Link to="/home">  dorothy </Link> */}
                  <Link to="/about">about</Link>
                  <Link to="/projects">projects</Link>
                  <Link to="/contact">contact</Link>
              </Navigation>
          </Header>
          {/* <Drawer title="Title">
              <Navigation>
              <Link to="/about">about</Link>
                  <Link to="/projects">projects</Link>
                  <Link to="/contact">contact</Link>
              </Navigation>
          </Drawer> */}
          <Main />
          <Content />
      </Layout>
  // </div>
    );
  }
}

export default App;
