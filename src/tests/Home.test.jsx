import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Homepage } from "../components/Home";
import { MemoryRouter } from "react-router";

describe("renders as expected", () => {
  it("displays links", () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );
    expect(screen.getAllByRole("link").length).toBeGreaterThan(3);
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
