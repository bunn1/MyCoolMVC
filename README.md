# Nodejs-Express-intro

Initiera ett nytt Node.js projekt
`npm init`

Se till att skapa en fil som motsvaras av namnet - entry point - den fil som startar webbservern, ex:
server.js

Starta server med kommando:
`node server`
`node server.js`

Vid felmeddelande så beror det på att ES6 använder moduler
- lägg till följande i package.json
"type": "module",

Starta om server genom att först avbryta med CTRL+C, därefter starta servern igen: 
`node server`

OBS - om servern startas om och en port redan används av systemet visas ett felmeddelande i stil med
`...listen EADDRINUSE...` 

Ge följande kommando för att avbryta processen

Windows:
`taskkill /F /IM node.exe`

Linux, OS X:
`killall node`

***

OBS - se till att skapa filen .gitignore

Det är en fil som gör det möjligt att bestämma vilka filer/mappas som ska exkluderas från att publiceras på GitHub

I ett Nodejs projekt så kan det exempelvis vara mappen *node_modules* som man inte vill ska publiceras på GitHub. Dessutom kan det vara filer som man använder för att hantera känslig data (typ användarnamn, lösenord, konfigurationer...).
En vanlig fil för den typen av data är filen med namnet 
.env 

**.gitignore**

```
# Dependency directories
node_modules/

# dotenv environment variables file
.env

```


***

#### Branch 1-hello
Visa Hello World

#### Branch 2-file
Visa statiska html sidor (med innehåll som ex bilder, stilmall etc)

Skapa en mapp för innehåll som ska kunna visas via en webbläsarrequest. Vanligen en mapp med namnet public
