import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

// Dieser Test simuliert das Zusammenspiel - die Integration - der UserForm und der UserList beim Hinzufügen eines Users --> Integrationstest

test('receive a new user and show it on the list', async () => {
  render(<App />);

  //! die UserForm
  // Find the two inputs
  const nameInput = screen.getByRole('textbox', {
    name: /name/i,
  });
  const emailInput = screen.getByRole('textbox', {
    name: /email/i,
  });
  const button = screen.getByRole('button');

  // Simulate clicking the input and typing in a name
  await user.click(nameInput);
  await user.keyboard('jane');
  await user.click(emailInput);
  await user.keyboard('jane@jane.com');
  // Simulate clicking the button
  await user.click(button);

  // screen.debug();

  //! die UserList
  // Find the table cells
  const name = screen.getByRole('cell', { name: 'jane' });
  const email = screen.getByRole('cell', { name: 'jane@jane.com' });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
