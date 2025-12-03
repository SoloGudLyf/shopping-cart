import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ImageCarousel } from "../components/image-carousel/image-carousel/ImageCarousel";
import userEvent from "@testing-library/user-event";

const imageCarousel = <ImageCarousel
imagesArr={[
  {
    src: "src/components/image-carousel/image-carousel/images/rebar.png",
    alt: "Rebar",
  },
  {
    src: "src/components/image-carousel/image-carousel/images/timber.png",
    alt: "timber",
  },
  {
    src: "src/components/image-carousel/image-carousel/images/masonry.png",
    alt: "masonry",
  },
  {
    src: "src/components/image-carousel/image-carousel/images/roofing.png",
    alt: "roofing-materials",
  },
]}
/>

describe("renders image carousel", () => {
  it("includes an image", () => {
    render(
      
    imageCarousel
    );
    expect(screen.getAllByRole("img").length).toBe(4);
  });

  it("includes back button", () => {
    render(
      imageCarousel
    );
    expect(screen.getByRole("back-button")).toBeInTheDocument();
  });
  it("includes forward button", () => {
    render(
      imageCarousel
    );
    expect(screen.getByRole("forward-button")).toBeInTheDocument();
  });

  it("includes back button", () => {
    render(
      imageCarousel
    );
    expect(screen.getAllByRole("radio").length).toBe(4);
  });
});

describe("navigation elements work as expected", () => {
  it("back button changes element in picture frame", async () => {
    const user = userEvent.setup();
    render(
      imageCarousel
    );
    const currImg = screen.getByRole("picture-frame").innerHTML;

    await user.click(screen.getByRole("back-button"));
    expect(currImg).not.toBe(screen.getByRole("picture-frame").innerHTML)
});
it("forward button changes element in picture frame", async () => {
    const user = userEvent.setup();
    render(
      imageCarousel
    );
    const currImg = screen.getByRole("picture-frame").innerHTML;

    await user.click(screen.getByRole("forward-button"));
    expect(currImg).not.toBe(screen.getByRole("picture-frame").innerHTML)
});

it("radio input changes element in picture frame", async () => {
    const user = userEvent.setup();
    render(
      imageCarousel
    );
    const currImg = screen.getByRole("picture-frame").innerHTML;

    await user.click(screen.getByTestId("2"));
    expect(currImg).not.toBe(screen.getByRole("picture-frame").innerHTML)
});
});
