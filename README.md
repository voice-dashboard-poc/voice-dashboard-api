# Voice dashboard API (PoC)

This is the API that manages via websocket the interactions with the
frontend dashboard.

Actions are received via HTTP call, from the Lambda function that
handles the Amazon echo voice interactions

---


## Versions
Works with:
  - Node/8.2 & NPM/5.3.0

## Docker usage
Run it as docker in port 9000
```
$ docker build -t voice-dashboard-api:latest .
$ docker run -p 9000:9000 --env NODE_ENV=local voice-dashboard-api:latest
```

## Console usage
Run service in port 9000
```
$ npm install
$ npm run dev
```

### Tests
**No tests yet**
```
$ npm run test
```




License
----

![Reconocimiento – NoComercial – SinObraDerivada (by-nc-nd): No se permite un uso comercial de la obra original ni la generación de obras derivadas.](http://es.creativecommons.org/blog/wp-content/uploads/2013/04/by-nc-nd.eu_petit.png "Reconocimiento – NoComercial – SinObraDerivada (by-nc-nd): No se permite un uso comercial de la obra original ni la generación de obras derivadas.")
