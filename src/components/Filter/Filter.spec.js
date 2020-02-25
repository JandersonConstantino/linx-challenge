import React from 'react';
// Redux mock
import * as ReactRedux from 'react-redux';
import store from 'store';
// Test
import { render, fireEvent, getByDisplayValue } from '@testing-library/react';
import Filter from '.';

describe('Filter', () => {
  it('should be render without errors', () => {
    const { container } = createComponent();
    expect(container.firstChild).toBeDefined();
  });

  it('useDispatch should not be called when text length is smaller than 1', () => {
    const dispatch = jest.fn();
    const spyOnUseDispatch = jest
      .spyOn(ReactRedux, 'useDispatch')
      .mockReturnValue(dispatch);

    const { getByTestId } = createComponent();
    const element = getByTestId('search-button');
    fireEvent.click(element);

    expect(dispatch).not.toHaveBeenCalled();

    spyOnUseDispatch.mockRestore();
  });

  it('useDispatch should be called when text length is greater than 0', () => {
    const dispatch = jest.fn();
    const value = String(Math.random() ** 3);
    const spyOnUseDispatch = jest
      .spyOn(ReactRedux, 'useDispatch')
      .mockReturnValue(dispatch);

    const event = { target: { value } };

    /// Input change
    const { getByTestId } = createComponent();
    const input = getByTestId('search-input');
    fireEvent.change(input, event);

    // Button Click
    const element = getByTestId('search-button');
    fireEvent.click(element);

    expect(dispatch).toHaveBeenCalledTimes(1);

    spyOnUseDispatch.mockRestore();
  });
});

const createComponent = (overrideProps = {}) => {
  const props = {
    ...overrideProps
  };

  return render(
    <ReactRedux.Provider store={store}>
      <Filter {...props} />
    </ReactRedux.Provider>
  );
};
