import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/habitats", "Les Habitats", "/pages/habitats.html"),
    new Route("/restaurations", "Restaurations", "/pages/restaurations.html"),
    new Route("/train", "L'ArcaTrain", "/pages/train.html"),
    new Route("/contact", "Nous Contactez", "/pages/contact.html"),
    new Route("/signin", "Connexion", "/pages/signin.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia Zoo";