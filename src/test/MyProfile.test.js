import { render } from '@testing-library/react';
import React from 'react';

import MyProfile from '../Components/MyProfile';

describe('MyProfile snapshot', () => {
  test('should render <Header /> correctly', () => {
    const tree = render(<MyProfile />);
    expect(tree).toMatchSnapshot();
  });
});
