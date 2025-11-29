# 🎄 Magie de Noël - Site Vitrine

Site vitrine professionnel pour entreprise de décoration de Noël et sapins. Design moderne, responsive et interactif.

> **Note :** Ce projet intègre une automatisation complète avec **n8n** et **Telegram** pour la gestion des leads en temps réel.

## 📋 Table des matières

- [Caractéristiques](#caractéristiques)
- [Structure du projet](#structure-du-projet)
- [Installation](#installation)
- [Fonctionnalités](#fonctionnalités)
- [Personnalisation](#personnalisation)
- [Déploiement](#déploiement)
- [Technologies](#technologies)

## ✨ Caractéristiques

- ✅ Design moderne et festif aux couleurs de Noël
- ✅ 100% responsive (mobile-first)
- ✅ Animations fluides et micro-interactions
- ✅ Compte à rebours dynamique jusqu'à Noël
- ✅ Galerie avec lightbox
- ✅ Carousel de témoignages
- ✅ Formulaire de contact avec validation
- ✅ Effet confettis sur CTA
- ✅ Navigation smooth scroll
- ✅ SEO optimisé avec métadonnées et JSON-LD
- ✅ Performance optimisée (lazy loading images)
- ✅ Accessibilité (ARIA labels, navigation clavier)
- ✅ **Automatisation n8n** : Réception des formulaires et envoi sur Telegram
- ✅ **Détection de langue** : Adaptation automatique (EN/FR) selon la localisation
- ✅ **SEO Technique** : Robots.txt, Sitemap.xml, JSON-LD Schemas

## 📁 Structure du projet

```
magie-de-noel/
├── index.html              # Page d'accueil
├── gallery.html            # Galerie filtrable
├── services.html           # Services et tarifs
├── about.html              # À propos de l'entreprise
├── contact.html            # Formulaire de contact
├── blog.html               # Blog articles
├── README.md               # Documentation
├── assets/
│   ├── css/
│   │   └── style.css       # Styles principaux
│   ├── js/
│   │   └── main.js         # Scripts JavaScript
│   ├── images/
│   │   ├── logo.svg        # Logo entreprise
│   │   ├── hero.jpg        # Image hero
│   │   └── gallery/        # Images galerie
│   └── data/
│       └── products.json   # Données produits
```

## 🚀 Installation

### Méthode 1 : Serveur local simple

**Option A - Python 3:**
```bash
cd magie-de-noel
python -m http.server 8000
```
Puis ouvrir : `http://localhost:8000`

**Option B - Node.js (http-server):**
```bash
npm install -g http-server
cd magie-de-noel
http-server -p 8000
```

**Option C - PHP:**
```bash
cd magie-de-noel
php -S localhost:8000
```

### Méthode 2 : VS Code Live Server

1. Installer l'extension "Live Server" dans VS Code
2. Clic droit sur `index.html`
3. Sélectionner "Open with Live Server"

## 🎯 Fonctionnalités principales

### 1. Compte à rebours Noël

Le compteur s'adapte automatiquement :
- Cible : 25 décembre de l'année en cours à 00:00
- Si Noël est passé, affiche le compte à rebours pour l'année suivante
- Mise à jour chaque seconde
- Format : JJ:HH:MM:SS

```javascript
// Code du compte à rebours (déjà intégré)
function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let christmas = new Date(currentYear, 11, 25, 0, 0, 0);
    
    if (now > christmas) {
        christmas = new Date(currentYear + 1, 11, 25, 0, 0, 0);
    }
    
    const diff = christmas - now;
    // ... calcul et affichage
}
```

### 2. Navigation responsive

- Menu hamburger sur mobile
- Navigation sticky avec blur effect
- Liens avec animation underline au hover

### 3. Animations au scroll

- Sections apparaissent progressivement (fade-in + slide-up)
- Utilise l'Intersection Observer API
- Performance optimisée

### 4. Galerie interactive

- Grid responsive
- Hover effect avec scale + overlay
- Lightbox pour agrandir les images
- Clic en dehors pour fermer

### 5. Carousel témoignages

- Rotation automatique toutes les 5 secondes
- Navigation par points cliquables
- Transition fade élégante

### 6. Effet confettis

- Déclenché sur clic CTA principal
- 50 confettis avec couleurs aléatoires
- 50 confettis avec couleurs aléatoires
- Animation de chute physique

### 7. Automatisation (n8n + Telegram)

Le site est connecté à un workflow n8n pour traiter les formulaires :
1. **Réception** : Le formulaire envoie les données au Webhook n8n
2. **Validation** : n8n vérifie les données (email, téléphone)
3. **Notification** : Un message formaté est envoyé instantanément sur le groupe Telegram de l'équipe
4. **Logs** : Les soumissions sont enregistrées pour suivi

## 🎨 Personnalisation

### Couleurs (variables CSS)

Modifier dans le fichier CSS :

```css
:root {
    --color-primary: #2D5016;      /* Vert sapin */
    --color-secondary: #C41E3A;    /* Rouge Noël */
    --color-accent: #D4AF37;       /* Or */
    --color-ivory: #FFFEF7;        /* Ivoire */
}
```

### Remplacer le logo

1. Créer votre logo SVG ou PNG
2. Remplacer le SVG inline dans le `<header>` de chaque page HTML
3. Ou pointer vers une image : `<img src="assets/images/logo.png" class="logo" alt="Logo">`

### Ajouter des images

**Hero section :**
Remplacer le gradient par une image :
```css
.hero-bg {
    background-image: url('../images/hero.jpg');
    background-size: cover;
    background-position: center;
}
```

**Galerie :**
1. Placer les images dans `assets/images/gallery/`
2. Mettre à jour les `src` des balises `<img>` dans `index.html`
3. Utiliser des images optimisées (format WebP recommandé, max 500Ko)

### Modifier les témoignages

Éditer le HTML dans la section testimonials :
```html
<div class="testimonial">
    <p class="testimonial-text">"Votre témoignage ici..."</p>
    <p class="testimonial-author">— Nom, Ville</p>
</div>
```

### Google Maps (page contact)

Remplacer l'URL embed par votre adresse :
```html
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!VOTRE_CODE_ICI"
    width="100%" 
    height="400" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

## 🌐 Déploiement

### Netlify (Recommandé)

1. Créer un compte sur [netlify.com](https://netlify.com)
2. Glisser-déposer le dossier du projet
3. Site déployé en quelques secondes !
4. URL personnalisée gratuite : `votre-site.netlify.app`

**Ou via Git :**
```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Se connecter
netlify login

# Déployer
netlify deploy --prod
```

### GitHub Pages

1. Créer un repo GitHub
2. Pousser les fichiers
3. Aller dans Settings > Pages
4. Sélectionner la branche `main` et dossier `/root`
5. Site disponible à : `https://username.github.io/repo-name`

### Vercel

```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel
```

### Hébergement traditionnel (FTP)

1. Se connecter via FTP (FileZilla, Cyberduck...)
2. Uploader tous les fichiers dans le dossier `public_html` ou `www`
3. Vérifier les permissions (755 pour dossiers, 644 pour fichiers)

## 🛠 Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : 
  - CSS Variables (custom properties)
  - Flexbox & Grid Layout
  - Animations & Transitions
  - Media Queries (responsive)
- **Vanilla JavaScript** : 
  - Intersection Observer API
  - Date API (countdown)
  - DOM Manipulation
  - Event Listeners
- **Google Fonts** : Playfair Display + Inter
- **Google Fonts** : Playfair Display + Inter
- **SVG** : Logo et icônes vectoriels
- **Automation** : n8n (Workflow automation)
- **Messaging** : Telegram Bot API
- **Hosting** : GitHub Pages

## 📱 Compatibilité navigateurs

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Intégration future

### Formulaire contact (backend)

Le formulaire est prêt pour intégration backend. Exemples :

**FormSpree :**
```html
<form action="https://formspree.io/f/VOTRE_ID" method="POST">
```

**Netlify Forms :**
```html
<form name="contact" method="POST" data-netlify="true">
```

**Backend personnalisé :**
```javascript
const formData = new FormData(form);
fetch('/api/contact', {
    method: 'POST',
    body: formData
});
```

### CMS Integration

Le site peut être facilement intégré à :
- **Netlify CMS** : Gestion de contenu sans backend
- **WordPress** : Convertir en thème custom
- **Strapi** : Headless CMS moderne

### E-commerce

Pour ajouter des fonctionnalités e-commerce :
- **Shopify** : Buy Button API
- **Snipcart** : Panier JavaScript
- **Stripe Checkout** : Paiements directs

## 📊 Données produits (products.json)

Structure exemple :
```json
{
  "products": [
    {
      "id": 1,
      "name": "Sapin Grand Luxe",
      "category": "sapins",
      "price": 299,
      "description": "Sapin naturel 2m avec décoration premium",
      "images": ["sapin1.jpg", "sapin1-2.jpg"],
      "features": ["Installation incluse", "Retrait offert"]
    }
  ]
}
```

## 🎓 Remarques UX

### Points forts du design :

1. **Mobile-first** : Optimisé d'abord pour mobile
2. **Hiérarchie visuelle** : Titres clairs, espacement cohérent
3. **Microinteractions** : Feedback visuel sur toutes les actions
4. **Performance** : Lazy loading, animations GPU
5. **Accessibilité** : Contrastes, navigation clavier, ARIA
6. **Couleurs festives** : Palette Noël chaleureuse et élégante

### Optimisations appliquées :

- Images lazy-loaded
- CSS critical inline (dans `<style>`)
- Animations hardware-accelerated (transform, opacity)
- Debounce sur scroll events
- Minification recommandée pour production

## 📞 Support

Pour toute question sur l'utilisation ou la personnalisation :
- 📧 Email : contact@magiedenoel.fr
- 📱 Téléphone : +33 1 23 45 67 89

## 📄 Licence

© 2024 Magie de Noël. Tous droits réservés.

---

**Bon déploiement ! 🎄✨**