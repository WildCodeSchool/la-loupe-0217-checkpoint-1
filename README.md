# 2017-checkpoint-1
Wild Code School Checkpoint 1 - Vendredi 17 mars
JS - 4h


## Etape 1
~~Une fois le dépôt cloné, crée-toi une branche sur git portant ton nom, c'est sur cette dernière que tu travailleras.~~
Une fois le travail effectué tu pousseras ton travail dessus

## Etape 2
Pour le moment (ba oui, tu vas bosser un peu quand même), le fichier index.html comporte un mini header ainsi qu'une liste d'articles saisis en dur dans le code.
- Modifier la barre de navigation afin que l'on y retrouve:
    - ~~Un logo placé à gauche qui sera un lien vers la page d'accueil~~
    - ~~Un lien vers une page pour ajouter une citation (que tu vas devoir également créer)~~
- Créer un footer avec:
    - ~~Icône des réseaux sociaux (twitter, facebook, github), pour cela utilise fontawesome. Les icônes devront être centrées au milieu du footer~~
- Page d'ajout de citation:
  - Formulaire avec:
      - ~~Un champ pour l'auteur de la citation~~
      - ~~Un champ pour la citation~~
      - ~~Un champ pour l'épisode dans lequel la citation est présente~~
      - ~~Un champ pour la saison dans lequel la citation est présente~~
      - ~~Un champ pour la date d'ajout de la citation (en bonus la date sera définie automatiquement lors de la création)~~
      - ~~En bonus: Un champ file permettant d'uploader une image (le moment où le personnage prononce la citation dans l'épisode)~~

#### Hint

 - *Il est possible que le projet tel que tu l'as récupéré comporte quelques bugs, résous les en même temps.*
 - *Il manque également quelques classes bootstrap afin que le site soit responsive, ajoute les.*
 - ~~Le site a également été codé avec les pieds (faut bien qu'on se fixe des challenges nous aussi), du coup, l'indentation laisse à désirer... tu sais ce qu'il te reste à faire..~~

## Etape 3 - Le CRUD

Maintenant que tu as créé tes formulaires, autant les utiliser pour rendre le site administrable.
 - On doit pouvoir:
   - ~~Ajouter une citation~~
   - ~~Visualiser toutes les citations directement depuis la page d'accueil, avec le design actuel~~
   - ~~Supprimer une citation ciblée (tu peux utiliser les boutons déjà existants)~~

Pour cela, tu vas devoir t'adresser à une API qui retournera des objets Article contenant les champs suivants:
- ~~Un champ id qui sera la clé unique de l'article, ce dernier est incrémenté automatiquement par le serveur à chaque nouvelle création d'article~~
-~~ Un champ author de 100 caractères maximum~~
-~~ Un champ chapter de 100 caractères maximum~~
- ~~Un champ content de 65 535 caractères maximum~~
- ~~Un champ date de type date UTC au format ISO~~
- ~~Un champ image de 65 535 caractères maximum contenant l'url de l'image~~



## Hint
 - *Limite au maximum la redondance de code*
 - *Pour tester ton code, tu trouveras ici quelques exemples de citations :-D : [Citation Kaamelott](https://fr.wikiquote.org/wiki/Kaamelott)*
