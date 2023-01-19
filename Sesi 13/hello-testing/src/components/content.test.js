import { render, screen } from "@testing-library/react";
import Content from "./content";

test("renders halaman home dengan benar", () => {
  render(<Content />);
  const linkElement = screen.getByText(/Why do you we need Test?/i);
  expect(linkElement).toBeInTheDocument();

  const linkElement2 = screen.getByText(
    /To guarantee our code quality. And to show the people that we also care about it and wish to give something that already proven, at least by ourself./i
  );
  expect(linkElement2).toBeInTheDocument();

  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent("Click");
});