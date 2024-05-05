import { render, screen } from "@testing-library/react";
import FollowersList from "../FollowersList";
import { BrowserRouter } from "react-router-dom";

const MockFollowersListComponent = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {
  it("should render follower items", async () => {
    render(<MockFollowersListComponent />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

/*   it("should render multiple follower items", async () => {
    render(<MockFollowersListComponent />);
    const followerDivElement = await screen.findAllByTestId(/follower-item/i);
    expect(followerDivElement.length).toBe(5);
  }); */
});
