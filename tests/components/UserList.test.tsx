import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";

describe("UserList testing", () => {
  it("should render no users when the users array is empty", () => {
    render(<UserList users={[]} />);
    expect(screen.getByText(/no user/i)).toBeInTheDocument();
  });

  it("should render a list of users", () => {
    const users: User[] = [
      { id: 1, name: "Sam" },
      { id: 2, name: "John" },
    ];
    render(<UserList users={users} />);

    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href',`/users/${user.id}`);
    });
  });
});
