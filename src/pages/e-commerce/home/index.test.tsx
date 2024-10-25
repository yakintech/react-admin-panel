import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './index';

//Bu test dosyası, Home componentinin render edilip edilmediğini, doğru metni render edip etmediğini ve butona tıklanınca alert fonksiyonunun çalışıp çalışmadığını test eder.

test('renders Home component', () => {
    render(<Home />);
    const headingElement = screen.getByText(/Home Page/i);
    expect(headingElement).toBeInTheDocument();
});

test('renders correct text in Home component', () => {
    render(<Home />);
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toBeInTheDocument();
});

test('button click triggers alert', () => {
    render(<Home />);
    const buttonElement = screen.getByText(/Click me/i);
    
    // Mock the alert function
    window.alert = jest.fn();
    
    fireEvent.click(buttonElement);
    expect(window.alert).toHaveBeenCalledWith('Hello World');
});

test('renders list of names', () => {
    render(<Home />);
    const names = ['John', 'Paul', 'George', 'Ringo'];
    names.forEach(name => {
        const listItem = screen.getByText(name);
        expect(listItem).toBeInTheDocument();
    });

    //name sayısı 0 dan büyük olmalı
    expect(screen.getAllByRole('listitem').length).toBeGreaterThan(0);
});