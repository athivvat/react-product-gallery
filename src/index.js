import React from 'react';
import ReactDOM from 'react-dom';

import Gallery from './components/Gallery';

let thumbsnails = [
  'https://pc-ap.renttherunway.com/productimages/nomodel/183x/d2/PPR12.jpg',
  'https://pc-ap.renttherunway.com/productimages/front/183x/d2/PPR12.jpg',
  'https://pc-ap.renttherunway.com/productimages/back/183x/d2/PPR12.jpg',
  'https://pc-ap.renttherunway.com/productimages/side/183x/d2/PPR12.jpg'
]

let featured = [
  'https://pc-ap.renttherunway.com/productimages/nomodel/1080x/d2/PPR12.jpg',
  'https://pc-ap.renttherunway.com/productimages/front/1080x/d2/PPR12.jpg',
  'https://pc-ap.renttherunway.com/productimages/back/1080x/d2/PPR12.jpg',
  'https://pc-ap.renttherunway.com/productimages/side/1080x/d2/PPR12.jpg'
]

ReactDOM.render (
  <Gallery
    thumbsnails={thumbsnails}
    featured={featured} />,
  document.getElementById('app')
);
