// ================================================
// BLOG.JS - Gestion du modal des articles de blog
// ================================================

// Contenu détaillé des articles
const blogArticles = {
    'choisir-sapin': {
        category: 'Conseils',
        title: 'Comment Choisir le Sapin Parfait ?',
        date: '📅 10 Nov 2024',
        time: '⏱️ 4 min',
        image: "data:image/svg+xml,%3Csvg width='400' height='250' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%23C41E3A' width='400' height='250'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3EChoisir son Sapin%3C/text%3E%3C/svg%3E",
        content: `
            <h3>Introduction</h3>
            <p>Choisir le bon sapin de Noël est une décision importante qui influencera toute votre décoration des fêtes. Que vous optiez pour un sapin naturel ou artificiel, plusieurs critères sont à prendre en compte.</p>
            
            <h3>Les différents types de sapins naturels</h3>
            
            <h4>Le Nordmann</h4>
            <p><strong>Le plus populaire :</strong> Le Nordmann est apprécié pour ses aiguilles douces qui ne piquent pas et sa bonne tenue dans le temps. Il ne perd pratiquement pas ses aiguilles et peut tenir jusqu'à 8 semaines.</p>
            <ul>
                <li>Aiguilles vert foncé brillant</li>
                <li>Branches robustes idéales pour les décorations lourdes</li>
                <li>Odeur légère de résine</li>
                <li>Prix : moyen à élevé</li>
            </ul>
            
            <h4>L'Épicéa</h4>
            <p><strong>Le traditionnel :</strong> L'Épicéa offre le parfum de Noël par excellence avec son odeur intense de résine. C'est le sapin traditionnel par excellence.</p>
            <ul>
                <li>Parfum intense et authentique</li>
                <li>Aiguilles piquantes</li>
                <li>Perd ses aiguilles plus rapidement</li>
                <li>Prix : économique</li>
            </ul>
            
            <h3>Les sapins artificiels</h3>
            <p>Les sapins artificiels ont beaucoup évolué et offrent aujourd'hui un réalisme impressionnant. Ils sont un investissement durable et pratique.</p>
            
            <h4>Avantages</h4>
            <ul>
                <li>Réutilisable pendant 10-15 ans</li>
                <li>Aucun entretien nécessaire</li>
                <li>Pas d'aiguilles qui tombent</li>
                <li>Souvent pré-éclairés</li>
                <li>Choix de tailles et formes variées</li>
            </ul>
            
            <h4>Inconvénients</h4>
            <ul>
                <li>Pas de parfum naturel</li>
                <li>Impact environnemental de la production</li>
                <li>Coût initial plus élevé</li>
            </ul>
            
            <h3>Critères de choix</h3>
            
            <h4>La taille</h4>
            <p>Mesurez votre espace disponible en hauteur et en largeur. N'oubliez pas de prévoir de la place pour l'étoile ou la décoration de sommet (environ 20-30 cm supplémentaires).</p>
            
            <h4>La forme</h4>
            <ul>
                <li><strong>Sapin dense :</strong> Branches fournies, aspect traditionnel</li>
                <li><strong>Sapin aéré :</strong> Branches espacées, style moderne</li>
                <li><strong>Sapin étroit :</strong> Idéal pour les petits espaces</li>
            </ul>
            
            <h4>Le budget</h4>
            <p>Les prix varient considérablement selon le type, la taille et la qualité. Comptez entre 20€ et 80€ pour un sapin naturel, et entre 50€ et 500€ pour un artificiel de qualité.</p>
            
            <h3>Conseils d'entretien</h3>
            <p>Pour un sapin naturel :</p>
            <ul>
                <li>Coupez 2-3 cm du tronc avant de le mettre en eau</li>
                <li>Maintenez le pied dans l'eau en permanence</li>
                <li>Placez-le loin des sources de chaleur</li>
                <li>Vaporisez les branches tous les 2-3 jours</li>
            </ul>
            
            <h3>Conclusion</h3>
            <p>Le choix du sapin parfait dépend de vos priorités : authenticité et parfum pour le naturel, praticité et durabilité pour l'artificiel. Chez Christmas Tree Pros, nous vous accompagnons dans votre choix et proposons une large sélection de sapins de qualité.</p>
        `
    },
    'diy-decorations': {
        category: 'DIY',
        title: '5 Décorations DIY Faciles à Réaliser',
        date: '📅 5 Nov 2024',
        time: '⏱️ 6 min',
        image: "data:image/svg+xml,%3Csvg width='400' height='250' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%23D4AF37' width='400' height='250'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3EDIY Décorations%3C/text%3E%3C/svg%3E",
        content: `
            <h3>Introduction</h3>
            <p>Créer ses propres décorations de Noël est une activité gratifiante qui permet de personnaliser votre intérieur tout en passant un moment convivial en famille. Voici 5 idées DIY faciles et économiques.</p>
            
            <h3>1. Couronne de porte naturelle</h3>
            <h4>Matériel nécessaire</h4>
            <ul>
                <li>Cercle en métal ou osier (30-40 cm)</li>
                <li>Branches de sapin ou eucalyptus</li>
                <li>Fil de fer fin</li>
                <li>Ruban décoratif</li>
                <li>Pommes de pin, baies, oranges séchées</li>
            </ul>
            
            <h4>Réalisation</h4>
            <p>Fixez les branches sur le cercle avec le fil de fer en les superposant pour créer du volume. Ajoutez ensuite les éléments décoratifs et terminez par un joli nœud en ruban. Temps de réalisation : 30 minutes.</p>
            
            <h3>2. Boules de Noël personnalisées</h3>
            <h4>Matériel nécessaire</h4>
            <ul>
                <li>Boules transparentes en plastique</li>
                <li>Peinture acrylique ou paillettes</li>
                <li>Petits éléments décoratifs (plumes, confettis)</li>
                <li>Colle</li>
            </ul>
            
            <h4>Réalisation</h4>
            <p>Ouvrez les boules et remplissez-les de paillettes, peinture ou petits éléments. Vous pouvez aussi peindre l'extérieur avec des motifs personnalisés. Laissez sécher et accrochez avec un joli ruban.</p>
            
            <h3>3. Centre de table lumineux</h3>
            <h4>Matériel nécessaire</h4>
            <ul>
                <li>Plateau ou planche en bois</li>
                <li>Bougies LED</li>
                <li>Branches de sapin</li>
                <li>Pommes de pin dorées</li>
                <li>Petites boules de Noël</li>
            </ul>
            
            <h4>Réalisation</h4>
            <p>Disposez harmonieusement les éléments sur le plateau en créant différents niveaux. Ajoutez les bougies LED pour un effet chaleureux et sécurisé. Parfait pour la table de fête !</p>
            
            <h3>4. Guirlande en papier</h3>
            <h4>Matériel nécessaire</h4>
            <ul>
                <li>Papier cartonné coloré</li>
                <li>Ciseaux ou perforatrice décorative</li>
                <li>Ficelle ou ruban</li>
                <li>Colle</li>
            </ul>
            
            <h4>Réalisation</h4>
            <p>Découpez des formes (étoiles, sapins, flocons) dans le papier. Pliez-les légèrement pour donner du relief et enfilez-les sur la ficelle. Une activité parfaite à faire avec les enfants !</p>
            
            <h3>5. Photophores enneigés</h3>
            <h4>Matériel nécessaire</h4>
            <ul>
                <li>Pots en verre (type confiture)</li>
                <li>Colle blanche</li>
                <li>Sel d'Epsom ou sucre</li>
                <li>Bougies chauffe-plat</li>
                <li>Ruban décoratif</li>
            </ul>
            
            <h4>Réalisation</h4>
            <p>Badigeonnez l'extérieur du pot de colle, puis roulez-le dans le sel pour créer un effet neige. Laissez sécher, ajoutez un ruban et placez une bougie à l'intérieur. Magique !</p>
            
            <h3>Conseils pratiques</h3>
            <ul>
                <li>Prévoyez un espace de travail protégé</li>
                <li>Impliquez toute la famille dans les créations</li>
                <li>Récupérez des matériaux naturels lors de vos promenades</li>
                <li>Conservez vos créations d'une année sur l'autre</li>
            </ul>
            
            <h3>Conclusion</h3>
            <p>Ces décorations DIY apportent une touche personnelle et chaleureuse à votre décoration de Noël. N'hésitez pas à nous contacter pour plus d'idées et de conseils personnalisés !</p>
        `
    },
    'eclairage-exterieur': {
        category: 'Guide',
        title: 'Guide Éclairage Extérieur de Noël',
        date: '📅 1 Nov 2024',
        time: '⏱️ 7 min',
        image: "data:image/svg+xml,%3Csvg width='400' height='250' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%232D5016' width='400' height='250'/%3E%3Ctext x='50%25' y='50%25' font-size='18' fill='%23D4AF37' text-anchor='middle' dominant-baseline='middle'%3EÉclairage Extérieur%3C/text%3E%3C/svg%3E",
        content: `
            <h3>Introduction</h3>
            <p>L'éclairage extérieur transforme votre maison en véritable féerie de Noël. Découvrez comment créer une installation sécurisée, esthétique et économique.</p>
            
            <h3>Types de guirlandes lumineuses</h3>
            
            <h4>Guirlandes LED</h4>
            <p><strong>Le choix recommandé :</strong> Les LED consomment 80% d'énergie en moins que les ampoules traditionnelles et durent jusqu'à 10 fois plus longtemps.</p>
            <ul>
                <li>Consommation très faible</li>
                <li>Durée de vie exceptionnelle (50 000 heures)</li>
                <li>Peu de chaleur dégagée</li>
                <li>Résistantes aux chocs</li>
                <li>Disponibles en blanc chaud, froid ou multicolore</li>
            </ul>
            
            <h4>Guirlandes solaires</h4>
            <p>Parfaites pour les zones sans prise électrique. Elles se rechargent le jour et s'allument automatiquement à la tombée de la nuit.</p>
            
            <h4>Projecteurs LED</h4>
            <p>Idéaux pour illuminer la façade, les arbres ou créer des effets spéciaux (flocons de neige, étoiles).</p>
            
            <h3>Planification de l'installation</h3>
            
            <h4>Mesurer et calculer</h4>
            <ul>
                <li>Mesurez les zones à décorer (toiture, fenêtres, arbres)</li>
                <li>Ajoutez 10-15% de marge pour les raccords</li>
                <li>Vérifiez la longueur maximale de chaînage (généralement 3-5 guirlandes)</li>
                <li>Calculez la puissance totale nécessaire</li>
            </ul>
            
            <h4>Choisir les couleurs</h4>
            <ul>
                <li><strong>Blanc chaud :</strong> Élégant et traditionnel</li>
                <li><strong>Blanc froid :</strong> Moderne et éclatant</li>
                <li><strong>Multicolore :</strong> Festif et joyeux</li>
                <li><strong>Monocouleur :</strong> Sobre et raffiné</li>
            </ul>
            
            <h3>Installation sécurisée</h3>
            
            <h4>Règles de sécurité essentielles</h4>
            <ul>
                <li>Utilisez uniquement des guirlandes certifiées pour l'extérieur (IP44 minimum)</li>
                <li>Vérifiez l'état des câbles avant installation</li>
                <li>Ne surchargez pas les prises (max 1500W par prise)</li>
                <li>Utilisez un disjoncteur différentiel</li>
                <li>Installez par temps sec</li>
                <li>Débranchez en cas d'orage</li>
            </ul>
            
            <h4>Techniques de fixation</h4>
            <ul>
                <li><strong>Crochets adhésifs :</strong> Pour les surfaces lisses, sans perçage</li>
                <li><strong>Clips pour gouttières :</strong> Fixation facile et discrète</li>
                <li><strong>Piquets de sol :</strong> Pour les jardins et allées</li>
                <li><strong>Serre-câbles :</strong> Pour attacher aux arbres sans les abîmer</li>
            </ul>
            
            <h3>Idées de décoration</h3>
            
            <h4>La façade</h4>
            <p>Soulignez les contours de votre maison avec des guirlandes le long de la toiture et autour des fenêtres. Créez un point focal avec un motif lumineux sur la porte d'entrée.</p>
            
            <h4>Les arbres</h4>
            <p>Enroulez les guirlandes en spirale autour du tronc et des branches principales. Pour un effet spectaculaire, utilisez des filets lumineux.</p>
            
            <h4>L'allée</h4>
            <p>Balisez le chemin avec des lanternes solaires ou des piquets lumineux. Créez une arche lumineuse à l'entrée.</p>
            
            <h3>Consommation et économies</h3>
            
            <h4>Calcul de consommation</h4>
            <p>Une guirlande LED de 10m consomme environ 5W, soit 0,005 kWh. Pour 6 heures d'utilisation quotidienne pendant 30 jours :</p>
            <ul>
                <li>Consommation : 0,9 kWh</li>
                <li>Coût : environ 0,15€ par mois</li>
            </ul>
            
            <h4>Astuces pour économiser</h4>
            <ul>
                <li>Utilisez un programmateur pour allumer/éteindre automatiquement</li>
                <li>Privilégiez les LED</li>
                <li>Limitez les heures d'éclairage (18h-23h par exemple)</li>
                <li>Optez pour des guirlandes solaires quand c'est possible</li>
            </ul>
            
            <h3>Entretien et stockage</h3>
            <ul>
                <li>Démontez par temps sec</li>
                <li>Nettoyez délicatement avec un chiffon humide</li>
                <li>Enroulez soigneusement autour d'un support</li>
                <li>Rangez dans un endroit sec et tempéré</li>
                <li>Étiquetez les boîtes pour faciliter l'installation l'année suivante</li>
            </ul>
            
            <h3>Conclusion</h3>
            <p>Un éclairage extérieur réussi combine esthétique, sécurité et économie d'énergie. Notre équipe peut vous accompagner dans la conception et l'installation de votre décoration lumineuse.</p>
        `
    },
    'noel-eco': {
        category: 'Écologie',
        title: 'Un Noël Éco-Responsable',
        date: '📅 28 Oct 2024',
        time: '⏱️ 5 min',
        image: "data:image/svg+xml,%3Csvg width='400' height='250' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%23C41E3A' width='400' height='250'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3ENoël Éco-Responsable%3C/text%3E%3C/svg%3E",
        content: `
            <h3>Introduction</h3>
            <p>Célébrer Noël tout en respectant l'environnement, c'est possible ! Découvrez nos conseils pour des fêtes magiques et responsables.</p>
            
            <h3>Le choix du sapin</h3>
            
            <h4>Sapin naturel local</h4>
            <p><strong>L'option la plus écologique :</strong> Un sapin naturel cultivé localement a un bilan carbone bien meilleur qu'un artificiel.</p>
            <ul>
                <li>Privilégiez les producteurs locaux (circuit court)</li>
                <li>Choisissez un sapin en pot pour le replanter</li>
                <li>Recyclez votre sapin après les fêtes (compost, paillage)</li>
                <li>Certains sapins peuvent être loués puis replantés</li>
            </ul>
            
            <h4>Sapin artificiel durable</h4>
            <p>Si vous optez pour l'artificiel, conservez-le au minimum 10 ans pour amortir son impact environnemental.</p>
            
            <h3>Décorations durables</h3>
            
            <h4>Matériaux naturels</h4>
            <ul>
                <li>Pommes de pin ramassées en forêt</li>
                <li>Branches de sapin ou houx</li>
                <li>Oranges séchées</li>
                <li>Bâtons de cannelle</li>
                <li>Noix et noisettes dorées</li>
            </ul>
            
            <h4>Décorations faites maison</h4>
            <p>Créez vos décorations avec des matériaux recyclés : papier, carton, tissu. C'est écologique et créatif !</p>
            
            <h4>Achats responsables</h4>
            <ul>
                <li>Privilégiez la qualité à la quantité</li>
                <li>Choisissez des décorations durables et intemporelles</li>
                <li>Achetez d'occasion ou échangez avec vos proches</li>
                <li>Évitez les paillettes plastiques</li>
            </ul>
            
            <h3>Éclairage économe</h3>
            
            <h4>LED basse consommation</h4>
            <p>Les guirlandes LED consomment jusqu'à 80% d'énergie en moins que les ampoules traditionnelles.</p>
            
            <h4>Programmation intelligente</h4>
            <ul>
                <li>Utilisez un programmateur</li>
                <li>Limitez les heures d'éclairage (18h-23h)</li>
                <li>Éteignez quand vous n'êtes pas là</li>
            </ul>
            
            <h4>Alternatives solaires</h4>
            <p>Pour l'extérieur, optez pour des guirlandes solaires qui ne consomment aucune électricité.</p>
            
            <h3>Emballages cadeaux écologiques</h3>
            
            <h4>Alternatives au papier cadeau</h4>
            <ul>
                <li><strong>Furoshiki :</strong> Technique japonaise d'emballage en tissu réutilisable</li>
                <li><strong>Papier kraft :</strong> Recyclable et recyclé, personnalisable</li>
                <li><strong>Journaux :</strong> Créatifs et gratuits</li>
                <li><strong>Boîtes réutilisables :</strong> Jolies et durables</li>
            </ul>
            
            <h4>Décorations naturelles</h4>
            <p>Remplacez les rubans synthétiques par de la ficelle, des branches de sapin ou du raphia naturel.</p>
            
            <h3>Table de fête responsable</h3>
            
            <h4>Vaisselle réutilisable</h4>
            <p>Évitez le jetable ! Utilisez votre belle vaisselle ou louez-en si nécessaire.</p>
            
            <h4>Menu local et de saison</h4>
            <ul>
                <li>Privilégiez les produits locaux</li>
                <li>Choisissez des fruits et légumes de saison</li>
                <li>Réduisez la viande au profit de plats végétariens</li>
                <li>Évitez le gaspillage alimentaire</li>
            </ul>
            
            <h4>Décorations comestibles</h4>
            <p>Utilisez des fruits, des noix et des herbes aromatiques pour décorer votre table. Zéro déchet !</p>
            
            <h3>Gestion des déchets</h3>
            
            <h4>Tri sélectif</h4>
            <ul>
                <li>Prévoyez plusieurs poubelles de tri</li>
                <li>Recyclez le papier cadeau non plastifié</li>
                <li>Compostez les déchets organiques</li>
            </ul>
            
            <h4>Recyclage du sapin</h4>
            <p>Renseignez-vous sur les points de collecte de votre commune. Les sapins sont souvent transformés en compost ou paillage.</p>
            
            <h3>Cadeaux responsables</h3>
            <ul>
                <li>Offrez des expériences plutôt que des objets</li>
                <li>Privilégiez les cadeaux durables et de qualité</li>
                <li>Soutenez les artisans locaux</li>
                <li>Optez pour des cadeaux immatériels (cours, abonnements)</li>
            </ul>
            
            <h3>Conclusion</h3>
            <p>Un Noël éco-responsable n'est pas moins magique, au contraire ! Ces petits gestes contribuent à préserver notre planète pour les générations futures. Contactez-nous pour découvrir notre gamme de décorations écologiques.</p>
        `
    },
    'table-fete': {
        category: 'Inspiration',
        title: 'Dresser une Table de Noël Élégante',
        date: '📅 22 Oct 2024',
        time: '⏱️ 4 min',
        image: "data:image/svg+xml,%3Csvg width='400' height='250' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%23D4AF37' width='400' height='250'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='%231a1a1a' text-anchor='middle' dominant-baseline='middle'%3ETable de Fête%3C/text%3E%3C/svg%3E",
        content: `
            <h3>Introduction</h3>
            <p>La table de Noël est le cœur de la fête. Découvrez comment créer une décoration de table élégante qui impressionnera vos convives.</p>
            
            <h3>Choisir un thème</h3>
            
            <h4>Traditionnel rouge et or</h4>
            <p>Le grand classique indémodable qui évoque immédiatement Noël. Associez nappes rouges, serviettes dorées et décorations scintillantes.</p>
            
            <h4>Élégance blanc et argent</h4>
            <p>Pour une ambiance raffinée et hivernale. Parfait pour un dîner sophistiqué.</p>
            
            <h4>Naturel et rustique</h4>
            <p>Tons verts, bruns et beiges avec des éléments naturels (bois, pommes de pin, branches). Chaleureux et authentique.</p>
            
            <h4>Moderne et minimaliste</h4>
            <p>Palette épurée avec touches de couleur. Lignes simples et élégantes.</p>
            
            <h3>La base : nappe et chemin de table</h3>
            
            <h4>Choix de la nappe</h4>
            <ul>
                <li><strong>Lin ou coton :</strong> Élégant et naturel</li>
                <li><strong>Couleur unie :</strong> Crée une base neutre pour les décorations</li>
                <li><strong>Motifs discrets :</strong> Flocons, étoiles subtiles</li>
            </ul>
            
            <h4>Chemin de table</h4>
            <p>Ajoutez un chemin de table contrastant pour structurer l'espace. Vous pouvez aussi utiliser des branches de sapin ou d'eucalyptus.</p>
            
            <h3>Vaisselle et couverts</h3>
            
            <h4>Assiettes</h4>
            <p>Superposez différentes tailles pour créer du relief :</p>
            <ul>
                <li>Assiette de présentation (grande)</li>
                <li>Assiette plate</li>
                <li>Assiette à dessert ou bol à soupe</li>
            </ul>
            
            <h4>Verres</h4>
            <p>Prévoyez au minimum :</p>
            <ul>
                <li>Verre à eau</li>
                <li>Verre à vin rouge</li>
                <li>Verre à vin blanc ou coupe à champagne</li>
            </ul>
            
            <h4>Couverts</h4>
            <p>Disposez-les dans l'ordre d'utilisation, de l'extérieur vers l'intérieur. Ajoutez une touche festive avec un ruban doré.</p>
            
            <h3>Centre de table spectaculaire</h3>
            
            <h4>Composition florale</h4>
            <ul>
                <li>Roses blanches ou rouges</li>
                <li>Branches de sapin</li>
                <li>Eucalyptus</li>
                <li>Baies rouges</li>
                <li>Pommes de pin dorées</li>
            </ul>
            
            <h4>Bougies</h4>
            <p><strong>Élément essentiel :</strong> Les bougies créent une ambiance chaleureuse et romantique.</p>
            <ul>
                <li>Variez les hauteurs</li>
                <li>Utilisez des bougeoirs élégants</li>
                <li>Privilégiez les bougies LED pour la sécurité</li>
                <li>Disposez-les en nombre impair</li>
            </ul>
            
            <h4>Éléments décoratifs</h4>
            <ul>
                <li>Boules de Noël disposées harmonieusement</li>
                <li>Petites figurines (rennes, anges)</li>
                <li>Étoiles scintillantes</li>
                <li>Oranges séchées</li>
            </ul>
            
            <h3>Marque-places personnalisés</h3>
            
            <h4>Idées créatives</h4>
            <ul>
                <li><strong>Pommes de pin :</strong> Glissez un carton avec le nom</li>
                <li><strong>Mini-cadres :</strong> Élégants et réutilisables</li>
                <li><strong>Boules personnalisées :</strong> Chaque invité repart avec</li>
                <li><strong>Biscuits décorés :</strong> Gourmands et originaux</li>
            </ul>
            
            <h3>Pliage de serviettes</h3>
            
            <h4>Techniques élégantes</h4>
            <ul>
                <li><strong>Sapin :</strong> Classique et festif</li>
                <li><strong>Éventail :</strong> Simple et élégant</li>
                <li><strong>Pochette :</strong> Pour glisser les couverts</li>
                <li><strong>Nœud :</strong> Avec un joli ruban</li>
            </ul>
            
            <h3>Éclairage d'ambiance</h3>
            
            <h4>Sources lumineuses</h4>
            <ul>
                <li>Bougies sur la table</li>
                <li>Guirlandes lumineuses discrètes</li>
                <li>Variateur pour ajuster l'intensité</li>
                <li>Lumière tamisée générale</li>
            </ul>
            
            <h3>Touches finales</h3>
            
            <h4>Petites attentions</h4>
            <ul>
                <li>Menu calligraphié à chaque place</li>
                <li>Petits cadeaux pour les invités</li>
                <li>Playlist de musique de Noël en fond</li>
                <li>Parfum d'ambiance (cannelle, orange)</li>
            </ul>
            
            <h4>Conseils pratiques</h4>
            <ul>
                <li>Préparez la table la veille</li>
                <li>Vérifiez que les décorations ne gênent pas la conversation</li>
                <li>Laissez de l'espace pour les plats</li>
                <li>Prévoyez une table d'appoint pour le service</li>
            </ul>
            
            <h3>Conclusion</h3>
            <p>Une belle table de Noël combine esthétique et fonctionnalité. L'essentiel est de créer une ambiance chaleureuse où vos invités se sentiront accueillis. Besoin d'aide pour votre décoration ? Contactez-nous !</p>
        `
    },
    'tendances-2024': {
        category: 'Tendances',
        title: 'Les Tendances Déco Noël 2024',
        date: '📅 15 Oct 2024',
        time: '⏱️ 5 min',
        image: "data:image/svg+xml,%3Csvg width='400' height='250' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%232D5016' width='400' height='250'/%3E%3Ctext x='50%25' y='50%25' font-size='18' fill='white' text-anchor='middle' dominant-baseline='middle'%3ETendances 2024%3C/text%3E%3C/svg%3E",
        content: `
            <h3>Introduction</h3>
            <p>Noël 2024 s'annonce riche en tendances décoratives ! Entre retour aux sources et innovations, découvrez les styles qui marqueront cette année.</p>
            
            <h3>1. Le Grand Retour du Naturel</h3>
            
            <h4>Matériaux bruts</h4>
            <p><strong>La tendance phare :</strong> Le bois, l'osier, le lin et la laine s'invitent dans nos décorations pour une ambiance authentique et chaleureuse.</p>
            <ul>
                <li>Ornements en bois sculpté</li>
                <li>Couronnes en branches naturelles</li>
                <li>Décorations en feutrine</li>
                <li>Paniers en osier</li>
            </ul>
            
            <h4>Palette de couleurs terreuses</h4>
            <ul>
                <li>Vert sapin profond</li>
                <li>Beige et écru</li>
                <li>Marron chocolat</li>
                <li>Touches de rouille</li>
            </ul>
            
            <h3>2. Minimalisme Scandinave</h3>
            
            <h4>Moins, c'est plus</h4>
            <p>L'approche nordique privilégie la simplicité et l'élégance avec des décorations épurées et fonctionnelles.</p>
            
            <h4>Caractéristiques</h4>
            <ul>
                <li>Palette blanc, gris et bois clair</li>
                <li>Formes géométriques simples</li>
                <li>Étoiles en papier ou bois</li>
                <li>Bougies blanches en abondance</li>
                <li>Textiles douillets (plaids, coussins)</li>
            </ul>
            
            <h3>3. Maximalisme Festif</h3>
            
            <h4>L'opulence assumée</h4>
            <p>À l'opposé du minimalisme, cette tendance célèbre l'abondance et la joie avec des décorations généreuses.</p>
            
            <h4>Comment l'adopter</h4>
            <ul>
                <li>Superposition de textures et motifs</li>
                <li>Couleurs vives et contrastées</li>
                <li>Accumulation de décorations</li>
                <li>Guirlandes XXL</li>
                <li>Sapin surchargé (assumé !)</li>
            </ul>
            
            <h3>4. Couleurs Tendance 2024</h3>
            
            <h4>Vert émeraude</h4>
            <p>Riche et luxueux, le vert émeraude apporte profondeur et sophistication.</p>
            
            <h4>Bleu glacier</h4>
            <p>Pour une ambiance hivernale fraîche et moderne, associé à l'argent et au blanc.</p>
            
            <h4>Terracotta et rouille</h4>
            <p>Des tons chauds qui apportent originalité et douceur, parfaits avec le vert sapin.</p>
            
            <h4>Rose poudré</h4>
            <p>Romantique et doux, il adoucit les décorations traditionnelles.</p>
            
            <h3>5. Éclairage Innovant</h3>
            
            <h4>Guirlandes intelligentes</h4>
            <ul>
                <li>Contrôle via smartphone</li>
                <li>Changement de couleurs</li>
                <li>Programmation personnalisée</li>
                <li>Synchronisation avec la musique</li>
            </ul>
            
            <h4>Néons de Noël</h4>
            <p>Les enseignes lumineuses façon néon font leur entrée dans la déco de Noël pour un style moderne et décalé.</p>
            
            <h3>6. Décorations Artisanales</h3>
            
            <h4>Fait main valorisé</h4>
            <p>Les créations artisanales et DIY sont plus que jamais appréciées pour leur authenticité.</p>
            <ul>
                <li>Céramique artisanale</li>
                <li>Tricot et crochet</li>
                <li>Macramé</li>
                <li>Peinture sur bois</li>
            </ul>
            
            <h3>7. Thème Forêt Enchantée</h3>
            
            <h4>Éléments clés</h4>
            <ul>
                <li>Animaux de la forêt (cerfs, renards, hiboux)</li>
                <li>Champignons décoratifs</li>
                <li>Mousse et lichen</li>
                <li>Branches et pommes de pin</li>
                <li>Tons verts et bruns</li>
            </ul>
            
            <h3>8. Vintage et Rétro</h3>
            
            <h4>Nostalgie des années 60-70</h4>
            <p>Le vintage fait son grand retour avec des ornements inspirés des décennies passées.</p>
            <ul>
                <li>Boules en verre soufflé</li>
                <li>Guirlandes à grosses ampoules colorées</li>
                <li>Tinsel argenté</li>
                <li>Figurines rétro</li>
            </ul>
            
            <h3>9. Éco-Responsabilité</h3>
            
            <h4>Déco durable</h4>
            <p>La conscience écologique influence fortement les choix décoratifs.</p>
            <ul>
                <li>Décorations recyclées ou upcyclées</li>
                <li>Matériaux biodégradables</li>
                <li>LED basse consommation</li>
                <li>Sapins en pot à replanter</li>
                <li>Décorations durables et intemporelles</li>
            </ul>
            
            <h3>10. Mix and Match</h3>
            
            <h4>L'art du mélange</h4>
            <p>Osez mélanger les styles pour créer une décoration unique et personnelle !</p>
            <ul>
                <li>Traditionnel + moderne</li>
                <li>Rustique + glamour</li>
                <li>Vintage + minimaliste</li>
            </ul>
            
            <h3>Conseils pour adopter les tendances</h3>
            
            <h4>Restez fidèle à votre style</h4>
            <p>Ne suivez pas toutes les tendances. Choisissez celles qui vous parlent et correspondent à votre intérieur.</p>
            
            <h4>Investissez intelligemment</h4>
            <ul>
                <li>Privilégiez la qualité pour les pièces maîtresses</li>
                <li>Complétez avec du DIY pour les petits éléments</li>
                <li>Choisissez des basiques intemporels</li>
            </ul>
            
            <h4>Testez avant d'investir</h4>
            <p>Commencez par quelques touches de la nouvelle tendance avant de tout changer.</p>
            
            <h3>Conclusion</h3>
            <p>Les tendances 2024 offrent une belle diversité pour tous les goûts ! Que vous préfériez le naturel, le minimaliste ou le maximaliste, l'essentiel est de créer une ambiance qui vous ressemble. Notre équipe peut vous conseiller pour intégrer ces tendances à votre décoration.</p>
        `
    }
};

// Mapping des articles aux IDs
const articleIds = [
    'choisir-sapin',
    'diy-decorations',
    'eclairage-exterieur',
    'noel-eco',
    'table-fete',
    'tendances-2024'
];

// Initialisation
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('blogModal');
    const closeBtn = document.getElementById('blogModalClose');
    const readMoreLinks = document.querySelectorAll('.blog-read-more');
    const whatsappBtn = document.getElementById('blogWhatsappBtn');

    // Ouvrir le modal au clic sur "Lire plus"
    readMoreLinks.forEach((link, index) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const articleId = articleIds[index];
            openBlogModal(articleId);
        });
    });

    // Fermer le modal
    closeBtn.addEventListener('click', closeBlogModal);

    // Fermer en cliquant en dehors du contenu
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeBlogModal();
        }
    });

    // Fermer avec la touche Échap
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeBlogModal();
        }
    });

    // Bouton WhatsApp
    whatsappBtn.addEventListener('click', function () {
        const phoneNumber = '33123456789'; // Remplacez par votre numéro
        const message = encodeURIComponent('Bonjour, je souhaite en savoir plus sur vos services de décoration de Noël.');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    });
});

// Fonction pour ouvrir le modal
function openBlogModal(articleId) {
    const article = blogArticles[articleId];
    if (!article) return;

    const modal = document.getElementById('blogModal');
    const modalCategory = document.getElementById('modalCategory');
    const modalTitle = document.getElementById('modalBlogTitle');
    const modalMeta = document.getElementById('modalBlogMeta');
    const modalImage = document.getElementById('modalBlogImage');
    const modalContent = document.getElementById('modalBlogContent');

    // Remplir le contenu
    modalCategory.textContent = article.category;
    modalTitle.textContent = article.title;
    modalMeta.innerHTML = `
        <span class="blog-meta-item">${article.date}</span>
        <span class="blog-meta-item">${article.time}</span>
    `;
    modalImage.src = article.image;
    modalImage.alt = article.title;
    modalContent.innerHTML = article.content;

    // Afficher le modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Scroll en haut du modal
    const modalContentEl = document.querySelector('.blog-modal-content');
    if (modalContentEl) {
        modalContentEl.scrollTop = 0;
    }
}

// Fonction pour fermer le modal
function closeBlogModal() {
    const modal = document.getElementById('blogModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}
