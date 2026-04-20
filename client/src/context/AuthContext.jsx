import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(); // création de context (qu'on va exporter)

// Provider du context (source des données)
export default function AuthContextProvider({ children }) {
  // → récupère la valeur stockée sous la clé "user" (string ou null)
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null, // JSON.parse transforme la string en objet JavaScript
  );

  // à appler dans les composants
  const updateUser = (data) => {
    setCurrentUser(data);
  };

  // met à jour le currentUser et son provider à chaque fois que currentUser change
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    // Provider = composant qui va "donner" les données à toute l'app
    // value = ce qu'on veut rendre accessible partout (ici la var currentUser et la fonc updateUser)
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {/* children = tous les composants enfants qui pourront accéder à user et setUser sans props */}
      {children}
    </AuthContext.Provider>
  );
}
