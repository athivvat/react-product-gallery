import React from 'react';
import ReactDOM from 'react-dom';

import Gallery from './components/Gallery';

let thumbsnails = [
  'https://pc-ap.renttherunway.com/productimages/front/183x/93/MNL42.jpg',
  'https://pc-ap.renttherunway.com/productimages/back/183x/93/MNL42.jpg',
  'https://pc-ap.renttherunway.com/productimages/side/183x/93/MNL42.jpg'
]

ReactDOM.render(<Gallery thumbsnails={thumbsnails}/>, document.getElementById('app'));
