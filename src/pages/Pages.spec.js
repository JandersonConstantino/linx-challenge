import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from 'store';

import Home from './Home';

describe('Pages', () => {
  describe('Home', () => {
    it('should be render without errors', () => {
      const { container } = render(
        <Provider store={store}>
          <Home />
        </Provider>
      );

      expect(container.firstChild).toBeDefined();
    });
  });
});
