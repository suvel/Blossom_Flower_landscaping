export const services = [
  {
    id: 'hard-soft-landscaping',
    name: 'Hard & Soft Landscaping',
    image: '/asserts/img/hard-and-soft-landscaping-cover-img.jpg',
    icon: '/asserts/icon/gardener.png',
    description:
      "Our Company brings your outdoor dreams to life with both the structural beauty of hardscaping and the vibrant life of softscaping.",
  },
  {
    id: 'irrigation-design',
    name: 'Irrigation Design and Execution',
    image: '/asserts/img/irrigation-design-and-execution-cover-img.webp',
    icon: '/asserts/icon/sprinkler.png',
    description:
      "From planning sprinklers to seeing them flourish,We deliver expert irrigation design and flawless execution for your landscape's perfect drink.",
  },
  {
    id: 'swimming-pool',
    name: 'Swimming Pool and Water features',
    image: '/asserts/img/swimming-pool-and-water-fountain-cover-img.webp',
    icon: '/asserts/icon/swimming-pool.png',
    description:
      'Installation of stunning swimming pools and captivating water features, transforming your backyard into an aquatic oasis.',
  },
  {
    id: 'pergolas-shade',
    name: 'Pergolas and Shade structures',
    image: '/asserts/img/pergolas-and-shade-structures-cover-img.webp',
    icon: '/asserts/icon/park.png',
    description:
      'Blossom crafts sun-kissed sanctuaries with elegant pergolas & shade structures, adding both style and comfort to your outdoor haven.',
  },
  {
    id: 'landscaping-solutions',
    name: 'Landscaping Solutions',
    image: '/asserts/img/landscaping-solutions-cover-image.jpg',
    icon: '/asserts/icon/planing.png',
    description:
      'From vibrant gardens to sparkling pools,We design, build, and maintain exquisite landscapes that seamlessly blend functionality and beauty.',
  },
  {
    id: 'landscape-lighting',
    name: 'Landscape Lighting Work',
    image: '/asserts/img/landscape-lighting-work-cover-image.jpg',
    icon: '/asserts/icon/bridge.png',
    description:
      'Transform your landscape into a glittering nighttime paradise with expertly designs and light works.',
  },
];

// Home page only previews the first 3 services.
export const featuredServices = services.slice(0, 3);
