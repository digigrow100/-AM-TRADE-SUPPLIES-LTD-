export const productCategories = [
  {
    id: "drinks",
    name: "Wholesale Drinks",
    href: "/products-services#drinks",
    lines: ["Soft drinks", "Bottled water", "Juices"],
  },
  {
    id: "oils",
    name: "Wholesale Cooking Oils",
    href: "/products-services#oils",
    lines: ["Rapeseed oil", "Vegetable oil"],
  },
  {
    id: "flour",
    name: "Wholesale Flour",
    href: "/products-services#flour",
    lines: ["Plain flour", "Pizza flour", "Self-raising flour"],
  },
] as const;

export const allProductLines = productCategories.flatMap((c) => c.lines);
