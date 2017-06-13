import React from 'react';
import ReactDOM from 'react-dom';
import Test from './component/Hello.jsx';

import './index.scss';

ReactDOM.render(<div className="root">
    <Test />
</div>, document.getElementById('app'));