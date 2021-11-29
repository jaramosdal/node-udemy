# WebServer + RestServer

Recuerden que deben ejecutar ```npm install``` para reconstruir los módulos de Node.

# Despliegue Heroku 07-restserver

heroku login
heroku git:remote -a curso-node-jrn
git subtree push --prefix 07-restserver/ heroku main

## Variables de entorno en Heroku

heroku config
heroku config:set VARIABLE="valor"
heroku config:unset VARIABLE