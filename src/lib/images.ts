// Photos live directly in public/images/. These paths match your file names.
const local = (file: string) => `/images/${file}`;

export const photos = {
  aiSeo: local("aiseo.jpg"),
  webDevelopment: local("webdevelopment.jpg"),
  digitalMarketing: local("digitalmarketing.jpg"),
  aiSolutions: local("aisolution.jpg"),
  uiUxDesign: local("uiux.jpg"),
  mobileApps: local("mobileapp.jpg"),
};

// Service cards on the home and services pages
export const servicePhotos: Record<string, string> = {
  "custom-website-development": photos.webDevelopment,
  "seo-services": photos.aiSeo,
  "ecommerce-development": photos.mobileApps,
  "ppc-management": photos.digitalMarketing,
};