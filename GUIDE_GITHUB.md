# 🚀 Guide de Mise en Ligne sur GitHub

Ce guide vous explique comment mettre votre site **Christmas Tree Pros** en ligne gratuitement avec GitHub Pages.

## Étape 1 : Créer un dépôt sur GitHub

1. Connectez-vous à votre compte [GitHub.com](https://github.com).
2. Cliquez sur le bouton **+** en haut à droite et sélectionnez **New repository** (Nouveau dépôt).
3. Remplissez les champs :
   - **Repository name** : `christmas-trees-pro` (ou le nom de votre choix)
   - **Description** : Site web Christmas Tree Pros
   - **Public/Private** : Choisissez **Public** (nécessaire pour GitHub Pages gratuit)
   - **Ne cochez rien** dans la section "Initialize this repository with..."
4. Cliquez sur **Create repository**.

## Étape 2 : Envoyer votre code (Push)

Une fois le dépôt créé, GitHub vous affiche une page avec des commandes. Vous avez déjà tout préparé sur votre ordinateur.

Ouvrez un terminal dans le dossier de votre projet (ou utilisez celui intégré à votre éditeur) et lancez ces 3 commandes l'une après l'autre :

```bash
git branch -M main
git remote add origin https://github.com/VOTRE_NOM_UTILISATEUR/christmas-trees-pro.git
git push -u origin main
```

> ⚠️ **Important** : Remplacez `VOTRE_NOM_UTILISATEUR` par votre pseudo GitHub et `christmas-trees-pro` par le nom que vous avez choisi si c'est différent.
> Si on vous demande vos identifiants, utilisez votre pseudo et votre mot de passe (ou un Personal Access Token si vous avez l'authentification à deux facteurs).

## Étape 3 : Activer le lien de prévisualisation (GitHub Pages)

1. Sur la page de votre dépôt GitHub, cliquez sur l'onglet **Settings** (Paramètres).
2. Dans le menu de gauche, cliquez sur **Pages**.
3. Sous **Build and deployment** > **Branch** :
   - Sélectionnez **main** dans le menu déroulant (à la place de "None").
   - Assurez-vous que le dossier est sur **/(root)**.
   - Cliquez sur **Save**.

## Étape 4 : Voir votre site !

Attendez environ 1 à 2 minutes. Rafraîchissez la page **Pages**.

Vous verrez un bandeau en haut :
> ✅ **Your site is live at...**

Cliquez sur le lien fourni (ex: `https://votre-pseudo.github.io/christmas-trees-pro/`).

🎉 **Félicitations ! Votre site est maintenant en ligne et accessible à tous !**

---

## Étape 5 : Configurer le Nom de Domaine (Squarespace)

Pour utiliser `christmas-tree-pros.com` au lieu de `github.io` :

### 1. Acheter le domaine
1. Allez sur [Squarespace Domains](https://account.squarespace.com/domains).
2. Recherchez `christmas-tree-pros`.
3. Achetez le domaine (.com recommandé).

### 2. Configurer les DNS (Squarespace)
1. Dans le tableau de bord Squarespace, cliquez sur le domaine.
2. Allez dans **DNS Settings**.
3. Supprimez les enregistrements par défaut (Parking).
4. Ajoutez les enregistrements **A** pour GitHub Pages :
   - Host: `@` -> `185.199.108.153`
   - Host: `@` -> `185.199.109.153`
   - Host: `@` -> `185.199.110.153`
   - Host: `@` -> `185.199.111.153`
5. Ajoutez un enregistrement **CNAME** :
   - Host: `www` -> `VOTRE_PSEUDO.github.io`

### 3. Lier à GitHub
1. Dans votre repo GitHub, allez dans **Settings > Pages**.
2. Sous **Custom domain**, entrez `christmas-tree-pros.com`.
3. Cliquez sur **Save**.
4. Cochez la case **Enforce HTTPS** (peut prendre jusqu'à 24h pour s'activer).

---

## Étape 6 : Connecter l'Automatisation (n8n + Telegram)

Pour recevoir les demandes de contact sur Telegram :

1. **Créer un Bot Telegram** :
   - Parlez à `@BotFather` sur Telegram -> `/newbot`.
   - Récupérez le **Token API**.
   - Ajoutez le bot à votre groupe et récupérez le **Chat ID**.

2. **Configurer n8n** :
   - Importez le fichier `Contact Form Telegram.json` dans votre n8n.
   - Configurez le nœud Telegram avec votre Token et Chat ID.
   - Activez le workflow.
   - Copiez l'URL du Webhook de production.

3. **Mettre à jour le site** :
   - Modifiez `assets/js/form-n8n.js`.
   - Remplacez `N8N_WEBHOOK_URL` par votre nouvelle URL.
   - Faites un commit et push.

---

## 🔄 Mettre à jour le projet après modifications

Chaque fois que vous modifiez votre site (texte, images, couleurs, etc.), vous devez suivre ces étapes pour envoyer les changements sur GitHub et mettre à jour votre site en ligne.

### Workflow de mise à jour en 3 étapes

#### 1️⃣ Vérifier les modifications

Avant de commencer, vérifiez quels fichiers ont été modifiés :

```bash
git status
```

Cette commande vous montrera :
- Les fichiers modifiés (en rouge)
- Les fichiers déjà ajoutés pour le prochain commit (en vert)
- Les nouveaux fichiers non suivis

#### 2️⃣ Ajouter les fichiers modifiés

Vous avez deux options :

**Option A : Ajouter tous les fichiers modifiés** (recommandé si vous voulez tout envoyer)
```bash
git add .
```

**Option B : Ajouter des fichiers spécifiques**
```bash
git add index.html
git add about.html
git add assets/css/style.css
```

#### 3️⃣ Créer un commit (snapshot de vos modifications)

Un commit est comme une "photo" de votre projet à un instant T. Donnez-lui un message descriptif :

```bash
git commit -m "Description de vos modifications"
```

**Exemples de bons messages de commit :**
- `"Update contact information and social media links"`
- `"Add new Christmas tree images to gallery"`
- `"Fix navigation menu on mobile devices"`
- `"Update services pricing"`

#### 4️⃣ Envoyer sur GitHub (Push)

Envoyez vos modifications vers GitHub :

```bash
git push origin main
```

⏱️ Attendez 1-2 minutes, puis votre site sera automatiquement mis à jour !

### 📝 Exemple complet de mise à jour

Imaginons que vous avez modifié les prix dans `services.html` et ajouté une nouvelle image :

```bash
# 1. Vérifier ce qui a changé
git status

# 2. Ajouter tous les fichiers modifiés
git add .

# 3. Créer un commit avec un message clair
git commit -m "Update service prices and add new gallery image"

# 4. Envoyer les modifications
git push origin main
```

✅ C'est fait ! Votre site sera mis à jour dans 1-2 minutes.

### 🔍 Commandes utiles

| Commande | Description |
|----------|-------------|
| `git status` | Voir l'état actuel (fichiers modifiés, ajoutés, etc.) |
| `git log` | Voir l'historique des commits |
| `git log --oneline` | Historique compact (1 ligne par commit) |
| `git diff` | Voir les modifications détaillées avant de commit |
| `git diff nomfichier.html` | Voir les modifs d'un fichier spécifique |

### ⚠️ Problèmes courants

**Problème : "Your branch is behind origin/main"**
```bash
# Récupérer les dernières modifications du serveur
git pull origin main
```

**Problème : Conflit après un pull**
- Ouvrez les fichiers en conflit
- Recherchez les marqueurs `<<<<<<<`, `=======`, `>>>>>>>`
- Choisissez quelle version garder
- Supprimez les marqueurs
- Puis : `git add .`, `git commit -m "Resolve conflict"`, `git push`

**Problème : "Permission denied" lors du push**
- Vérifiez que vous êtes bien connecté à GitHub
- Vérifiez l'URL de votre dépôt : `git remote -v`
- Si nécessaire, utilisez un Personal Access Token au lieu du mot de passe

### 💡 Bonnes pratiques

1. **Faites des commits réguliers** : Ne travaillez pas pendant des heures sans commit. Faites-en un après chaque fonctionnalité ou correction.

2. **Messages de commit clairs** : Écrivez des messages qui expliquent CE QUE vous avez fait, pas COMMENT.
   - ✅ Bon : `"Add contact form validation"`
   - ❌ Mauvais : `"Changed some stuff"`

3. **Testez localement avant de push** : Ouvrez votre site en local (avec Live Server ou équivalent) pour vérifier que tout fonctionne.

4. **Vérifiez avant d'ajouter** : Utilisez `git status` pour voir ce que vous allez envoyer.

5. **Pull avant de push** : Si vous travaillez depuis plusieurs ordinateurs, faites `git pull` avant de commencer à travailler.

### 🚀 Workflow quotidien recommandé

```bash
# Matin : Récupérer les dernières modifications
git pull origin main

# Pendant la journée : Après chaque modification importante
git add .
git commit -m "Description claire de la modification"

# Soir : Envoyer toutes vos modifications
git push origin main
```

---

## 📞 Besoin d'aide ?

- [Documentation Git officielle](https://git-scm.com/doc)
- [Guide GitHub Pages](https://docs.github.com/pages)
- [Tutoriel Git interactif](https://learngitbranching.js.org/)
