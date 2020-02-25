import React from 'react';
import { render } from '@testing-library/react';

import Sidebar from '.';

describe('Sidebar', () => {
  it('firstChild should be render without errors', () => {
    const { container } = createComponent();
    expect(container.firstChild).toBeDefined();
  });
});

const createComponent = (overrideProps = {}) => {
  const props = {
    ...overrideProps
  };

  return render(<Sidebar {...props} />);
};
