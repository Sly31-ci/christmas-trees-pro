// ========================================
// GALLERY.JS - Galerie Filtrable avec Lazy Load
// ========================================

// Configuration
const ITEMS_PER_PAGE = 9;
let currentPage = 1;
let currentFilter = 'all';
let allProducts = [];

// Charger les données
async function loadProducts() {
    try {
        const response = await fetch('assets/data/products.json');
        const data = await response.json();
        allProducts = data.products;
        renderGallery();
    } catch (error) {
        console.error('Erreur chargement produits:', error);
        // Fallback avec données simulées
        allProducts = generateMockProducts();
        renderGallery();
    }
}

// Générer des produits simulés en cas d'erreur de chargement
function generateMockProducts() {
    const categories = ['sapins', 'interieur', 'exterieur', 'ambiances'];
    const products = [];

    for (let i = 1; i <= 20; i++) {
        const category = categories[Math.floor(Math.random() * categories.length)];
        products.push({
            id: i,
            name: `Produit ${i}`,
            category: category,
            price: Math.floor(Math.random() * 500) + 100,
            description: `Description du produit ${i}`,
            images: [
                `data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%23${Math.floor(Math.random() * 16777215).toString(16)}' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3EProduit ${i}%3C/text%3E%3C/svg%3E`
            ],
            features: [
                'Caractéristique 1',
                'Caractéristique 2',
                'Caractéristique 3'
            ]
        });
    }

    return products;
}

// Filtrer les produits
function filterProducts(filter) {
    currentFilter = filter;
    currentPage = 1;

    // Mettre à jour l'UI des filtres
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        }
    });

    renderGallery();
}

// Obtenir les produits filtrés
function getFilteredProducts() {
    if (currentFilter === 'all') {
        return allProducts;
    }
    return allProducts.filter(product => product.category === currentFilter);
}

// Render galerie
function renderGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    const filteredProducts = getFilteredProducts();
    const startIndex = 0;
    const endIndex = currentPage * ITEMS_PER_PAGE;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);

    // Vider la grille
    galleryGrid.innerHTML = '';

    // Ajouter les produits
    productsToShow.forEach((product, index) => {
        const item = createGalleryItem(product, index);
        galleryGrid.appendChild(item);
    });

    // Gérer le bouton "Charger plus"
    const loadMoreBtn = document.getElementById('loadMore');
    if (loadMoreBtn) {
        if (endIndex >= filteredProducts.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-block';
        }
    }

    // Animer l'apparition
    setTimeout(() => {
        document.querySelectorAll('.gallery-item').forEach((item, i) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, i * 50);
        });
    }, 10);
}

// Créer un élément de galerie
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

    item.innerHTML = `
        <img src="${imageUrl}" alt="${product.name}" loading="lazy">
        <div class="gallery-item-info">
            <h3>${product.name}</h3>
            <!-- Prix masqué - contactez-nous pour un devis -->
            <!-- <p class="gallery-item-price">${product.price}€</p> -->
        </div>
    `;

    // Ajouter styles inline pour l'info
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
            /* Prix masqué - contactez-nous pour un devis */
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

    // Événement clic
    item.addEventListener('click', () => {
        openProductModal(product);
    });

    return item;
}

// Ouvrir modal produit
function openProductModal(product) {
    const modal = document.getElementById('productModal');
    if (!modal) return;

    // Remplir le modal
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalDescription').textContent = product.description;
    // Prix masqué - les clients doivent nous contacter pour un devis personnalisé
    // document.getElementById('modalPrice').textContent = `À partir de ${product.price}€`;

    // Image ou Vidéo
    const modalImage = document.getElementById('modalImage');
    // const modalVideo = document.getElementById('modalVideo');
    // const modalVideoSource = document.getElementById('modalVideoSource');

    if (product.images && product.images.length > 0) {
        // Chercher d'abord une vidéo dans le tableau d'images
        // const videoFile = product.images.find(img =>
        //     img.toLowerCase().endsWith('.mp4') || img.toLowerCase().endsWith('.webm')
        // );

        // if (videoFile) {
        //     // Afficher la vidéo
        //     modalImage.style.display = 'none';
        //     modalVideo.style.display = 'block';
        //     modalVideoSource.src = videoFile;
        //     modalVideo.load(); // Recharger la vidéo
        // } else {
        // Afficher la première image
        // modalVideo.style.display = 'none';
        modalImage.style.display = 'block';
        modalImage.src = product.images[0];
        modalImage.alt = product.name;
        // }
    }

    // Features
    const featuresContainer = document.getElementById('modalFeatures');
    if (featuresContainer && product.features) {
        featuresContainer.innerHTML = product.features
            .map(feature => `<li>✓ ${feature}</li>`)
            .join('');
    }

    // Ouvrir le modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Fermer modal
function closeModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';

        // Arrêter la vidéo si elle est en cours de lecture
        // const modalVideo = document.getElementById('modalVideo');
        // if (modalVideo) {
        //     modalVideo.pause();
        //     modalVideo.currentTime = 0;
        // }
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Charger les produits
    loadProducts();

    // Filtres
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            filterProducts(btn.dataset.filter);
        });
    });

    // Bouton "Charger plus"
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

    // Escape key pour fermer
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
            const message = encodeURIComponent('Bonjour, je souhaite en savoir plus sur ce produit.');
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        });
    });
});

// Styles pour le modal (injecter si nécessaire)
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
        
        /* Prix masqué - les clients doivent nous contacter */
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

// Export pour utilisation éventuelle
window.galleryFunctions = {
    loadProducts,
    filterProducts,
    openProductModal,
    closeModal
};