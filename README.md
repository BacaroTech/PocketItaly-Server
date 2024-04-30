# PocketItaly-Server

## Preprazione Backend
Installazione dei node modules
```
npm install
```
Una volta installati tutti i pacchetti, creare un file .env derivato dal file .env.example e modificare le credenziali a proprio piacimento.
Lanciare poi il compose tramite linea di comando oppure Docker Desktop
```
docker compose -f docker-compose.yml up -d
```

## Avvio Server
Windows
```
npm run start
```
MacOS/Linux
```
npm run start-unix
```

## Popolazione DB
Per popolare le tabelle di Products e Items si utilizzano delle collection esportate dall'estensione di VSCode Thunder Client.
Importare quindi nel client le Collection presenti nella cartella collections_db e runnarle.
Se tutto è andato a buon fine, ci ritroveremo con questi dati nelle tabelle (visibili all'indirizzo http://localhost:5050 inserendo le credenziali presenti nel file 
.env):
Products: 
1	"test"	"12345678901"	"Example Product 1"	"0123456789"	"This is an example product description."	"https://example.com/product_image.jpg"	"2024-04-25 14:00:00"
2	"1234567890"	"12345678901"	"Example Product 2"	"0123456789"	"This is an example product description."	"https://example.com/product_image.jpg"	"2024-04-25 14:00:00"
Items: 
2	"test"	1