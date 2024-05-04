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
### Windows
```
npm run start
```
### MacOS/Linux
```
npm run start-unix
```

## Migliorie
### Segnalazioni

Nel lato applicativo di gestione delle segnalazioni, l'obiettivo principale è fornire un'interfaccia intuitiva per la visualizzazione e la gestione delle segnalazioni georeferenziate. Inizialmente, è stata considerata l'opzione di utilizzare la libreria Leaflet per la gestione delle mappe interattive. Tuttavia, a causa delle restrizioni temporali nel processo di sviluppo, è stata scelta un'alternativa più rapida.

È stato implementato un endpoint semplice che richiede le coordinate geografiche (latitudine e longitudine) insieme a una distanza per definire un'area di interesse sulla mappa. Questo approccio consente agli utenti di visualizzare solo le segnalazioni pertinenti rispetto alla loro posizione o a un'area specifica.

Inizialmente, era stato pianificato di utilizzare il formato GeoJSON per rappresentare graficamente le segnalazioni sulla mappa. Tuttavia, a causa delle restrizioni temporali nel processo di sviluppo, è stata rinviata l'implementazione completa di GeoJSON insieme a Leaflet per una futura iterazione del progetto. Al momento, il sistema fornisce solo un'interfaccia di base tramite un endpoint semplice per la visualizzazione delle segnalazioni. La gestione completa dei GeoJSON rimane una prospettiva interessante per il miglioramento futuro del progetto.

Questo approccio pragmatico consente di realizzare una soluzione funzionale per la gestione delle segnalazioni, nonostante le restrizioni di tempo, concentrandosi sull'essenziale e lasciando spazio per future espansioni e miglioramenti.