/**
 * Normalize a raw project from the API into a clean, consistent shape.
 */
export function normalizeProject(raw) {
  if (!raw) return null;

  const images = getProjectImages(raw);

  return {
    id: raw.id,
    title: raw.project_title || '',
    slug: raw.project_slug || String(raw.id),
    location: raw.project_location || '',
    siteArea: raw.project_site_area || '',
    builtupArea: raw.project_builtup_area || '',
    services: raw.project_services || '',
    quote: raw.project_quote || '',
    summaries: [
      raw.project_summary_1 || '',
      raw.project_summary_2 || '',
      raw.project_summary_3 || '',
    ].filter(Boolean),
    featuredImage: raw.project_featured_image || raw.project_featured_media || images[0] || '',
    images,
    categories: (raw.categories || []).map((c) => ({
      id: c.id,
      name: c.name,
      parentId: c.parent_id,
    })),
    status: raw.status,
    sortOrder: raw.sort_order || [],
    awards: raw.project_awards || [],
    publications: raw.project_publications || [],
    url: raw.project_url || '',
    // Computed
    primaryCategory: getPrimaryCategory(raw),
    year: extractYear(raw),
  };
}

/**
 * Extract non-null image URLs from a project (project_image_1 through project_image_8).
 */
export function getProjectImages(raw) {
  const keys = [
    'project_featured_image',
    'project_image_1',
    'project_image_2',
    'project_image_3',
    'project_image_4',
    'project_image_5',
    'project_image_6',
    'project_image_7',
    'project_image_8',
  ];

  const seen = new Set();
  const imgs = [];

  for (const key of keys) {
    const val = raw[key];
    if (val && typeof val === 'string' && val.trim() !== '' && !seen.has(val)) {
      seen.add(val);
      imgs.push(val);
    }
  }

  return imgs;
}

/**
 * Get a human-readable primary category name for a project.
 */
function getPrimaryCategory(raw) {
  const cats = raw.categories || [];
  // Filter out the "All" category (id 33)
  const filtered = cats.filter((c) => c.id !== 33);
  if (filtered.length === 0) return '';
  // Prefer parent categories (parent_id === 0)
  const parent = filtered.find((c) => c.parent_id === 0);
  return parent ? parent.name : filtered[0]?.name || '';
}

/**
 * Try to extract a year from the project data.
 */
function extractYear(raw) {
  if (raw.created_at) {
    const match = raw.created_at.match(/^(\d{4})/);
    if (match) return match[1];
  }
  return '';
}

/**
 * Strip HTML tags from a string for plain text display.
 */
export function stripHtml(html) {
  if (!html) return '';
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/**
 * Format a number as a display string (e.g. project count).
 */
export function formatCount(n) {
  return String(n).padStart(2, '0');
}

/**
 * Clamp a number between min and max.
 */
export function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}
