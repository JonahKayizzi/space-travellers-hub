import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import spaceHubStore from '../Components/configureSpaceHubStore';

test('renders the title', () => {
  render(
    <Router>
      <Provider store={spaceHubStore}>
        <App />
      </Provider>
    </Router>,
  );
  expect(screen.getByText('Space Traveller')).toBeInTheDocument();
});
