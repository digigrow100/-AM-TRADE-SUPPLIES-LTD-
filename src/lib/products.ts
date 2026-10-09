export const productCategories = [
  {
    id: "drinks",
    name: "Wholesale Drinks",
    href: "/services#drinks",
    lines: ["Soft drinks", "Bottled water", "Juices"],
  },
  {
    id: "oils",
    name: "Wholesale Cooking Oils",
    href: "/services#oils",
    lines: ["Rapeseed oil", "Vegetable oil"],
  },
  {
    id: "flour",
    name: "Wholesale Flour",
    href: "/services#flour",
    lines: ["Plain flour", "Pizza flour", "Self-raising flour"],
  },
] as const;

export const allProductLines = productCategories.flatMap((c) => c.lines);
