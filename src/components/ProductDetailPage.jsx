import { useEffect, useRef, useState } from 'react';
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
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Tag,
  Truck,
} from 'lucide-react';
import { useProducts } from '../hooks/useData';
import { primaryNumber } from '../constants/constants';
import '../css/product-detail-page.css';

const WhatsappIcon = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 2C6.477 2 2 6.477 2 12c0 2.137.672 4.116 1.817 5.74L2.5 21.5l3.896-1.272A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.954 7.954 0 01-4.225-1.21l-.303-.18-2.316.756.77-2.257-.197-.315A7.958 7.958 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
  </svg>
);

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

function ProductDetailPage({ productId }) {
  const { data: products, loading } = useProducts();
  const product = products?.find((item) => String(item.id) === String(productId));
  const galleryImages = product?.images?.length ? product.images : product?.image ? [product.image] : [];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const relatedProductsRef = useRef(null);
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
  const sameCategoryProducts = (products || []).filter((item) => (
    String(item.id) !== String(productId) && item.category === product?.category
  ));
  const otherCategoryProducts = (products || []).filter((item) => (
    String(item.id) !== String(productId) && item.category !== product?.category
  ));
  const relatedProducts = [...sameCategoryProducts, ...otherCategoryProducts].slice(0, 4);

  const formattedPrice = product?.price != null
    ? `₹${product.price}`
    : 'Price on Request';

  const whatsappMessage = product
    ? `Hello SkyTech, I would like to inquire about this product:
• Product: ${product.name}
• Price: ${formattedPrice}
• Brand: ${product.brand || 'SkyTech'}
${product.condition ? `• Condition: ${product.condition}\n` : ''}
Could you please share availability, warranty details, and best offer?`
    : '';

  const whatsappUrl = `https://wa.me/91${primaryNumber}?text=${encodeURIComponent(whatsappMessage)}`;

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
      <div className="container py-5 mt-5 pt-4 pt-lg-5">
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
            <section className="product-detail-summary">
              {product.brand && (
                <div className="text-uppercase fw-bold text-warning small mb-2">{product.brand}</div>
              )}
              <h1 className="h2 fw-bold text-dark mb-3">{product.name}</h1>
              {product.price != null && (
                <div className="h3 fw-bold text-dark mb-3">₹{Number(product.price).toLocaleString('en-IN')}</div>
              )}
              {product.condition && (
                <div className="mb-3">
                  <span className="badge rounded-pill product-condition-badge">{product.condition}</span>
                </div>
              )}
              {product.description && <p className="text-secondary mb-4">{product.description}</p>}

              {/* Inquiry Action Buttons */}
              <div className="product-detail-actions d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-3 mb-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp-inquiry d-inline-flex align-items-center justify-content-center gap-2"
                >
                  <WhatsappIcon size={22} />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
              {(detailFields.length > 0 || additionalSpecs.length > 0) && (
                <>
                  <h2 className="h5 fw-bold mb-3 border-top pt-4">Product details</h2>
                  <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                    {detailFields.map(([label, value]) => {
                      const IconComponent = detailIcons[label] || Tag;
                      return (
                        <li key={`${product.id}-${label}`} className="d-flex align-items-center gap-3">
                          <IconComponent size={19} className="flex-shrink-0 text-warning" />
                          <span><strong>{label}:</strong> <span className="text-secondary">{value}</span></span>
                        </li>
                      );
                    })}
                    {additionalSpecs.map((spec, index) => {
                      const [label, ...valueParts] = String(spec).split(':');
                      const hasLabel = valueParts.length > 0;

                      return (
                        <li key={`${product.id}-spec-${index}`} className="d-flex align-items-center gap-3">
                          <CircuitBoard size={19} className="flex-shrink-0 text-warning" />
                          <span><strong>{hasLabel ? `${label.trim()}:` : 'Specification:'}</strong>{' '}
                            <span className="text-secondary">{hasLabel ? valueParts.join(':').trim() : spec}</span></span>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </section>
          </div>
        </div>

        <section className="row align-items-center g-4 g-lg-5 product-detail-about mt-5">
          <div className="col-12 col-lg-8">
            <h2 className="h4 fw-bold text-dark mb-3">
              High-Quality Refurbished Laptops, Desktops &amp; Servers
            </h2>
            <p className="mb-0 text-secondary lh-lg">
              At Sky Tech, we offer high-quality refurbished laptops, desktops, workstations, and servers at affordable prices. Each system is thoroughly tested, cleaned, and restored to ensure excellent performance and reliability. Refurbished devices are a smart choice for businesses, students, and professionals who want top-brand systems without the high cost of new equipment. Our refurbished products come with warranty options and technical support, giving you peace of mind. Whether for office use, bulk requirements, or personal computing, our refurbished systems deliver great value and performance. Choose Sky Tech for cost-effective, eco-friendly, and dependable refurbished IT solutions.
            </p>
          </div>
          <div className="col-12 col-lg-4">
            <div className="d-flex align-items-center justify-content-center p-3 rounded-3 bg-light" style={{ minHeight: '230px' }}>
              {galleryImages[activeImageIndex] && (
                <img src={galleryImages[activeImageIndex]} alt={product.name} className="d-block w-100 object-fit-contain" style={{ height: '205px' }} />
              )}
            </div>
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <section className="mt-5 p-3 p-md-4" aria-labelledby="related-products-title">
            <div className="d-flex align-items-center justify-content-between gap-3 mb-4">
              <h2 id="related-products-title" className="h3 fw-bold text-dark mb-0">Related Products</h2>
              <div className="d-flex gap-2">
                <button
                  type="button"
                  className="btn btn-outline-secondary rounded-circle product-related-arrow"
                  aria-label="Scroll related products left"
                  onClick={() => relatedProductsRef.current?.scrollBy({ left: -320, behavior: 'smooth' })}
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary rounded-circle product-related-arrow"
                  aria-label="Scroll related products right"
                  onClick={() => relatedProductsRef.current?.scrollBy({ left: 320, behavior: 'smooth' })}
                >
                  <ChevronRight size={22} />
                </button>
              </div>
            </div>

            <div className="product-related-track" ref={relatedProductsRef}>
              {relatedProducts.map((relatedProduct) => (
                <article className="product-related-card" key={relatedProduct.id}>
                  <div className="d-flex align-items-center justify-content-center p-3 pb-2" style={{ height: '205px' }}>
                    <img src={relatedProduct.image} alt={relatedProduct.name} className="d-block w-100 h-100 rounded-2 object-fit-cover" />
                  </div>
                  <h3 className="product-related-name">{relatedProduct.name}</h3>
                  <div className="d-flex align-items-center justify-content-between gap-2 mt-auto p-3 border-top" style={{ minHeight: '72px' }}>
                    <div>
                      <span className="d-block fw-semibold text-secondary small">Price</span>
                      <span className="fw-bold text-primary">₹{Number(relatedProduct.price).toLocaleString('en-IN')}</span>
                    </div>
                    <a
                      href={`/product/${encodeURIComponent(relatedProduct.id)}`}
                      className="btn btn-sm btn-warning rounded-pill fw-bold text-nowrap px-3 py-1"
                    >
                      View More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default ProductDetailPage;
