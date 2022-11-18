import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import spaceHubStore from '../Components/configureSpaceHubStore';
import Rockets from '../Components/Rockets/Rockets';

describe('Rockets snapshot', () => {
  it('should render rockets', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={spaceHubStore}>
          <Router>
            <Rockets />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
