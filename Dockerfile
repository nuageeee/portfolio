# ---------- Étape 1 : construire le site ----------
FROM node:22-alpine AS build
WORKDIR /app

# Les dépendances d'abord : Docker garde cette étape en cache tant qu'elles ne changent pas.
COPY package.json package-lock.json ./
RUN npm ci

# Puis le reste du projet, et le build Vite (résultat dans /app/dist).
COPY . .
RUN npm run build

# ---------- Étape 2 : servir les fichiers statiques ----------
# L'image finale ne contient que Nginx et le dossier dist : pas de Node, pas de sources.
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
