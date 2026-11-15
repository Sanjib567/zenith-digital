export type Project = {
  name: string;
  image: string;
  url: string;
  service: string;
};

// Images are in public/images/portfolio/. Replace the names and URLs of projects 10 to 17
// with the real client names and live websites.
export const projects: Project[] = [
  { name: "L & P Global Security", image: "/images/portfolio/lp-global-security.jpg", url: "https://www.lpglobalsecurity.com/", service: "Design and Development" },
  { name: "Better Filter", image: "/images/portfolio/better-filter.jpg", url: "https://betterfilter.net/", service: "Design and Development" },
  { name: "Applebee Montessori Academy", image: "/images/portfolio/applebee-montessori.jpg", url: "https://www.applebeemontessori.com/", service: "Design and Development" },
  { name: "Rcub Eventure", image: "/images/portfolio/rcub-eventure.jpg", url: "https://rcubeplanet.com/", service: "Design and Development" },
  { name: "Orthopaedic Supplies", image: "/images/portfolio/orthopaedic-supplies.jpg", url: "https://www.umorthotics.com/", service: "Design and Development" },
  { name: "See4zee", image: "/images/portfolio/see4zee.jpg", url: "https://www.flickr.com/photos/192123020@N06/50932624177/", service: "Design and Development" },
  { name: "100 Cotton", image: "/images/portfolio/100-cotton.jpg", url: "https://cottonworld.net/?srsltid=AYCX9vLR59uLMBn15d8yeYciI-1aKINmMzzlhDl16kvw4-xqjGIRR0rh", service: "Design and Development" },
  { name: "Houghton Dental", image: "/images/portfolio/houghton-dental.jpg", url: "https://www.houghtondental.co.za/", service: "Design and Development" },
  { name: "Piajeh Boutique", image: "/images/portfolio/piajeh.jpg", url: "https://piajehboutique.com/", service: "Design and Development" },

  // Projects 10 to 17: replace the name and url
  { name: "The Occupation of Motherhood", image: "/images/portfolio/port10.jpg", url: "https://mothersintowork.com/", service: "Design and Development" },
  { name: "Nurses On the Move", image: "/images/portfolio/port11.jpg", url: "https://www.nursesonthemove.co.za/", service: "Design and Development" },
  { name: "Kin Therapy & Fitness Ltd", image: "/images/portfolio/port12.jpg", url: "https://kinphysicaltherapy.com/", service: "Design and Development" },
  { name: "Shifters Midlands", image: "/images/portfolio/port13.jpg", url: "https://shiftersmidlands.co.uk/", service: "Design and Development" },
  { name: "The Trek Nepal", image: "/images/portfolio/port14.jpg", url: "https://www.thetreknepal.com/", service: "Design and Development" },
  { name: "QGPU Chemicals", image: "/images/portfolio/port15.jpg", url: "https://www.qgpuchem.com/", service: "Design and Development" },
  { name: "Nomcare", image: "/images/portfolio/port16.jpg", url: "https://nomcare.co.za/", service: "Design and Development" },
  { name: "Heavy Equipments", image: "/images/portfolio/port17.jpg", url: "https://www.atlascopco.com/en-in/itba/industry-solutions/offroad", service: "Design and Development" },
];