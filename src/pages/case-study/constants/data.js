import { cases } from "../../home/constants/data";

// Extract unique categories from cases
const uniqueCategories = [...new Set(cases.map((caseItem) => caseItem.category))];

export const categories = uniqueCategories.map((category, index) => ({
  id: index + 1,
  name: category,
}));

// Create a map for faster lookup
const categoryMap = new Map(
  categories.map((cat) => [cat.name, cat.id])
);

// Transform cases to caseStudies format
export const caseStudies = cases.map((caseItem) => ({
  id: caseItem.id,
  category: caseItem.category,
  category_id: categoryMap.get(caseItem.category) || 1,
  image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  problem: caseItem.problem,
  solution: caseItem.solution,
  outcome: caseItem.outcome,
}));
