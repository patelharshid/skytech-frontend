import React, { useState } from 'react';
import { Eye, Check, Loader2, ShoppingBag } from 'lucide-react';
import { useProducts } from '../hooks/useData';

const ProductCatalog = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const { data: filteredProducts, loading } = useProducts({
    category: activeCategory,
    brand: selectedBrand,
    search: searchQuery
  });


  return (
    <section id="shop" className="py-6 position-relative">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-5">
          <div className="badge badge-sky mb-2 px-3 py-1">Sky Tech Online Store</div>
          <h2 className="display-6 fw-bold">Explore Certified Laptops, PCs &amp; Accessories</h2>
          <p className="text-muted lead fs-6">
            Every device undergoes a 50-point technical inspection and comes with 1-Year Warranty &amp; 30-Day Money Back Guarantee.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="sky-card p-3 mb-5">
          <div className="row g-3 align-items-center">
            {/* Category Nav Tabs */}
            <div className="col-lg-6">
              <div className="d-flex flex-wrap gap-2">
                {[
                  { id: 'all', label: 'All Products' },
                  { id: 'laptops', label: 'Laptops' },
                  { id: 'desktops', label: 'Desktops & PCs' },
                  { id: 'accessories', label: 'Accessories & Parts' }
                ].map(cat => (
                  <button
                    key={cat.id}
                    className={`btn btn-sm rounded-pill px-3 py-2 fw-semibold ${activeCategory === cat.id ? 'btn-sky-primary' : 'btn-sky-outline'
                      }`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Input & Brand Filter */}
            <div className="col-lg-6">
              <div className="product-search-controls d-flex gap-2">
                <input
                  type="text"
                  className="form-control sky-form-control small"
                  placeholder="Search laptops, GPUs, specs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select
                  className="form-select sky-form-control small"
                  style={{ width: '160px' }}
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                >
                  <option value="all">All Brands</option>
                  <option value="Apple">Apple</option>
                  <option value="Dell">Dell</option>
                  <option value="ASUS">ASUS</option>
                  <option value="Lenovo">Lenovo</option>
                  <option value="Custom PC">Custom PC</option>
                  <option value="Samsung">Samsung</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center py-5">
            <Loader2 className="animate-spin text-primary mx-auto mb-3" size={32} />
            <p className="text-muted small">Loading catalog data from service...</p>
          </div>
        ) : !filteredProducts || filteredProducts.length === 0 ? (
          <div className="text-center py-5 sky-card">
            <p className="text-muted mb-0">No products found matching your search parameters.</p>
          </div>
        ) : (
          <div className="row g-2 g-sm-3 g-md-4">
            {filteredProducts.map(product => (
              <div key={product.id} className="col-6 col-md-4 col-lg-3">
                <div className="product-card sky-card h-100 p-3 d-flex flex-column align-items-start">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-100 rounded-3 object-fit-cover mb-3"
                    style={{ height: '180px' }}
                  />
                  <h3 className="h6 fw-bold mb-3 text-main">{product.name}</h3>
                  <div className="d-flex align-items-center justify-content-between gap-2 border-top pt-3 mt-auto w-100">
                    <span className="fs-6 fw-bold text-primary font-mono text-nowrap">
                      ${product.originalPrice ?? product.price}
                    </span>
                    <button
                      type="button"
                      className="btn btn-warning rounded-pill fw-bold text-dark text-nowrap px-3 py-2"
                      onClick={() => setQuickViewProduct(product)}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content shadow-lg p-3">
              <div className="modal-header border-0 pb-0">
                <span className="badge badge-sky">{quickViewProduct.brand}</span>
                <button type="button" className="btn-close" onClick={() => setQuickViewProduct(null)}></button>
              </div>

              <div className="modal-body">
                <div className="row g-4 align-items-center">
                  <div className="col-md-6">
                    <img
                      src={quickViewProduct.image}
                      alt={quickViewProduct.name}
                      className="w-100 rounded-3 object-fit-cover border"
                      style={{ maxHeight: '280px' }}
                    />
                  </div>

                  <div className="col-md-6">
                    <h4 className="fw-bold mb-2">{quickViewProduct.name}</h4>
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <span className="badge badge-emerald">{quickViewProduct.condition}</span>
                      <span className="text-muted fs-8 font-mono">SKU: ST-89104</span>
                    </div>

                    <div className="fs-3 fw-bold text-primary font-mono mb-3">
                      ${quickViewProduct.originalPrice ?? quickViewProduct.price}
                    </div>

                    <h6 className="fw-bold small mb-2">Technical Specifications:</h6>
                    <ul className="list-unstyled text-muted small mb-4">
                      {quickViewProduct.specs.map((s, idx) => (
                        <li key={idx} className="d-flex align-items-center gap-2 mb-1">
                          <Check size={14} className="text-success" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-sky-primary w-100 d-flex align-items-center justify-content-center gap-2 py-2"
                        onClick={() => {
                          onAddToCart(quickViewProduct);
                          setQuickViewProduct(null);
                        }}
                      >
                        <ShoppingBag size={18} />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductCatalog;
