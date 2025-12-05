import rebarImg from "/src/assets/images/rebar.png"
import timberStrudImg from "/src/assets/productImages/timberStrud.png"
import hollowBlock from "/src/assets/productImages/hollowBlock.png"
import insulationRollImg from "/src/assets/productImages/insulationRoll.png"
import roofingImg from "/src/assets/images/roofing.png"


export const products = [
  {
    name: `Rebar - Grade 60 (1/2" x 20')`,
    description: "Essential for reinforcing concrete in footings and slabs.",
  
    imgSrc: rebarImg,
    imgAlt: "Rebar",
    price: 14.5,
  },
  {
    name: `Standard 8x8x16 Hollow Concrete Block`,
    description: "ASTM C90 compliant. Perfect for structural walls.",
    imgSrc: hollowBlock,
    imgAlt: "Rebar",
    price: 2.85,
  },
  {
    name: `2x4x8 Premium Kiln-Dried Studs`,
    description: "Straight, stable, and ready for framing",
    imgSrc: timberStrudImg,
    imgAlt: "Rebar",
    price: 5.25,
    priceDesc: "$ 5.25 / board",
  },
  {
    name: `R-30 Unfaced Fiberglass Insulation Roll`,
    description: "Covers 31.25 sq. ft. Ideal for attic floors.",
    imgSrc: insulationRollImg,
    imgAlt: "Rebar",
    price: 28.0,
    priceDesc: "$ 28.00 / roll",
  },
  {
    name: `12 ft. Corrugated Galvanized Steel Roof Panel`,
    description:
      "29-gauge steel with zinc coating for superior corrosion resistance. Ideal for pole barns and industrial siding.",
    imgSrc: roofingImg,
    imgAlt: "Rebar",
    price: 32.0,
    priceDesc: "$ 32.00 / sheet",
  },
];
