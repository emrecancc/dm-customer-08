import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../Dashboard';

test('Dashboard renders correctly', () => {
  // Mock the system date to ensure snapshot stability
  jest.useFakeTimers('modern');
  jest.setSystemTime(new Date('2024-01-14'));
  const { container } = render(<Dashboard />);
  expect(container).toMatchSnapshot();
});