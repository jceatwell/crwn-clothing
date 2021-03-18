import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store';

describe('App Tests', () => {

  test('renders HATS react link', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const linkElement = screen.getByText(/HATS/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Another way of setting the same things', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const linkElement = getByText(/HATS/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });

});

