import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

describe("user account testing", () => {
  it("should render user name", () => {
    // For user name
    const user: User = { id: 1, name: "sam" };
    render(<UserAccount user={user} />);
    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  it("should render a edit button if user is an admin", () => {
    // For user name
    const user: User = { id: 1, name: "sam", isAdmin: true };
    render(<UserAccount user={user} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument;
    expect(button).toHaveTextContent(/edit/i) 

  });

    it("should not render a edit button if user is not an admin", () => {
    // For user name
    const user: User = { id: 1, name: "sam", isAdmin: false };
    render(<UserAccount user={user} />);

    const button = screen.queryByRole ('button');
    expect(button).not.toBeInTheDocument;


  });



});
 