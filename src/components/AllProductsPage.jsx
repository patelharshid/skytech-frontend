import { useState, useMemo, useEffect } from 'react';
import { Search, X, RotateCcw, Package } from 'lucide-react';
import { useProducts } from '../hooks/useData';
import '../css/all-products-page.css';

const categoryLabels = {
  laptops: 'Laptops',
  desktops: 'Desktops & PCs',
  accessories: 'Accessories & Parts'
};

const categoryOptions = [
  { id: 'all', label: 'All Categories' },
  { id: 'laptops', label: 'Laptops' },
  { id: 'desktops', label: 'Desktops & PCs' },
  { id: 'accessories', label: 'Accessories & Parts' }
];

function AllProductsPage() {
  const { data: allProducts, loading } = useProducts();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    const syncFromUrl = () => {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const catParam = params.get('category');
        const searchParam = params.get('search');
        if (catParam) {
          setSelectedCategory(catParam.toLowerCase());
        }
        if (searchParam !== null) {
          setSearchQuery(searchParam);
        }
      }
    };

    syncFromUrl();
    window.addEventListener('popstate', syncFromUrl);
    window.addEventListener('app-location-change', syncFromUrl);

    return () => {
      window.removeEventListener('popstate', syncFromUrl);
      window.removeEventListener('app-location-change', syncFromUrl);
    };
  }, []);

  const filteredProducts = useMemo(() => {
    if (!allProducts || !Array.isArray(allProducts)) return [];

    let list = allProducts.filter((product) => {
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const inName = product.name?.toLowerCase().includes(query);
        const inBrand = product.brand?.toLowerCase().includes(query);
        const inSeries = product.series?.toLowerCase().includes(query);
        const inProcessor = product.processor?.toLowerCase().includes(query);
        const inSpecs = Array.isArray(product.specs) && product.specs.some((s) => s.toLowerCase().includes(query));
        if (!inName && !inBrand && !inSeries && !inProcessor && !inSpecs) {
          return false;
        }
      }

      return true;
    });

    if (sortBy === 'price-low') {
      list.sort((a, b) => Number(a.price || 0) - Number(b.price || 0));
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => Number(b.price || 0) - Number(a.price || 0));
    } else if (sortBy === 'name-asc') {
      list.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    }

    return list;
  }, [allProducts, selectedCategory, searchQuery, sortBy]);

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    searchQuery.trim().length > 0 ||
    sortBy !== 'featured';

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSortBy('featured');
  };

  return (
    <main className="bg-white text-dark min-vh-100 py-4 py-lg-5">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mx-auto mb-4 mb-md-5" style={{ maxWidth: '44rem' }}>
          <h1 className="display-6 fw-bold text-main mt-1">
            All <span className="text-warning">Products</span>
          </h1>
          <p className="text-secondary lead fs-6 mb-0">
            Every device undergoes a 50-point technical inspection and comes with 1-Year Warranty &amp; 30-Day Money Back Guarantee.
          </p>
        </div>

        {/* Filters Toolbar */}
        <div className="bg-surface rounded-4 p-3 p-md-4 mb-4 mb-md-5 border">
          <div className="row g-2 g-md-3 align-items-center">
            {/* Search Input */}
            <div className="col-12 col-md-5 col-lg-5">
              <div className="position-relative">
                <Search
                  size={18}
                  className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
                />
                <input
                  type="text"
                  className="form-control form-control-sm py-2 ps-5 pe-5 rounded-pill bg-white"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="btn btn-sm btn-link position-absolute top-50 end-0 translate-middle-y me-2 text-muted p-0 text-decoration-none"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter */}
            <div className="col-6 col-md-3 col-lg-3">
              <select
                className="form-select form-select-sm rounded-pill py-2 bg-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                aria-label="Filter by Category"
              >
                {categoryOptions.map((c) => (
                  <option key={c.id} value={c.id}>{c.label}</option>
                ))}
              </select>
            </div>

            {/* Sort Filter */}
            <div className="col-6 col-md-2 col-lg-2">
              <select
                className="form-select form-select-sm rounded-pill py-2 bg-white"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort products"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
              </select>
            </div>

            {/* Reset Filter Button */}
            <div className="col-12 col-md-2 col-lg-2">
              <button
                type="button"
                className={`btn btn-sm rounded-pill py-2 w-100 d-inline-flex align-items-center justify-content-center gap-1 fw-bold text-nowrap ${hasActiveFilters
                  ? 'btn-outline-danger'
                  : 'btn-outline-secondary opacity-50'
                  }`}
                onClick={handleResetFilters}
                disabled={!hasActiveFilters}
              >
                <RotateCcw size={14} />
                Reset Filter
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary mx-auto mb-3" role="status">
              <span className="visually-hidden">Loading products...</span>
            </div>
            <p className="text-muted small">Loading certified hardware catalog...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-5 bg-surface rounded-4 border p-4 my-3">
            <div className="mb-3 text-muted">
              <Package size={48} className="opacity-50" />
            </div>
            <h4 className="fw-bold text-main mb-2">No Products Found</h4>
            <p className="text-muted small mb-4" style={{ maxWidth: '400px', margin: '0 auto' }}>
              We couldn't find any products matching your selected criteria. Try adjusting your search query, category, or price range.
            </p>
            <button
              type="button"
              className="btn btn-warning rounded-pill px-4 py-2 fw-bold text-white"
              onClick={handleResetFilters}
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="row g-3 g-md-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="col-6 col-md-4 col-lg-3">
                <div className="sky-card product-catalog-card h-100 d-flex flex-column align-items-start">
                  <div className="w-100 position-relative overflow-hidden rounded-3 mb-2 bg-surface">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-100 object-fit-cover d-block"
                      style={{ height: '170px' }}
                    />
                  </div>
                  {/* Category and Stock Status Row */}
                  <div className="d-flex align-items-center justify-content-between w-100 mb-2 gap-1 flex-wrap">
                    {product.category ? (
                      <span
                        className="badge badge-gold text-uppercase"
                        style={{ fontSize: '0.7rem', letterSpacing: '0.04em' }}
                      >
                        {categoryLabels[product.category] || product.category}
                      </span>
                    ) : <span />}

                    <span
                      className={`badge rounded-pill fw-semibold d-inline-flex align-items-center gap-1 ${product.inStock !== false && product.stock !== 0 && !product.isOutOfStock
                          ? 'bg-success bg-opacity-10 text-success'
                          : 'bg-danger bg-opacity-10 text-danger'
                        }`}
                      style={{ fontSize: '0.7rem' }}
                    >
                      <span
                        className={`rounded-circle ${product.inStock !== false && product.stock !== 0 && !product.isOutOfStock
                            ? 'bg-success'
                            : 'bg-danger'
                          }`}
                        style={{ width: '6px', height: '6px' }}
                      />
                      {product.inStock !== false && product.stock !== 0 && !product.isOutOfStock
                        ? 'In Stock'
                        : 'Out of Stock'}
                    </span>
                  </div>
                  <h3 className="product-card-title mb-2 text-main w-100">{product.name}</h3>
                  <div className="border-top pt-2 pt-sm-3 mt-auto w-100">
                    <div className="product-card-footer">
                      <span className="product-card-price">
                        ₹{Number(product.originalPrice ?? product.price).toLocaleString('en-IN')}
                      </span>
                      <a
                        href={`/product/${encodeURIComponent(product.id)}`}
                        className="btn btn-warning product-card-btn text-white"
                      >
                        View More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default AllProductsPage;
