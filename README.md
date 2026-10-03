# Mr. Burger

A responsive burger restaurant website built in August 2017 as a course project for Loftschool's “Web Development for Beginners” course. Mentor: Yuriy Kuchma.

The JavaScript and Google Maps integration were modernized in 2026 while preserving the original design.

[Live demo](https://irynalypnyk.github.io/mister_burger/)

## Technologies

HTML5, CSS3, Flexbox, Sass (SCSS), SVG, JavaScript, and responsive design.

The interface runs without jQuery, MobileDetect, or TouchSwipe. The Google Maps JavaScript API remains an external JavaScript dependency. This repository does not include AJAX form submission or a PHP backend.

## Features

- Section navigation through links, navigation dots, the mouse wheel, arrow keys, and vertical swipes.
- A burger slider with wraparound navigation.
- Team and menu accordions.
- A mobile menu that closes when a section is selected or Escape is pressed.
- An interactive map with three custom branded markers.


## Project structure and styles

- `index.html` — page markup and script references.
- `scss/` — Sass source styles.
- `css/main.css` — compiled stylesheet used by the page.
- `js/main.js` — section navigation, gestures, and the team accordion.
- `js/modules/` — slider, mobile menu, menu accordion, and map.
- `tests/navigation.test.cjs` — navigation logic checks.

The repository retains its Prepros 6 configuration (`prepros-6.config`). After editing SCSS, recompile `scss/main.scss` into `css/main.css`; browsers do not read SCSS directly. There is no automated npm build pipeline.

## Google Maps

The map loads asynchronously through `initMap` and uses `AdvancedMarkerElement`. A custom Map ID is already configured in the `data-map-id` attribute of the `#map` container in `index.html`. `DEMO_MAP_ID` is used only as a fallback when the attribute is absent.

The API key is set in the Google Maps script URL in `index.html`. Configure website and API restrictions for this key in Google Cloud. The local server above requires `http://127.0.0.1:8000/*` to be allowed; the deployed site requires its own domain to be allowed.

The map's appearance is controlled by the published style associated with its Map ID in Google Cloud. The `js/modules/map-style.json` file preserves the original yellow and gray theme in Legacy JSON format for import. Google converts it to the newer format, so review the appearance after importing, save the style, and associate it with the Map ID. The site does not automatically load this JSON file.

Google documentation: [API key restrictions](https://developers.google.com/maps/api-security-best-practices), [JSON style import](https://developers.google.com/maps/documentation/javascript/cloud-customization/json), and [Advanced Markers](https://developers.google.com/maps/documentation/javascript/advanced-markers/migration).

## Checks

The checks require Node.js. Run from the project root:

```sh
node tests/navigation.test.cjs
```

The test covers swipe logic; ignoring short, horizontal, cancelled, and multi-touch gestures; preserving form and map interactions; keyboard navigation; and section boundaries. It uses a simulated DOM and does not replace testing on a real touchscreen device.

## Demo limitations

- The order form is not connected to a server and does not submit orders.
- The review “Read more” links and social links remain placeholders.
- Text, addresses, and other content are retained from the original course project and do not represent current information about an operating restaurant.
