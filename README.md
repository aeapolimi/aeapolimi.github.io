<h1 align="center">
  <img src="https://raw.githubusercontent.com/aeapolimi/aeapolimi.github.io/master/src/images/AEAtondo_grigio.png" width="100" alt="AEA Polimi">
  <br>
  AEA Polimi on the web
</h1>

<p align="center">
  Static site generator for the site of Polimi Automation Engineering Association <a href="https://www.aeapolimi.it/">AEA Polimi</a>, built with React and Gatsby.js.
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

Creato con React + Gatsby.
Per modificarlo installa [Node](https://www.nodejs.org/).
Qui sotto i comandi di routine da usare avendo l'ambiente pronto e un quickstart per impostare l'ambiente al primo avvio.

_Info su [React](https://www.reactjs.org/), [Gatsby](https://www.gatsbyjs.com/)._

## :nerd_face: Comandi di routine
0) **git pull**

    NB: Se git pull restituisce modifiche a package-lock.json uso npm install per verificare che la nuova versione non abbia librerie che io non ho.
    
1) **Modifico il codice**
2) **npm run develop** (per vedere se il sito funziona con le modifiche)
3) **git add .**
4) **git commit -m "Messaggio del commit"**
5) **git push**
6) **git push origin master:build** (Per pubblicare USARE POCO CHE POI ANDIAMO FUORI DALLA QUOTA GRATIS)

## 🚀 First start

1.  **git clone.**

    Clona questa repository, sotto esempio con https.

    ```shell
    # clone repo con https
    git clone https://github.com/aeapolimi/aeapolimi.github.io.git
    ```

1.  **npm install.**

    Entra nella repository clonata e installa il necessario richiesto da questa web app.

    ```shell
    # entra nella repository
    cd aea
    # installa
    npm install
    ```

1.  **Start developing.**

    inizia a sviluppare aprendo la development build, si dovrebbe aprire da solo il browser col sito.

    ```shell
    gatsby develop
    # If gatsby develop doesn't work:
    npm run develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `aea` directory in your code editor of choice and edit `src/components/HomePage.js`. Save your changes and the browser will update in real time!
    
1.  **Pubblica sulla github page**

    Se sei sicuro che tutto vada bene puoi pubblicare la nuova versione del sito con le tue modifiche.
    Per vedere le modifiche su [aeapolimi.github.io](https://aeapolimi.github.io) potresti dover aspettare cinque minuti.
    
    ```shell
    git add .
    git commit -m "Messaggio"
    git push
    git push origin master:build
    ```

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Altri possibili deployment
Nel caso dovessimo finire la quota gratuita o ci dovessero essere altri problemi con netlify possiamo momentaneamente usare la github page aeapolimi.github.io con questo comando:

    
    npm run deploy
    
Ricorda in caso di aggiornare il dns.
