# Admin Area - Christmas Tree Pros

## 🔐 Accès Sécurisé

Cette zone admin est protégée par plusieurs couches de sécurité:

### 1. Authentification par Mot de Passe

- **URL d'accès**: `https://www.christmastreespros.com/admin/`
- **Mot de passe par défaut**: `ChristmasAdmin2024!`

> ⚠️ **IMPORTANT**: Changez ce mot de passe immédiatement!

Pour changer le mot de passe:
1. Ouvrez le fichier `admin/index.html`
2. Trouvez la ligne: `const ADMIN_PASSWORD = 'ChristmasAdmin2024!';`
3. Remplacez par votre nouveau mot de passe sécurisé
4. Sauvegardez et déployez

### 2. Protection Anti-Brute Force

- Maximum 5 tentatives échouées
- Verrouillage automatique de 15 minutes après 5 échecs
- Compteur de tentatives visible

### 3. Gestion de Session

- Session automatique de 2 heures
- Déconnexion automatique après expiration
- Bouton de déconnexion manuel disponible

### 4. Protection SEO

- Balises `noindex, nofollow` sur toutes les pages admin
- Blocage dans `robots.txt`
- Headers de sécurité configurés

## 📝 Configuration du Webhook n8n

Le formulaire admin envoie les données à un webhook n8n. Pour le configurer:

1. Ouvrez `admin/dashboard.html`
2. Trouvez la ligne: `const WEBHOOK_URL = 'https://your-n8n-instance.com/webhook/admin-client-registration';`
3. Remplacez par votre URL webhook n8n réelle
4. Sauvegardez et déployez

## 🛡️ Sécurité Additionnelle (Optionnel)

### Protection par IP (si hébergement avec .htaccess)

Si votre serveur supporte `.htaccess`, vous pouvez ajouter une whitelist d'IP dans `admin/.htaccess`:

```apache
Order Deny,Allow
Deny from all
Allow from VOTRE.IP.ICI
Allow from IP.EQUIPE.ICI
```

### Recommandations pour la Production

Pour une sécurité maximale en production:

1. **Utilisez un service d'authentification backend** (Auth0, Firebase Auth, etc.)
2. **Hébergez sur une plateforme avec authentification serveur** (Netlify, Vercel avec password protection)
3. **Activez l'authentification à deux facteurs** si disponible
4. **Utilisez HTTPS** (déjà configuré avec GitHub Pages)
5. **Changez le mot de passe régulièrement**

## 📂 Structure des Fichiers

```
admin/
├── index.html          # Page de connexion
├── dashboard.html      # Formulaire admin (protégé)
├── .htaccess          # Headers de sécurité
└── README.md          # Cette documentation
```

## 🚀 Utilisation

1. Accédez à `https://www.christmastreespros.com/admin/`
2. Entrez le mot de passe
3. Vous serez redirigé vers le dashboard
4. Remplissez le formulaire pour enregistrer un client
5. Cliquez sur "Déconnexion" quand vous avez terminé

## ⚠️ Notes de Sécurité

- Le mot de passe est stocké côté client (JavaScript)
- Pour une vraie application de production, utilisez une authentification backend
- Ne partagez jamais le mot de passe par email ou message non sécurisé
- Vérifiez régulièrement les logs d'accès
- Cette solution est adaptée pour GitHub Pages mais limitée en sécurité

## 🔄 Mise à Jour du Mot de Passe

**Mot de passe actuel**: `ChristmasAdmin2024!`

**À faire immédiatement**:
1. Changez ce mot de passe
2. Utilisez un mot de passe fort (12+ caractères, majuscules, minuscules, chiffres, symboles)
3. Ne le stockez que dans un gestionnaire de mots de passe sécurisé
4. Partagez-le uniquement avec les membres autorisés de votre équipe
