Pour l'installation, exécuter les commandes suivantes : 
```
git init 
git clone https://github.com/allezxcendre/TP2_DEVOPS-DOCKER/new/master
```
Une fois le dossier cloné, vérifiez que vous êtes dans le bon dossier 

Pour build les images, voici les commandes :
```
docker build -f dockerfile -t mon-projet .
docker build -f dockerfile-api -t mon-api .
```
Puis pour lancer un conteneur :
```
docker run -p 3000:3000 mon-projet
```
Une fois lancer visiter http://localhost:3000

En suite stoper le avec son ID 

Faite un docker ps 

Puis faite un docker stop ID

Puis pour lancer l'autre images faite :
```
docker run -p 3000:3000 mon-api
```
Voila tout devrais bien fonctionner ! 
