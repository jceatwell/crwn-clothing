import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App Tests', () => {

  test('renders HATS react link', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const linkElement = screen.getByText(/HATS/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Another way of setting the same things', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const linkElement = getByText(/HATS/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });

});

