import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router";
import { CartPage } from "../components/cart/Cart";
import { StateProvider } from "../components/sharedCart";

describe("renders as expected", () => {
  it("displays links", () => {
    render(
      <MemoryRouter>
<StateProvider><CartPage /></StateProvider>        
      </MemoryRouter>
    );
    expect(screen.getAllByRole("link").length).toBeGreaterThan(2);
  });

  it("Displays heading", () => {
    render(
      <MemoryRouter>
<StateProvider><CartPage /></StateProvider>        
      </MemoryRouter>
    );
    expect(screen.getByText(/cart page/i)).toBeInTheDocument();
  });

  it("Displays table", () => {
    render(
      <MemoryRouter>
<StateProvider><CartPage /></StateProvider>        
      </MemoryRouter>
    );
    expect(screen.getByRole("table")).toBeInTheDocument();
  });
});
