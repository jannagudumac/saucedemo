# Selenium Exercises – Node.js

Automatisation avec Selenium WebDriver sur [SauceDemo](https://www.saucedemo.com) et [UITesting Playground](https://www.uitestingplayground.com).

---

## Installation

Ouvrez un terminal dans le dossier du projet et lancez :

npm init -y
npm install selenium-webdriver


## Lancer les scripts

Pour exécuter chaque script :

node login_and_list_products.js   # login + récupérer produits
node progress_bar.js              # barre de progression jusqu'à 75%
node alerts.js                     # interactions avec alert/confirm/prompt
node scroll_to_hidden.js           # scroller et cliquer sur bouton caché

## Points difficiles 

    - Sélecteurs : certaines classes avaient des espaces, certains éléments n’avaient pas d’ID → utilisation de classes correctes.

    - Récupération prix et nom des produits : nécessite de parcourir chaque .inventory_item et lire séparément le nom et le prix.

    - Gestion des éléments dynamiques et alertes : utilisation de driver.wait(until...) au lieu de simples sleep() pour plus de robustesse.

    - Dropdowns : sélection via sendKeys() sur le <select> ou clic direct sur <option>.

