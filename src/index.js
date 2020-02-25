import React from 'react';
import { render } from 'react-dom';

import 'core/i18n-config';
import 'core/axios-config';
import App from 'core/App';
// import * as serviceWorker from './serviceWorker';

render(<App />, document.getElementById('root'));

// serviceWorker.unregister();
