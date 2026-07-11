/**
 * Generates a correct asset path compatible with local dev and GitHub Pages.
 * All public/ assets must use this helper.
 */
export const getAssetPath = (path) =>
  `${import.meta.env.BASE_URL}${path}`
