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
