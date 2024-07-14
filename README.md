# Flag

Dans cet exercice, vous allez récupérer les noms et drapeaux de pays du monde entier. Vous n'aurez besoin de modifier que le fichier "Home.js".


MY WORLD TOUR

👉 Dans un premier temps, dans "Home.js", créez une variable d'état "countries" et son setter grâce à useState(). Elle va contenir la liste des données pour chaque pays.


👉 Dans un deuxième temps, on veut récupérer les données des pays via une API. Au sein d'un useEffect() qui se déclenche uniquement à l'initialisation du composant, récupérez les données des pays et de leurs drapeaux en utilisant fetch() sur l'adresse suivante : "https://countriesnow.space/api/v0.1/countries/flag/images". Prenez connaissance des données que vous réceptionnez, puis attribuez uniquement les données concernant tous les pays à "countries".


👉 Dans un troisième temps, importez le composant "Country" dans "Home" et utilisez la méthode .map() pour transformer countries en tableau de composants "Country". Vous avez 3 props à transmettre à ces composants "Country", regardez bien le code de "Country.js" pour savoir quelles sont ces props à transmettre.


👉 Enfin, modifiez le compteur de pays pour qu'il représente vraiment le nombre de pays affichés à l'écran de manière générique. Indice : le nombre de pays à l'écran correspond au nombre d'éléments de votre tableau...





