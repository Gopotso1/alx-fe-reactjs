import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList', () => {
  test('renders the TodoList component', () => {
    render(<TodoList />);
    
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
    
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Build a Todo List/i)).toBeInTheDocument();
    expect(screen.getByText(/Test the Todo List/i)).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const addButton = screen.getByText(/Add Todo/i);
    
   
    fireEvent.click(addButton);
    
  
    expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
  });

  test('toggles a todo item between completed and not completed', () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i);
    
 
    fireEvent.click(todoItem);
    
  
    expect(todoItem).toHaveStyle('text-decoration: line-through');
 
    fireEvent.click(todoItem);
    
   
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i);
    
  
    fireEvent.click(screen.getByText('Delete', { selector: 'button' }));
    

    expect(todoItem).not.toBeInTheDocument();
  });
});
