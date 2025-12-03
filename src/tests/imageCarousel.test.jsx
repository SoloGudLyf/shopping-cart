import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ImageCarousel } from "../components/image-carousel/image-carousel/ImageCarousel";
describe("renders image carousel", () => {
  it("includes an image", () => {
    render(
      <ImageCarousel
        imagesArr={[
          {
            src: "src/components/image-carousel/image-carousel/images/rebar.png",
            alt: "Screenshot",
          },
          {
            src: "src/components/image-carousel/image-carousel/images/timber.png",
            alt: "Screenshot",
          },
          {
            src: "src/components/image-carousel/image-carousel/images/masonry.png",
            alt: "Screenshot",
          },
          {
            src: "src/components/image-carousel/image-carousel/images/roofing.png",
            alt: "screenshot",
          },
        ]}
      />
    );
    screen.debug();
    expect(screen.getAllByRole("img").length).toBe(4);
  });

  it("includes back button", () => {
    render(
      <ImageCarousel
        imagesArr={[
          {
            src: "src/components/image-carousel/image-carousel/images/rebar.png",
            alt: "Screenshot",
          },
          {
            src: "src/components/image-carousel/image-carousel/images/timber.png",
            alt: "Screenshot",
          },
          {
            src: "src/components/image-carousel/image-carousel/images/masonry.png",
            alt: "Screenshot",
          },
          {
            src: "src/components/image-carousel/image-carousel/images/roofing.png",
            alt: "screenshot",
          },
        ]}
      />
    );
    expect(screen.getByRole("back-button")).toBeInTheDocument();
  });
  it("includes forward button", () => {
    render(
      <ImageCarousel
        imagesArr={[
          {
            src: "src/components/image-carousel/image-carousel/images/rebar.png",
            alt: "Screenshot",
          },
          {
            src: "src/components/image-carousel/image-carousel/images/timber.png",
            alt: "Screenshot",
          },
          {
            src: "src/components/image-carousel/image-carousel/images/masonry.png",
            alt: "Screenshot",
          },
          {
            src: "src/components/image-carousel/image-carousel/images/roofing.png",
            alt: "screenshot",
          },
        ]}
      />
    );
    expect(screen.getByRole("forward-button")).toBeInTheDocument();
  });

  it("includes back button", () => {
    render(
      <ImageCarousel
        imagesArr={[
          {
            src: "src/components/image-carousel/image-carousel/images/rebar.png",
            alt: "Screenshot",
          },
          {
            src: "src/components/image-carousel/image-carousel/images/timber.png",
            alt: "Screenshot",
          },
          {
            src: "src/components/image-carousel/image-carousel/images/masonry.png",
            alt: "Screenshot",
          },
          {
            src: "src/components/image-carousel/image-carousel/images/roofing.png",
            alt: "screenshot",
          },
        ]}
      />
    );
    expect(screen.getAllByRole("radio").length).toBe(4);
  });
});
