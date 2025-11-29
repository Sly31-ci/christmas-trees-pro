// ========================================
// GALLERY.JS - Filterable Gallery with Lazy Load
// ========================================

// Configuration
const ITEMS_PER_PAGE = 9;
let currentPage = 1;
let currentFilter = 'all';
let allProducts = [];

// Load data
async function loadProducts() {
    try {
        const response = await fetch('assets/data/products.json');
        const data = await response.json();
        allProducts = data.products;
        renderGallery();
    } catch (error) {
        console.error('Error loading products:', error);
        // Fallback with mock data
        allProducts = generateMockProducts();
        renderGallery();
    }
}

// Generate mock products in case of loading error
function generateMockProducts() {
    const categories = ['trees', 'interior', 'exterior', 'ambiance'];
    const products = [];

    for (let i = 1; i <= 20; i++) {
        const category = categories[Math.floor(Math.random() * categories.length)];
        products.push({
            id: i,
            name: `Product ${i}`,
            category: category,
            price: Math.floor(Math.random() * 500) + 100,
            description: `Description of product ${i}`,
            images: [
                `data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%23${Math.floor(Math.random() * 16777215).toString(16)}' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3EProduct ${i}%3C/text%3E%3C/svg%3E`
            ],
            features: [
                'Feature 1',
                'Feature 2',
                'Feature 3'
            ]
        });
    }

    return products;
}

// Filter products
function filterProducts(filter) {
    currentFilter = filter;
    currentPage = 1;

    // Update filter UI
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        }
    });

    renderGallery();
}

// Get filtered products
function getFilteredProducts() {
    if (currentFilter === 'all') {
        return allProducts;
    }
    return allProducts.filter(product => product.category === currentFilter);
}

// Render gallery
function renderGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    const filteredProducts = getFilteredProducts();
    const startIndex = 0;
    const endIndex = currentPage * ITEMS_PER_PAGE;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);

    // Clear grid
    galleryGrid.innerHTML = '';

    // Add products
    productsToShow.forEach((product, index) => {
        const item = createGalleryItem(product, index);
        galleryGrid.appendChild(item);
    });

    // Handle "Load more" button
    const loadMoreBtn = document.getElementById('loadMore');
    if (loadMoreBtn) {
        if (endIndex >= filteredProducts.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-block';
        }
    }

    // Animate appearance
    setTimeout(() => {
        document.querySelectorAll('.gallery-item').forEach((item, i) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, i * 50);
        });
    }, 10);
}

// Create gallery item
function createGalleryItem(product, index) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.dataset.productId = product.id;
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.5s ease';

    const imageUrl = product.images && product.images[0]
        ? product.images[0]
        : `data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%232D5016' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='%23D4AF37' text-anchor='middle' dominant-baseline='middle'%3E${product.name}%3C/text%3E%3C/svg%3E`;

    // 🔒 SECURITY: Use safe DOM manipulation instead of innerHTML
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = window.SecurityUtils ? window.SecurityUtils.sanitizeText(product.name) : product.name;
    img.loading = 'lazy';

    const infoDiv = document.createElement('div');
    infoDiv.className = 'gallery-item-info';

    const h3 = document.createElement('h3');
    h3.textContent = product.name; // textContent is XSS-safe

    infoDiv.appendChild(h3);
    item.appendChild(img);
    item.appendChild(infoDiv);

    // Add inline styles for info
    const style = document.createElement('style');
    if (!document.getElementById('gallery-item-styles')) {
        style.id = 'gallery-item-styles';
        style.textContent = `
            .gallery-item {
                position: relative;
                overflow: hidden;
            }
            .gallery-item-info {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
                color: white;
                padding: 1.5rem;
                transform: translateY(100%);
                transition: transform 0.3s ease;
            }
            .gallery-item:hover .gallery-item-info {
                transform: translateY(0);
            }
            .gallery-item-info h3 {
                font-size: 1.2rem;
                margin-bottom: 0.5rem;
            }
            /* Price hidden - contact us for a quote */
            /*
            .gallery-item-price {
                font-size: 1.5rem;
                font-weight: 700;
                color: #D4AF37;
                margin: 0;
            }
            */
        `;
        document.head.appendChild(style);
    }

    // Click event
    item.addEventListener('click', () => {
        openProductModal(product);
    });

    return item;
}

// Open product modal
function openProductModal(product) {
    const modal = document.getElementById('productModal');
    if (!modal) return;

    // 🔒 SECURITY: Sanitize product data
    const titleEl = document.getElementById('modalTitle');
    const descEl = document.getElementById('modalDescription');

    if (titleEl) titleEl.textContent = product.name;
    if (descEl) descEl.textContent = product.description;

    // Image or Video
    const modalImage = document.getElementById('modalImage');
    // const modalVideo = document.getElementById('modalVideo');
    // const modalVideoSource = document.getElementById('modalVideoSource');

    if (product.images && product.images.length > 0) {
        // First check for a video in the images array
        // const videoFile = product.images.find(img =>
        //     img.toLowerCase().endsWith('.mp4') || img.toLowerCase().endsWith('.webm')
        // );

        // if (videoFile) {
        //     // Show video
        //     modalImage.style.display = 'none';
        //     modalVideo.style.display = 'block';
        //     modalVideoSource.src = videoFile;
        //     modalVideo.load(); // Reload video
        // } else {
        // Show first image
        // modalVideo.style.display = 'none';
        modalImage.style.display = 'block';
        modalImage.src = product.images[0];
        modalImage.alt = product.name;
        // }
    }

    // Features - 🔒 SECURITY: Sanitize each feature
    const featuresContainer = document.getElementById('modalFeatures');
    if (featuresContainer && product.features) {
        featuresContainer.innerHTML = ''; // Clear first
        product.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = `✓ ${feature}`; // textContent is XSS-safe
            featuresContainer.appendChild(li);
        });
    }

    // Open modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';

        // Stop video if playing
        // const modalVideo = document.getElementById('modalVideo');
        // if (modalVideo) {
        //     modalVideo.pause();
        //     modalVideo.currentTime = 0;
        // }
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Load products
    loadProducts();

    // Filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            filterProducts(btn.dataset.filter);
        });
    });

    // "Load more" button
    const loadMoreBtn = document.getElementById('loadMore');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            currentPage++;
            renderGallery();
        });
    }

    // Modal close
    const modalClose = document.getElementById('modalClose');
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    const modal = document.getElementById('productModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Escape key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // WhatsApp button in modal
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
    whatsappButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const phoneNumber = '17038562590'; // Christmas Tree Pros WhatsApp
            const message = encodeURIComponent('Hello, I would like to know more about this product.');
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        });
    });
});

// Styles for modal (inject if necessary)
if (!document.getElementById('modal-styles')) {
    const modalStyles = document.createElement('style');
    modalStyles.id = 'modal-styles';
    modalStyles.textContent = `
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            z-index: 10000;
            justify-content: center;
            align-items: center;
            padding: 2rem;
        }
        
        .modal-content {
            background: white;
            border-radius: 20px;
            max-width: 1000px;
            width: 100%;
            min-width: 300px;
            max-height: 90vh;
            min-height: 400px;
            overflow-y: auto;
            position: relative;
            display: block;
        }
        
        .modal-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: #C41E3A;
            color: white;
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            font-size: 1.5rem;
            cursor: pointer;
            transition: all 0.3s;
            z-index: 10;
        }
        
        .modal-close:hover {
            background: #8b1528;
            transform: rotate(90deg);
        }
        
        .modal-body {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            padding: 2rem;
        }
        
        .modal-carousel {
            position: relative;
            border-radius: 16px;
            overflow: hidden;
        }
        
        .modal-info {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        
        .modal-info h2 {
            font-family: 'Playfair Display', serif;
            color: #2D5016;
            font-size: 2rem;
        }
        
        /* Price hidden - clients must contact us */
        /*
        .modal-price {
            font-size: 2rem;
            font-weight: 700;
            color: #C41E3A;
        }
        */
        
        .modal-features {
            list-style: none;
            padding: 0;
        }
        
        .modal-features li {
            padding: 0.75rem 0;
            border-bottom: 1px solid #f3f4f6;
            color: #6b7280;
        }
        
        .whatsapp-btn {
            background: #25D366;
            color: white;
        }
        
        .whatsapp-btn:hover {
            background: #128C7E;
        }
        
        @media (max-width: 768px) {
            .modal-body {
                grid-template-columns: 1fr;
            }
            
            .modal-content {
                margin: 1rem;
            }
        }
    `;
    document.head.appendChild(modalStyles);
}

// Export for potential use
window.galleryFunctions = {
    loadProducts,
    filterProducts,
    openProductModal,
    closeModal
};