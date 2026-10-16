// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SketchBranch title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SketchBranch/i);
    expect(titleElement).toBeInTheDocument();
});
