import React from 'react';
import {Router,Route,Link} from 'react-router-dom';
import MediaGalleryPage from '../containers/MediaGalleryPage';
import HomePage from '../components/HomePage';
import NotFound from '../components/NotFound';

const Header = () => (
  <div className="text-center">
    <nav className="navbar navbar-default">
      <Link to="/" activeClassName="active">Home</Link>
      {" | "}
      <Link to="library" activeClassName="active">Library</Link>
    </nav>

    <Route exact path="/" component={HomePage} />
    <Route path="/library" component={MediaGalleryPage} />
    <Route component={NotFound}/>
  </div>
);

export default Header;
