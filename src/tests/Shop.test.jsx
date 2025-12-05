import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Shop from "../components/shop/Shop";
import { MemoryRouter } from "react-router";
import { StateProvider } from "../components/sharedCart";

describe("renders page correctly", () => {
  it("renders heading", () => {
    render(
      <MemoryRouter>
        {" "}
       <StateProvider><Shop /></StateProvider> 
      </MemoryRouter>
    );
    console.log(screen.getByRole("heading", { name: /shopping/i }));

    expect(
      screen.getByRole("heading", { name: /shopping/i })
    ).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(
      <MemoryRouter>
       <StateProvider><Shop /></StateProvider> 
      </MemoryRouter>
    );
    expect(screen.getAllByRole("link").length).toBeGreaterThan(2);
  });

  it("renders cards", () => {
    render(
      <MemoryRouter>
       <StateProvider><Shop /></StateProvider> 
      </MemoryRouter>
    );
    expect(screen.getAllByRole("card").length).toBeGreaterThan(2);
  });
});
