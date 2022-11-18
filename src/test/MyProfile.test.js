import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import spaceHubStore from '../Components/configureSpaceHubStore';
import MyProfile from '../Components/MyProfile';

describe('MyProfile snapshot', () => {
  test('should render <Header /> correctly', () => {
    const tree = render(
      <Provider store={spaceHubStore}>
        <MyProfile />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
