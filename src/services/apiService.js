import {
  siteConfigData,
  marqueeAnnouncementsData,
  slidesData,
  productsData,
  rentalOptionsData,
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
  getSiteConfig: async () => {
    return fetchOrMock('/config', siteConfigData);
  },

  getMarqueeAnnouncements: async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/api/topmarquee`);
      if (response.ok) {
        const result = await response.json();
        if (result && Array.isArray(result.data)) {
          return result.data;
        }
      }
    } catch (error) {
      console.warn('[apiService] Live fetch from /api/topmarquee failed:', error);
    }
    return [];
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

  getRentalOptions: async () => {
    return fetchOrMock('/rental-options', rentalOptionsData);
  },

  estimateTradeInValue: async ({ deviceType, brand, processor, condition, ageYears }) => {
    if (!USE_MOCK_DATA) {
      return fetchOrMock('/estimate-trade-in', null, {
        method: 'POST',
        body: JSON.stringify({ deviceType, brand, processor, condition, ageYears })
      });
    }

    let basePrice = 400;
    if (deviceType === 'laptop') basePrice = 500;
    if (deviceType === 'macbook') basePrice = 850;
    if (deviceType === 'gaming_pc') basePrice = 750;

    const conditionMultiplier = {
      like_new: 1.0,
      good: 0.8,
      fair: 0.6,
      faulty: 0.35
    }[condition] || 0.7;

    const ageDeduction = Math.max(0.3, 1 - (parseInt(ageYears) || 1) * 0.12);
    const estimatedValue = Math.round(basePrice * conditionMultiplier * ageDeduction);

    return {
      success: true,
      estimatedValue,
      currency: '$',
      guaranteeDays: 7
    };
  },

  submitInquiry: async (inquiryData) => {
    if (!USE_MOCK_DATA) {
      return fetchOrMock('/inquiries', null, {
        method: 'POST',
        body: JSON.stringify(inquiryData)
      });
    }

    await new Promise(resolve => setTimeout(resolve, 300));
    return {
      success: true,
      message: 'Inquiry received successfully! Our representative will contact you within 2 business hours.',
      inquiryId: `INQ-${Math.floor(100000 + Math.random() * 900000)}`
    };
  },

  submitOrder: async (orderData) => {
    if (!USE_MOCK_DATA) {
      return fetchOrMock('/orders', null, {
        method: 'POST',
        body: JSON.stringify(orderData)
      });
    }

    await new Promise(resolve => setTimeout(resolve, 400));
    return {
      success: true,
      orderId: `ST-ORD-${Math.floor(100000 + Math.random() * 900000)}`,
      estimatedDelivery: '2-3 Business Days'
    };
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
