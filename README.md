# 2017-checkpoint-1
Wild Code School Checkpoint 1 - Vendredi 17 mars
JS - 4h

# Index
- [Introduction](#introduction)
- [Etape 1](#etape-1)
- [Etape 2](#etape-2)
- [Etape 3](#etape-3---le-crud)
- [Hint](#hint-1)

# Introduction

#### Kézako ?

- Un site en html/css dans lequel certains éléments manquent
- Le site à été réalisé à l'aide du framework css/js Bootstrap

#### Contenu

- Un fichier README.md (ce que tu es en train de lire en fait)
- Un fichier .gitignore permettant (dans le cas présent) d'ignorer le fichier .DS_Store qui est un fichier de conf spécifique aux Mac (si tu as d'autre chose à ignorer par git, n'hesite pas à l'utiliser ;-))
- Un dossier backend (pour l'etape 3)
- Un dossier frontend (pour maintenant)
- Dans le dossier frontend:
  - Un dossier css comprenant la feuille de style du projet
  - Un dossier font dans lequel se trouve la font folkard_.ttf
  - Un dossier vendor dans lequel se trouve les fichiers du framework bootstrap, de la librairie d'icon font-awesome et de la librairie JS jquery (tu ne dois pas toucher à ce dossier et ses sous-dossiers, juste les utiliser)
  - Un dossier image (avec les images :-))
  - Un fichier index.html, template du site

## Etape 1
Une fois le dépôt cloné, crée-toi une branche sur git portant ton nom, c'est sur cette dernière que tu travailleras.
Une fois le travail effectué tu pousseras ton travail dessus

## Etape 2
Pour le moment (ba oui, tu vas bosser un peu quand même), le fichier index.html comporte un mini header ainsi qu'une liste d'articles saisis en dur dans le code.
- Modifier la barre de navigation afin que l'on y retrouve:
    - Un logo placé à gauche qui sera un lien vers la page d'accueil
    - Un lien vers une page pour ajouter une citation (que tu vas devoir également créer)
- Créer un footer avec:
    - Icône des réseaux sociaux (twitter, facebook, github), pour cela utilise fontawesome. Les icônes devront être centrées au milieu du footer
- Page d'ajout de citation:
  - Formulaire avec:
      - Un champ pour l'auteur de la citation
      - Un champ pour la citation
      - Un champ pour l'épisode dans lequel la citation est présente
      - Un champ pour la saison dans lequel la citation est présente
      - Un champ pour la date d'ajout de la citation (en bonus la date sera définie automatiquement lors de la création)
      - En bonus: Un champ file permettant d'uploader une image (le moment où le personnage prononce la citation dans l'épisode)

#### Hint

 - Il est possible que le projet tel que tu l'as récupéré comporte quelques bugs, résous les en même temps.
 - Il manque également quelques classes bootstrap afin que le site soit responsive, ajoute les.
 - Le site a également été codé avec les pieds (faut bien qu'on se fixe des challenges nous aussi), du coup, l'indentation laisse à désirer... tu sais ce qu'il te reste à faire..

## Etape 3 - Le CRUD

Maintenant que tu as créé tes formulaires, autant les utiliser pour rendre le site administrable.
 - On doit pouvoir:
   - Ajouter une citation
   - Visualiser toutes les citations directement depuis la page d'accueil, avec le design actuel
   - Supprimer une citation ciblée (tu peux utiliser les boutons déjà existants)

Pour cela, tu vas devoir t'adresser à une API qui retournera des objets Article contenant les champs suivants:
- Un champ id qui sera la clé unique de l'article, ce dernier est incrémenté automatiquement par le serveur à chaque nouvelle création d'article
- Un champ author de 100 caractères maximum
- Un champ chapter de 100 caractères maximum
- Un champ content de 65 535 caractères maximum
- Un champ date de type date UTC au format ISO
- Un champ image de 65 535 caractères maximum contenant l'url de l'image

#### Déroulé
##### 1. Installe le serveur json-serveur sur ta machine : [installer jsonserver](https://www.npmjs.com/package/json-server)
Pour rendre le site administrable tu vas avoir besoins de stocker des données. Pour le moment tu ne sais (peut être pas) pas créer une base de donnée et l'intéroger. Cependant tu sais récupérer des données au format JSON depuis une API. A l'aide de la librairie json-server nous allons créer une API REST en local.

Pour ce faire tu dois d'abord installer globalement la librairie depuis ton terminal à l'aide de npm avec la commande suivante (Si tu n'as npm d'installé sur ta machine rapproche toi de ton formateur):
```
sudo npm install -g json-server
```
##### 2. Installe le server http-server sur ta machine :
```
sudo npm install -g http-server
```
##### 3. Dans un premier terminal, va dans le répertoire ./backend/ et lance la commande
```
json-server --watch ./db.json
```
Tu peux maintenant interoger ton ficher db.json qui fait office de base de données depuis l'url http://localhost:3000. N'hésite pas à parcourir la doc de la librairie json-server ou de te rendre depuis ton navigateur sur http://localhost:3000 pour decourvir les url accessibles sur ton server local.
##### 4. Dans un second terminal, va dans le répertoire ./frontend/ et lance la commande
```
http-server
```
##### 5. Dans ton navigateur, accède à l'url qui t'a été fourni `http://localhost:3000/articles`.
##### 6. A l'aide d'une requête XMLHttpRequest GET, récupère la liste de tous les articles et injecte-les dans le DOM afin de visualiser toutes ces citations sur la page d'accueil en respectant le design actuel.
Utilises des requêtes XHR (ou AJAX si tu es plus à l'aise avec Jquery) pour récupérer les données. Cet exemple incomplet  peut te rafraichir la mémoire.
``` javascript
function getArticles() {
	const xhr = new XMLHttpRequest();
…
xhr.send();
}
```
##### 7. Gère l'ajout d'une nouvelle citation grâce à un formulaire et à une requête POST.
##### 9. Supprime une citation de la page d'accueil en cliquant sur le bouton supprimer à l'aide d'une requête DELETE.
##### 10. [BONUS] Ajoute une validation sur les champs du formulaire. (Empêcher d'envoyer des champs vides).

## Hint
 - Limite au maximum la redondance de code
 - Google, DuckDuckGo, Qwant... sont tes meilleurs amis
 - Pour tester ton code, tu trouveras ici quelques exemples de citations :-D : [Citation Kaamelott](https://fr.wikiquote.org/wiki/Kaamelott)

# Bon courage
