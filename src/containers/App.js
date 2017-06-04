import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import MediaGalleryPage from '../containers/MediaGalleryPage';
import PhotoDetail from '../components/PhotoDetail'
import NotFound from '../components/NotFound';
import '../styles/style.css';

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path="/" component={MediaGalleryPage} />
            <Route path='/image/:imageId' component={PhotoDetail}/>
            <Route component={NotFound}/>
          </Switch>
      </div>
    );
  }
}
export default App;
