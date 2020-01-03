FROM node:lts-alpine

# installe un simple serveur http pour servir un contenu statique
RUN npm install -g http-server

# définit le dossier 'app' comme dossier de travail
WORKDIR /app

# copie 'package.json*'
COPY package*.json ./

# installe npm
RUN npm install

# copie les fichiers et dossiers du projet dans le dossier de travail
COPY . .

# construit l'app 
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]