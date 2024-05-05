import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooterComponent = ({numberOfIncompleteTasks}) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("TodoFooter", () => {
  it("should render the correct amount of incomplete tasks", () => {
    render(<MockTodoFooterComponent numberOfIncompleteTasks={2} />);
    const paragraphElement = screen.getByText(/2 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it("should render 'task' when the number of incomplete tasks is one" , () => {
    render(<MockTodoFooterComponent numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
  });
})


// Poderia ser assim também.

/* it("should render the correct amount of incomplete tasks", () => {
  render(
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={2} />
    </BrowserRouter>
  );
  const paragraphElement = screen.getByText(/2 tasks left/i);
  expect(paragraphElement).toBeInTheDocument();
});
 */
