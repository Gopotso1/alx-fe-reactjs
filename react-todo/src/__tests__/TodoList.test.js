import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders the TodoList component', () => {
  render(<TodoList />);
  expect(screen.getByText('Todo List')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Add a new todo')).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText('Add a new todo'), { target: { value: 'Test Todo' } });
  fireEvent.click(screen.getByText('Add'));
  expect(screen.getByText('Test Todo')).toBeInTheDocument();
});

test('toggles a todo', () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText('Learn React'));
  expect(screen.getByText('Learn React')).toHaveClass('completed');
});

test('deletes a todo', () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText('Delete', { selector: 'button' }));
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
