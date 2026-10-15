import { useProducts } from '../hooks/useData';

const categoryLabels = {
  laptops: 'Laptops',
  desktops: 'Desktops & PCs',
  accessories: 'Accessories & Parts'
};

const ProductCatalog = ({ activeCategory }) => {
  const { data: filteredProducts, loading } = useProducts({
    category: activeCategory
  });


  return (
    <section id="shop" className="py-5 py-lg-6 position-relative bg-white">
      <div className="container py-3">
        {/* Section Header */}
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '44rem' }}>
          <h2 className="display-6 fw-bold text-main mt-1">
            Explore Certified <span className="text-warning">Laptops &amp; PCs</span>
          </h2>
          <p className="text-secondary lead fs-6 mb-0">
            Every device undergoes a 50-point technical inspection and comes with 1-Year Warranty &amp; 30-Day Money Back Guarantee.
          </p>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary mx-auto mb-3" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="text-muted small">Loading catalog data from service...</p>
          </div>
        ) : !filteredProducts || filteredProducts.length === 0 ? (
          <div className="text-center py-5 sky-card">
            <p className="text-muted mb-0">No products found matching your search parameters.</p>
          </div>
        ) : (
          <div className="row g-3 g-md-4">
            {filteredProducts.map(product => (
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
                  {product.category && (
                    <span
                      className="badge badge-gold text-uppercase mb-2"
                      style={{ fontSize: '0.72rem', letterSpacing: '0.04em' }}
                    >
                      {categoryLabels[product.category] || product.category}
                    </span>
                  )}
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

    </section>
  );
};

export default ProductCatalog;
