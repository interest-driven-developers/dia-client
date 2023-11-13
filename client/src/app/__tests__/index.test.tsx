import { render, screen } from "@testing-library/react";
import Home from "../page";
import "@testing-library/jest-dom";

test("Initial conditions", () => {
  render(<Home />);
  const title = screen.getByRole("heading", { name: /DIA/i });
  const description = screen.getByText(/DIA는 개발자 면접 도우미 입니다./);
  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
});
