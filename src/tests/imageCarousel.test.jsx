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

  it("false to be false", () => {
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
    expect(false).toBe(false);
  });
});
