<h1 align="center">
  AEA web versione molti utenti
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/dddf052d-2b33-408a-ac72-8f3616e76cb1/deploy-status)](https://app.netlify.com/sites/aeapolimi/deploys)
[![Discord](https://img.shields.io/discord/765233478190628894.svg?label=&logo=discord&logoColor=ffffff&color=e3a220&labelColor=ba5a0b)](https://discord.gg/Cszywmt)
[![ForTheBadge built-with-swag](http://ForTheBadge.com/images/badges/built-with-swag.svg)](https://www.aeapolimi.it)

Uguale alla versione master, ma durante la build legge da firestore e genera delle pagine veramente statiche, le uniche richieste a firestore sono per il login e nelle pagine autori e tag.

Ha i tag seo per le immagini ed essendo completamente statiche Facebook etc leggono i veri dati seo aggiornati come fosse dinamica.

I dati di firebase sono accessibili tramite graphql (vedi [Gatsby & Graphql](https://www.gatsbyjs.com/docs/graphql/)).

**vantaggi**
1) Si può quasi rimuovere firestore
2) Veloce
3) Il knowledge graph di Facebook funziona insieme agli altri che non eseguono javascript

**svantaggi**
1) Per vedere ogni modifica su firestore va ricompilato, con tanti articoli al mese potremmo andar fuori dalla quota mensile (soluzione: torna a github page, è più lenta però)
