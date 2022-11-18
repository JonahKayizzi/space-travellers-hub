import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import spaceHubStore from '../Components/configureSpaceHubStore';
import Missions from '../Components/Missions';

describe('Missions snapshot', () => {
  test('should render <Header /> correctly', () => {
    render(
      <Provider store={spaceHubStore}>
        <Missions />
      </Provider>,
    );
    const missions = document.querySelector('.missions-table');
    expect(missions).toBeTruthy();
  });
});
