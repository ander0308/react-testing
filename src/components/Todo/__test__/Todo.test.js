import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom";

const MockTodoComponent = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (arrayTasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });
  arrayTasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

// Feito teste de integração nessa pagina, onde testamos o funcionamento de dois componentes interagindo entre eles.

describe("Todo", () => {
  it("should render item", () => {
    render(<MockTodoComponent />);
    addTask(["Estudar testes"]);
    const divElement = screen.getByText(/Estudar testes/i);
    expect(divElement).toBeInTheDocument();
  });

  it("should render multiple items", () => {
    render(<MockTodoComponent />);
    addTask([
      "Estudar testes",
      "Fazer um projeto",
      "Descansar final de semana",
    ]);
    const divElements = screen.getAllByTestId("task-container");
    expect(divElements.length).toBe(3);
  });

  it("task should not have completed class when initally rendered", () => {
    render(<MockTodoComponent />);
    addTask(["Estudar testes"]);
    const divElement = screen.getByText(/Estudar testes/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("task should have completed class when clicked", () => {
    render(<MockTodoComponent />);
    addTask(["Estudar testes"]);
    const divElement = screen.getByText(/Estudar testes/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
