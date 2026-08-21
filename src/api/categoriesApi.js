import { rawCategoriesData } from '../data/categoriesData.js';

/**
 * Normalize a raw category from the API.
 */
function normalizeCategory(raw) {
  return {
    id: raw.id,
    parentId: raw.parent_id,
    name: raw.name,
    status: raw.status,
    children: (raw.children_recursive || []).map(normalizeCategory),
  };
}

/**
 * Fetch all categories (Static mode).
 * Returns a tree structure with parent categories and their children.
 */
export async function getCategories() {
  return rawCategoriesData.map(normalizeCategory);
}

