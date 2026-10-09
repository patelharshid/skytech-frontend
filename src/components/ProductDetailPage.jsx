import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  Box,
  Cable,
  ChevronLeft,
  ChevronRight,
  CircuitBoard,
  Cpu,
  HardDrive,
  Laptop,
  MemoryStick,
  Monitor,
  Tag,
} from 'lucide-react';
import { useProducts } from '../hooks/useData';
import '../css/product-detail-page.css';

const detailIcons = {
  Brand: Tag,
  Series: Box,
  Processor: Cpu,
  Storage: HardDrive,
  RAM: MemoryStick,
  Screen: Monitor,
  Graphic: CircuitBoard,
  OS: Laptop,
  Connection: Cable,
};

function ProductDetailPage({ productId, onAddToCart }) {
  const { data: products, loading } = useProducts();
  const product = products?.find((item) => String(item.id) === String(productId));
  const galleryImages = product?.images?.length ? product.images : product?.image ? [product.image] : [];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const detailFields = [
    ['Brand', product?.brand],
    ['Series', product?.series],
    ['Processor', product?.processor],
    ['Storage', product?.storage],
    ['RAM', product?.ram],
    ['Screen', product?.screen],
    ['Graphic', product?.graphic],
    ['OS', product?.os],
    ['Connection', product?.connection],
  ].filter(([, value]) => value);
  const listedDetailValues = detailFields.map(([, value]) => value);
  const additionalSpecs = (product?.specs || []).filter((spec) => !listedDetailValues.includes(spec));

  useEffect(() => {
    setActiveImageIndex(0);
  }, [productId]);

  if (loading) {
    return (
      <main className="container py-5 text-center">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading product...</span>
        </div>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="container py-5 text-center">
        <h1 className="h3 fw-bold mb-3">Product not found</h1>
        <p className="text-muted mb-4">This product may have been removed from the catalog.</p>
        <a href="/#shop" className="btn btn-warning rounded-pill fw-bold px-4 py-2">
          <ArrowLeft size={16} className="me-2" />Back to products
        </a>
      </main>
    );
  }

  return (
    <main className="bg-white text-dark">
      <div className="container py-4 py-lg-5">
        <a href="/#shop" className="d-inline-flex align-items-center text-decoration-none text-secondary fw-semibold mb-4">
          <ArrowLeft size={18} className="me-2" />Back to products
        </a>

        <div className="row g-4 g-xl-5 align-items-start product-detail-layout">
          <div className="col-12 col-lg-6">
            <div className="position-relative rounded-4 product-detail-gallery">
              {galleryImages.length > 0 ? (
                <img
                  src={galleryImages[activeImageIndex]}
                  alt={`${product.name} view ${activeImageIndex + 1}`}
                  className="d-block w-100 object-fit-contain product-detail-main-image"
                />
              ) : (
                <div className="d-flex align-items-center justify-content-center text-secondary product-detail-main-image">
                  Image unavailable
                </div>
              )}
              {galleryImages.length > 1 && (
                <>
                  <button
                    type="button"
                    className="btn btn-light border rounded-circle position-absolute top-50 start-0 translate-middle-y ms-2 p-2 product-gallery-arrow"
                    aria-label="Previous product image"
                    onClick={() => setActiveImageIndex((index) => (index - 1 + galleryImages.length) % galleryImages.length)}
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    className="btn btn-light border rounded-circle position-absolute top-50 end-0 translate-middle-y me-2 p-2 product-gallery-arrow"
                    aria-label="Next product image"
                    onClick={() => setActiveImageIndex((index) => (index + 1) % galleryImages.length)}
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>
            {galleryImages.length > 0 && (
              <div className="d-flex align-items-center gap-2 mt-3 overflow-auto product-detail-thumbnails">
                {galleryImages.map((image, index) => (
                  <button
                    key={`${product.id}-image-${index}`}
                    type="button"
                    className={`btn border rounded-3 p-1 flex-shrink-0 product-thumbnail ${index === activeImageIndex ? 'active' : ''}`}
                    aria-label={`Show product image ${index + 1}`}
                    aria-pressed={index === activeImageIndex}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <img src={image} alt="" className="object-fit-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="col-12 col-lg-6">
            {(detailFields.length > 0 || additionalSpecs.length > 0) && (
              <section className="product-detail-summary">
                <div className="text-uppercase fw-bold product-detail-brand">{product.brand}</div>
                <h1 className="product-detail-title">{product.name}</h1>
                {product.price != null && (
                  <div className="product-detail-price mb-4">${Number(product.price).toLocaleString()}</div>
                )}
                {product.condition && <div className="mb-4"><span className="badge rounded-pill product-condition-badge">{product.condition}</span></div>}
                {product.description && <p className="text-secondary mb-4">{product.description}</p>}
                <h2 className="h5 fw-bold mb-3">Product details</h2>
                <ul className="list-unstyled d-flex flex-column gap-3 mb-0 product-detail-list">
                  {detailFields.map(([label, value]) => (
                    <li key={`${product.id}-${label}`} className="d-flex align-items-center gap-3">
                      {React.createElement(detailIcons[label] || Tag, { size: 19, className: 'flex-shrink-0 product-detail-icon' })}
                      <span><strong>{label}:</strong> <span className="product-detail-value">{value}</span></span>
                    </li>
                  ))}
                  {additionalSpecs.map((spec, index) => {
                    const [label, ...valueParts] = String(spec).split(':');
                    const hasLabel = valueParts.length > 0;

                    return (
                      <li key={`${product.id}-spec-${index}`} className="d-flex align-items-center gap-3">
                        <CircuitBoard size={19} className="flex-shrink-0 product-detail-icon" />
                        <span><strong>{hasLabel ? `${label.trim()}:` : 'Specification:'}</strong>{' '}
                          <span className="product-detail-value">{hasLabel ? valueParts.join(':').trim() : spec}</span></span>
                      </li>
                    );
                  })}
                </ul>
              </section>
            )}
          </div>
        </div>

        <section className="row align-items-center g-4 g-lg-5 product-detail-about mt-5">
          <div className="col-12 col-lg-8">
            <h2 className="h4 fw-bold product-detail-about-title">
              High-Quality Refurbished Laptops, Desktops &amp; Servers
            </h2>
            <p className="mb-0 product-detail-about-copy">
              At Sky Tech, we offer high-quality refurbished laptops, desktops, workstations, and servers at affordable prices. Each system is thoroughly tested, cleaned, and restored to ensure excellent performance and reliability. Refurbished devices are a smart choice for businesses, students, and professionals who want top-brand systems without the high cost of new equipment. Our refurbished products come with warranty options and technical support, giving you peace of mind. Whether for office use, bulk requirements, or personal computing, our refurbished systems deliver great value and performance. Choose Sky Tech for cost-effective, eco-friendly, and dependable refurbished IT solutions.
            </p>
          </div>
          <div className="col-12 col-lg-4">
            <div className="product-detail-about-image-wrap">
              {galleryImages[activeImageIndex] && (
                <img src={galleryImages[activeImageIndex]} alt={product.name} className="product-detail-about-image" />
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ProductDetailPage;
