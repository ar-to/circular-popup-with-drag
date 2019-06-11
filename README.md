# circular-popup-with-drag

A menu popup that can be dragged

## To Include in Development

- Typescript - done
- Babel
- Webpack - done
- EsLint
- TsLint
- Cypress EsLint Plugin
- Sass - done
- normalize-css - done
- modernizr
- optimize/minimize css and vendor files for production
- standarize font-sizes in sass via typography library; consider https://github.com/twbs/rfs
- Lighthouse Audit package and run test
- setup https://esdoc.org/ to create docs in html from source code; 
- refer to https://github.com/ReactiveX/rxjs for docs and open source setup

## Issues

- sass copies styles from parent but it makes the selectors too long. Find a way to make them simple and possibly have webpack bundle them into separate files so users can load only a small independent file if they want to keep the size small.

## Dev Start

in separate terminal windows run

```
#start dev server, watch for changes in sass, js files inside src/ directory and hot reload
npm run dev
#run cypress end-to-end tests
npm run e2e
#run jest unit & intergration tests
npm run test
```

## Styles

Dev uses sass but css files are also supported. Hot reloading and source maps are included.

## Javascript

Uses typescript and es6

## Instructions

Nav v1 is static with v2 beign class `menu-container--static-v2`

```
<nav id="menu" class="menu-container--static fa">
  <ul class="dropdown mg--ease">
    <li><a href="#">One</a></li>
    <li>
      <a href="#">Two</a>
      <ul class="dropdown mg--ease">
        <li><a href="#">Sub-1</a></li>
        <li><a href="#">Sub-2</a></li>
        <li><a href="#">Sub-3</a></li>
        <li><a href="#">Sub-1</a></li>
        <li><a href="#">Sub-2</a></li>
        <li><a href="#">Sub-3</a></li>
        <li><a href="#">Sub-1</a></li>
        <li><a href="#">Sub-2</a></li>
        <li><a href="#">Sub-3</a></li>
      </ul>
    </li>
    <li><a href="#">Three</a></li>
  </ul>
</nav>
```
