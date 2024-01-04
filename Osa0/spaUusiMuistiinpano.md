```mermaid
sequenceDiagram
  participant browser
  participant server

  browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
  activate server
  Note right of server: Estetään sivun uudelleenlataus e.preventDefaultilla <br> Luodaan uusi muistiinpano
  server-->>browser: Palautetaan viesti toimenpiteen onnistumisesta statuskoodilla 201
  deactivate server
  
```
