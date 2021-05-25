<h1 align="center">
  AEA web versione molti utenti
</h1>

<p align="center">
  Static site generator for the site of the Politecnico di Milano Automation Engineering Association <a href="https://www.aeapolimi.it/">AEA Polimi</a>, built with React and Gatsby.js.
</p>

<p align="center">
  <a href="https://app.netlify.com/sites/aeapolimi/deploys">
    <img src="https://api.netlify.com/api/v1/badges/dddf052d-2b33-408a-ac72-8f3616e76cb1/deploy-status" height="20"/>
  </a>
  <a href="https://discord.gg/Cszywmt">
    <img src="https://img.shields.io/discord/765233478190628894.svg?label=&logo=discord&logoColor=ffffff&color=e3a220&labelColor=ba5a0b" height="20"/>
  </a>
  <a href="https://www.aeapolimi.it">
    <img src="http://ForTheBadge.com/images/badges/built-with-swag.svg" height="20"/>
  </a>
</p>

Uguale alla versione master, ma durante la build legge da firestore e genera delle pagine veramente statiche, le uniche richieste a firestore sono per il login e nelle pagine autori e tag.

Ha i tag seo per le immagini ed essendo completamente statiche Facebook etc leggono i veri dati seo aggiornati come fosse dinamica.

I dati di firebase sono accessibili tramite graphql (vedi [Gatsby & Graphql](https://www.gatsbyjs.com/docs/graphql/)).

**vantaggi**
1) Si può quasi rimuovere firestore
2) Veloce
3) Il knowledge graph di Facebook funziona insieme agli altri che non eseguono javascript

**svantaggi**
1) Per vedere ogni modifica su firestore va ricompilato, con tanti articoli al mese potremmo andar fuori dalla quota mensile (soluzione: torna a github page, è più lenta però)
