import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Homepage } from "../components/Home";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";

describe("renders as expected", () => {
  it("displays links", () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );
    expect(screen.getAllByRole("link").length).toBeGreaterThan(2);
  });

  it("Displays heading", () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );
    expect(screen.getByText(/build/i)).toBeInTheDocument();
  });

  it("Displays image carousel", () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );
    expect(screen.getByAltText("timber")).toBeInTheDocument();
  });
});

describe("page navigation links work", () => {
  it("home link navigates to home page", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );
    await user.click(screen.getByText("Home"));
    expect(screen.getByText("Testimonials")).toBeInTheDocument();
  });

  it("shop link navigates to shopping page", async () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );
 
    const shopLink = screen.getByText('Shop')

    expect(shopLink).toHaveAttribute('href','/shop');
  });
});
