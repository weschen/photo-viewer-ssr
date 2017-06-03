import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MediaGalleryPage from './containers/MediaGalleryPage';
import App from './containers/App';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';

export default function() {

    return <Route path="/" component={App}>
            <IndexRoute component={HomePage} />
            <Route path="library" component={MediaGalleryPage} />
            <Route path="*" component={NotFound}/>
          </Route>
}

