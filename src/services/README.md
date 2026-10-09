# Sky Tech - Backend Integration Guide (Dynamic Data Ready)

This codebase has been refactored to be **100% decoupled from hardcoded/static data**. All components fetch data through the API Service abstraction layer (`src/services/apiService.js`) and React custom hooks (`src/hooks/useData.js`).

---

## 🚀 How to Connect Your Live Backend API

### Step 1: Add your API Base URL to Environment Variables
Create or edit your `.env` file in the project root:

```env
VITE_API_URL=https://your-api-domain.com/api/v1
# Set to 'false' when your live API is online
VITE_USE_MOCK_DATA=false
```

### Step 2: REST API Endpoints Specifications

When your backend (Node.js/Express, Python/Django, Laravel, ASP.NET, etc.) is ready, implement the following REST endpoints returning standard JSON:

| Component / Feature | Endpoint Path | Method | Expected Output Format |
|---|---|---|---|
| Site Configuration | `/config` | `GET` | `{ storeName, phone, email, address, workingHours }` |
| Marquee Announcements | `/announcements` | `GET` | `["Announcement 1", "Announcement 2", ...]` |
| Hero Banner Carousel | `/slides` | `GET` | `[{ id, tag, title, subtitle, primaryAction, bgBadge, image, bullets }, ...]` |
| Offerings Categories | `/categories` | `GET` | `[{ id, categoryKey, title, desc, highlights, badge, hash }, ...]` |
| Product Catalog | `/products` | `GET` | `[{ id, category, brand, name, condition, price, originalPrice, rating, reviews, specs, image }, ...]` |
| Services & AMC | `/services` | `GET` | `[{ id, title, desc, specs }, ...]` |
| Systems on Rent | `/rental-options` | `GET` | `[{ id, name, baseMonthly, type }, ...]` |
| Customer Reviews | `/reviews` | `GET` | `[{ id, name, type, rating, date, quote, verified }, ...]` |
| Used Device Trade-In | `/estimate-trade-in` | `POST` | `{ estimatedValue, currency, guaranteeDays }` |
| Submit Inquiry | `/inquiries` | `POST` | `{ success: true, message, inquiryId }` |
| Submit Order | `/orders` | `POST` | `{ success: true, orderId, estimatedDelivery }` |

---

## 🛠️ Architecture Overview

```
               +-----------------------------+
               |      React UI Component     |
               | (ProductCatalog, Hero, etc.)|
               +--------------+--------------+
                              |
                              v
               +-----------------------------+
               |    React Custom Data Hook   |
               |     (`src/hooks/useData.js`)|
               +--------------+--------------+
                              |
                              v
               +-----------------------------+
               |     API Service Adapter     |
               |  (`src/services/apiService.js`)|
               +--------------+--------------+
                              |
             +----------------+----------------+
             |                                 |
             v                                 v
   [ Live Backend API ]              [ Local Mock Store ]
  (if VITE_API_URL set)           (if in dev / fallback)
```

---

## 💡 Benefits
1. **Zero UI code changes** required when plugging in the real backend API.
2. **Automatic Fallback**: If network request fails or API server goes down, the application gracefully falls back to local data store without breaking the user experience.
3. **Async Loaders & Skeletons**: Built-in loading spinners and skeleton state handlers are active while waiting for server responses.
