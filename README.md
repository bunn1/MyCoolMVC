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

#### Branch 3-template
Använd en mall för att presentera gemensamt innehåll på flera sidor. Ex header, footer ...

Kallas för *template engine*

En av de vanligaste modulen som används är *ejs*
Embedded JavaScript

Installera med kommandot
`npm install ejs`

Importera ejs 
`import ejs from 'ejs';`

Bestäm att ejs är den mall som ska användas
`app.set('view engine', 'ejs');`

Skapa en mappstruktur för filer som har med mallar att göra
`views`

Innehåller filer, i det här fallet med ejs som "mallmotor" används filtypen .ejs, ex index.ejs

`views/partials`
Innehållet delar som kan visas på flera sidor, ex en fil med namnet
header.ejs

Exempel på kod som kan rendera innehållet:
```javascript

// listen to '/start' och ange template metoden render()
app.get('/start', (req, res) => {
   
    // processa innehållet från en ejs fil
    res.render('index');
});
```

En fil men filnamnet .ejs processas av servern innan den skickas till en klient. JavaScript exekveras med taggarna `<% %>` 

För att inkludera en fil används metoden ejs template metoden *include* 

`<%- include('partials/header.ejs') %>`
 
Se olika ejs taggar för att en server ska processa en ejs fil:
https://www.npmjs.com/package/ejs

#### Branch 4-route
Skapa moduler som kan hantera requests, placera moduler i mappen *routes*

En modul som hanterar metoden GET kan se ut så här

**routes/start.js**
```javascript

import express from 'express';
const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.render('index');
    });

export default router;
```

Modulen importeras därefter till server.js. Modulen kan hantera flera olika request paths

**server.js**

```javascript
import routeStart from './routes/start.js';
app.use('/start', routeStart);
app.use('/', routeStart);
```

#### 5-process
En sida som processas i en template kan basera processen på ett objekt

Objektet skickas med i renderingsmetoden för ejs

**start.js**

```javascript
import express from 'express';
const router = express.Router();

let obj = {user: "Flisa Hedenhös", navigationLinks: ["Start", "About", "Contact"], page: "start"};

router.route('/')
    .get((req, res) => {
        res.render('index', obj);
    });

export default router;
```

Objektet kan sedan hanteras med namnet *locals*, ex *locals.user*, *locals.page*

Ex på locals.user i footer elementet

**footer.ejs**

```javascript
<footer>
    Frukt är fint :) <%- locals.user %> 
</footer>
```

Om objektet inte finns så kan det vara klokt att kontollera först fr att unvika felmeddeland....


#### Branch 6-error

När servern har processat routes och den fortfarande inte gett en respons hanteras det som fel.

**404** page not found, **500** server error

```javascript
// handle errors

// 404 not found
app.get('*', (req, res, next) => {
    res.render('404');
});

// server error 500...
// leading fourth argument is default an error...
app.use((err, req, res, next) => {

    // log error to file...

    // show response
    return res.status(500).send("Server error, please return later");
});

```

***

OBS! Se till att ett server fel (500) inte sänds till en klient eftersom ett sådant fel kan visa information som kan användas för ex en hacker...

*Däremot så bör server fel loggas till en fil för att kunna användas vid felsökning av buggar.*

***