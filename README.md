# TypeScriptCucumberBDD

## Getting Started

### Prerequisites/Guides
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/)
- [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)
- [VSCode](https://code.visualstudio.com/) or any other suitable IDE


### Installation
1. Clone the repo or 'Download ZIP'
   ```
   git clone https://github.com/OluJS/TypeScriptCucumberBDD.git
   ```
2. Open the file in VSCode or your chosen IDE
3. Ensuring that you're at the **root of the project folder**, install the NPM dependencies
   ```
   npm install cypress cypress-cucumber-preprocessor browserify typescript tsify cypress-xpath
   ```

## Usage
   To run the feature file tests in headless mode, once again make sure you're at the root of the project folder and type into the terminal:
   ```
   ./node_modules/.bin/cypress run
   ```
   ...or... (requires npm@5.2.0 or greater) 
   ```
   npx cypress run
   ```
   To run the feature files tests in test runner use:
   ```
   ./node_modules/.bin/cypress open
   ```
   ...or... (requires npm@5.2.0 or greater) 
   ```
   npx cypress open
   ```
