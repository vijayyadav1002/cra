import { render, screen } from '@testing-library/react';
import App from './App';

test('renders <App/>', () => {
  render(<App />);
  const paragraph = screen.getByRole('paragraph');
  expect(paragraph).toHaveTextContent(
    'Start editing to see some magic happen :)'
  );
});
