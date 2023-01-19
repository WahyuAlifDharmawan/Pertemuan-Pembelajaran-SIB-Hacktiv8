import { render, screen, waitFor } from "@testing-library/react";
import Users from "./users";

test("renders halaman detail dengan benar", async () => {
  render(<Users />);

  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent("Back");

  const comment = await waitFor(
    () => {
      return screen.findByText("Leanne Graham");
    },
    { timeout: 5000 }
  );
  expect(comment).toBeInTheDocument();
});