# Look and Feel Corporate Identity

## Inhoudsopgave
* [Opdracht School](#opdracht-school)
* [Opdracht Mediahuis](#opdracht-mediahuis)
* [Over Triple & Mediahuis](#over-triple-mediahuis)
* [Beschrijving](#beschrijving)
* [Kenmerken](#kenmerken)
* [Bronnen](#bronnen)
* [Licentie](#licentie)

## Opdracht School

Ontwerp en maak voor een opdrachtgever een website op basis van een bestaande huisstijl.

De instructie vind je in: [INSTRUCTIONS](https://github.com/fdnd-task/look-and-feel-corporate-identity/blob/main/docs/INSTRUCTIONS.md)

## Opdracht Mediahuis
Creëer een radioguide (een webapp) die informatie geeft over programma's, DJ's, en een persoonlijke ervaring biedt voor elke luisteraar.

Bekijk [hier](https://julia-stevens.github.io/look-and-feel-corporate-identity/) het eindresultaat 

## Over Triple & Mediahuis
Mediahuis, met wortels in België, is uitgegroeid tot een invloedrijke speler in de Europese mediamarkt. Het bedrijf, actief in de Benelux, Duitsland en Ierland, heeft een divers portfolio van nieuwsmerken, online platforms en radiostations. Sinds 2023 heeft Mediahuis haar bereik verder uitgebreid door de overname van verschillende populaire radiostations, waaronder Radio Veronica, SLAM!, Sublime, Sunlite en 100% NL.

Triple is verantwoordelijk voor het ontwikkelen en onderhouden van de web apps en mobiele apps voor al deze radiozenders. Dit omvat zowel de front-end ontwikkeling, die zorgt voor de gebruikersinterface en -ervaring, als de back-end ontwikkeling, die de technische infrastructuur en functionaliteiten van de apps ondersteunt. Door deze uitgebreide samenwerking draagt Triple bij aan het succes van de digitale kanalen van Mediahuis en zorgt het ervoor dat luisteraars een optimale ervaring hebben.

# Mediahuis - Look and Feel Corporate Identity
<!-- Geef je project een titel en schrijf in één zin wat het is -->
Creëer een radioguide (een webapp) die informatie geeft over programma's, DJ's, en een persoonlijke ervaring biedt voor elke luisteraar.

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
Wanneer luisteraars van Radio Veronica, SLAM!, 100% NL of Sublime naar de website van hun radiostation navigeren, dan krijgen ze (op desktop) een programmering overzicht te zien van alle radiozenders van het Mediahuis.

In één keer kan de gebruiker tussen radiozenders switchen en informatie lezen over de programma's, de DJ's en de programmering van de hele week.

De website is repsonsive en mobile first ontworpen. Op mobiel is er een gedetailleerd overzicht te zien van één zender, met een extra menu om tussen de stations te switchen.

Bekijk [hier](https://julia-stevens.github.io/look-and-feel-corporate-identity/) het eindresultaat 

<img width="700" alt="image" src="https://github.com/user-attachments/assets/4d9208ac-bb1c-4376-8ee8-baa68ae8ae8c"><img width="250" alt="image" src="https://github.com/user-attachments/assets/6972e622-ed0b-4e1a-83a5-0e75dd8b1b88"><img width="700" alt="image" src="https://github.com/user-attachments/assets/43e78eb6-7104-4421-b1dd-48686e2ff244"><img width="250" alt="image" src="https://github.com/user-attachments/assets/43100558-6015-4b57-8257-f752c0546116"><img width="700" alt="image" src="https://github.com/user-attachments/assets/790c8a2f-0f69-494c-9df1-4961e253cbc8">

### Gebruik

Op mobiel wordt het overzicht weergegeven van het station waarop de gebruiker de website heeft geopened. Hier is informatie te zien over o.a. de programmering en de DJ's. Ook is er een menu waarmee de gebruiker naar een ander radiostation kan switchen (zie video). Op desktop is het overzicht te zien alle radiozenders van het Mediahuis en kan er eenvoudig geswitcht worden tussen deze pagina's, maar is er dus ook één gezamenlijk overzicht (zie bovenstaande afbeeldingen). 

https://github.com/user-attachments/assets/e63f6719-345b-410e-83ce-5efbd9c985ca

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
De website is gebouw met [HTML](#html), [CSS](#css) en [JS](#js)

### HTML
#### HEAD
In de `head` wordt de gemaakte [stylesheet](https://vsheo.github.io/look-and-feel-styleguide/mediahuis.css) gekoppeld
```html
    <link rel="stylesheet" href="https://vsheo.github.io/look-and-feel-styleguide/mediahuis.css">
```

#### HEADER
In de `header` staat een hamburger menu en twee `ul`s met daarin de overige navigatie. In de navigatie van de dagen van de week staan `span`s, waarvan één met `aria-hidden="true"`

```html
    <li>
        <a class="font-nav-secondary text-secondary veronica-text-secondary" href="#">
            <span aria-hidden="true">Zo <strong>29</strong></span>
            <span class="visually-hidden">Zondag 29 september</span>
        </a>
    </li>
```
Daarnaast staat er `inert` bij de `ul` met het hamburger menu, om de `li`s te verbergen, voor keyboard en screen reader navigatie. In [JS](#js) staat er een functie waarmee deze `inert` getoggled kan worden o.b.v. de scherm breedte én of er op de hamburger geklikt is. 

```html
    <ul class="nav-links primary veronica-primary" inert>  </ul>
```

#### MAIN
In de main staat een aside met verschillende times om de tijdlijn te maken

```html
    <time datetime="00:00">00:00</time>
```

Daarnaast heeft iedere radiozender een aparte ul met daarin de showblokken in articles

```html
    <ul class="programmering-veronica">
         <li>
             <article>Hier de content van elk show blok</article>
         </li>
    </ul>
```

#### FOOTER
De `footer` bevat een `section` met daarin de muziekplayer

```html
    <section class="player">
        <h2>Goud Van Oud</h2>
        <p>Back To Black - Amy Winehouse</p>
    </section>
```

### CSS
In de gezamenlijke [stylesheet](https://vsheo.github.io/look-and-feel-styleguide/mediahuis.css) staan alle kleuren, typografie en andere overkoepelende settings vastgesetld door verschillende classes en custom properties. 

In HTML heb ik naar deze classes gerefereerd, zie onderstaand voorbeeld: 

```html
    <footer class="footer veronica-footer">
        <p>Dit is de footer</p>
    <footer>
```

Door media queries heb ik de layout op mobiel en desktop aangepast. Voor de cards van de overige radio zenders, ziet dit er bijvoorbeeld zo uit: 

```css
    /* Programmering cards SLAM, 100% NL en SUBLIME */
    .programmering-overig {
        display: none; 
    
        /* Grid programmering overzicht van overige zenders */
        @media screen and (min-width: 1100px) {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 1rem;
            width: 58vw;
            padding-top: 17rem;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }
}
```
### JS
In JavaScript wordt o.a. de `inert` vanuit HTML getoggled, samen met de class die de menu items zichtbaar maakt: 

```js
    // Hamburger navigatie in nav
    const navHamburger = document.querySelector("nav button");
    const navMenu = document.querySelector("nav ul");
    const navButton = document.querySelector(".nav-button img");
    
    navHamburger.addEventListener("click", toggleMenu);
    
    function toggleMenu() {
        navMenu.classList.toggle("showMenu");
        navButton.classList.toggle("showMenu");
    
        if (navMenu.hasAttribute("inert")) {
            navMenu.removeAttribute("inert");
        } else {
            navMenu.setAttribute("inert", true);
        }
    }
    
    // Hamburger als je resized
    function reportWindowSize() {
        const windowWidth = window.innerWidth;
    
        if (windowWidth >= 800) {
            navMenu.removeAttribute("inert");
        } else {
            navMenu.setAttribute("inert", true);
        }
    }
    
    // Checken als het schermbreedte verandert
    window.onresize = reportWindowSize;
    
    // Checken bij laden pagina
    reportWindowSize();
```

## Bronnen
* [Github Mediahuis](https://github.com/fdnd-agency/triple)
* [Stylesheet](https://github.com/vsheo/look-and-feel-styleguide)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
