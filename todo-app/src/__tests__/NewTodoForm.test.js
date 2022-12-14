import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from '../NewTodoForm';


it("renders without crashing", function() {
    render(<NewTodoForm/>);
})

it("renders without crashing", function() {
    const {asFragment} = render(<NewTodoForm/>);
    expect(asFragment()).toMatchSnapshot();
})

it("runs the add Todo function on form submit", function() {
    const addTodoMock = jest.fn();
    const { getByText } = render(<NewTodoForm addTodo={addTodoMock} />);
    const addTodoButton = getByText("Add Todo");
    fireEvent.click(addTodoButton);
    expect(addTodoMock).toHaveBeenCalled();
  });

