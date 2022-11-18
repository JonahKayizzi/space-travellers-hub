import { render } from '@testing-library/react';
import React from 'react';

import Missions from '../Components/Missions';

describe('Missions snapshot', () => {
  test('should render <Header /> correctly', () => {
    render(<Missions />);
    const missions = document.querySelector('.missions-table');
    expect(missions).toBeTruthy();
  });
});
