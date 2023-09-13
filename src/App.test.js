import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import jest-dom to extend expect

import App from './App'; // Import the component you want to test

describe('App Component', () => {
	it('renders without errors', () => {
		// Render the component
		const { getByText } = render(<App />);

		// Write assertions to test the component's behavior
		// For example, you can check if a specific text or element is present
		expect(getByText('Hello, World!')).toBeInTheDocument();
	});

	// Add more test cases as needed
});
