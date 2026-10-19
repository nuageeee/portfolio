import { defineConfig } from 'vite';

// Le site a deux pages : l'accueil et la page 404.
// Vite ne construit que index.html par défaut, on lui ajoute donc 404.html.
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        notFound: '404.html',
      },
    },
  },
});
