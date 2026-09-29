import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { app } from "./firebase-config.js"; // Assurez-vous d'importer votre configuration Firebase

const auth = getAuth(app);

// Vérification de la session utilisateur
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // Si l'utilisateur n'est pas connecté, redirection immédiate vers la connexion
    window.location.href = "login.html";
  }
});
