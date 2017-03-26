# @glimmer/component [![Build Status](https://secure.travis-ci.org/glimmerjs/glimmer-component.svg?branch=master)](http://travis-ci.org/glimmerjs/glimmer-component)

The core TypeScript and JavaScript API for creating UI components in Glimmer
applications.

## Glimmer Components

Components are the key feature that makes Glimmer so powerful for building web
applications. They allow you to create reusable and encapsulated UI elements
that are configurable, fast and easy to reason about.

A component is made up of a Handlebars template, which defines what HTML gets
rendered on the page, as well as an optional JavaScript class which defines the
behavior of that component.

### A Basic Component

Glimmer uses [JavaScript
classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
for its component API. By adopting the most modern JavaScript features, Glimmer
can significantly reduce library size and API surface area.

To define a new component, import the `Component` base class from `@glimmer/component`:

```ts
import Component from '@glimmer/component';

export default class extends Component {

}
```

## Acknowledgements

Thanks to [Monegraph](http://monegraph.com) for funding the initial development
of this library.

## License

MIT License.
