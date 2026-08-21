import { rawProjectsData } from '../data/projectsData.js';
import { normalizeProject } from '../utils/helpers.js';

// Pre-normalize all projects once for instant access
const normalizedProjects = rawProjectsData.map(normalizeProject).filter(Boolean);

/**
 * Fetch paginated project list (Static mode).
 * @param {number} page - Page number (default 1)
 * @param {number} pageSize - Page size (default 12)
 */
export async function getProjects(page = 1, pageSize = 12) {
  const total = normalizedProjects.length;
  const lastPage = Math.ceil(total / pageSize) || 1;
  const start = (page - 1) * pageSize;
  const paginated = normalizedProjects.slice(start, start + pageSize);

  return {
    projects: paginated,
    currentPage: page,
    lastPage,
    total,
  };
}

/**
 * Fetch ALL projects (Static mode).
 */
export async function getAllProjects() {
  return normalizedProjects;
}

/**
 * Fetch a single project by ID or slug.
 * @param {number|string} id
 */
export async function getProjectById(id) {
  if (!id) throw new Error('Project ID is required');
  const found = normalizedProjects.find(
    (p) => String(p.id) === String(id) || p.slug === String(id)
  );
  if (!found) throw new Error('Project not found');
  return found;
}

