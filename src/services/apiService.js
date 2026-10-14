import {
  marqueeAnnouncementsData,
  slidesData,
  productsData,
  faqData,
  industriesWeServeData,
  snapshotExcellenceData,
  happyCustomersData
} from '../data/mockData';

const API_BASE_URL = import.meta.env.VITE_API_URL || '';
const USE_MOCK_DATA = !API_BASE_URL || import.meta.env.VITE_USE_MOCK_DATA === 'true';

async function fetchOrMock(endpoint, mockFallback, options = {}) {
  if (USE_MOCK_DATA) {
    await new Promise(resolve => setTimeout(resolve, 80));
    return mockFallback;
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });

    if (!response.ok) {
      throw new Error(`API Request Error [${response.status}]: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.warn(`[apiService] Request to "${endpoint}" failed. Falling back to local mock data:`, error);
    return mockFallback;
  }
}

export const apiService = {

  getMarqueeAnnouncements: async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      if (apiUrl) {
        const response = await fetch(`${apiUrl}/api/topmarquee/getTopMarquee`);
        if (response.ok) {
          const result = await response.json();
          if (result && Array.isArray(result.data)) {
            return result.data;
          }
        }
      }
    } catch (error) {
      console.warn('[apiService] Live fetch from /api/topmarquee failed:', error);
    }
    return marqueeAnnouncementsData || [];
  },

  getHeroSlides: async () => {
    return fetchOrMock('/slides', slidesData);
  },

  getProducts: async ({ category = 'all', brand = 'all', search = '' } = {}) => {
    const allProducts = await fetchOrMock('/products', productsData);

    return allProducts.filter(product => {
      const matchesCategory = category === 'all' || product.category === category;
      const matchesBrand = brand === 'all' || product.brand === brand;
      const matchesSearch = !search ||
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        (product.specs && product.specs.some(s => s.toLowerCase().includes(search.toLowerCase())));

      return matchesCategory && matchesBrand && matchesSearch;
    });
  },



  getFAQ: async () => {
    return fetchOrMock('/faq', faqData);
  },

  getIndustriesWeServe: async () => {
    return fetchOrMock('/industries', industriesWeServeData);
  },

  getSnapshotExcellence: async () => {
    return fetchOrMock('/snapshot', snapshotExcellenceData);
  },

  getHappyCustomers: async () => {
    return fetchOrMock('/happy-customers', happyCustomersData);
  }
};

export default apiService;
