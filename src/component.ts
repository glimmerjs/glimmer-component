import { Simple } from '@glimmer/runtime';

export interface ComponentArgs {
  [key: string]: any;
}

/**
 * The `Component` class defines an encapsulated UI element that is rendered to
 * the DOM. It includes lifecycle hooks that allow you to respond to the
 * component being created, rendered, updated and destroyed. It also contains
 * the data you wish to render in the component's template, as well as methods
 * for responding to user interaction.
 */
class Component {
  /**  */
  element: Simple.Element = null;
  /** Development-mode only name of the component, useful for debugging. */
  debugName: string = null;

  /** Named arguments passed to the component from its parent component. */
  args: ComponentArgs;

  static create(injections: any) {
    return new this(injections);
  }

  constructor(options: object) {
    Object.assign(this, options);
  }

  /**
   * The `didInsertElement()` hook is called on a component after its template
   * has been rendered and inserted into the DOM. Any direct access to the DOM
   * your component does should occur only *after* `didInsertElement()` was
   * called.
   *
   * Once `didInsertElement()` is called, you can safely access the component's
   * `element` property, which contains the DOM element backing the component.
   *
   * @category Lifecycle Hooks
   */
  didInsertElement() { }

  /**
   * The `didUpdate()` lifecycle hook is called after a component has
   * re-rendered, or one of the arguments (`args)` passed by the parent
   * component has changed. It is *not* called on initial render.
   *
   * @category Lifecycle Hooks
   */
  didUpdate() { }

  toString() {
    return `${this.debugName} component`;
  }
}

export default Component;

export interface ComponentFactory {
  create(injections: object): Component;
}
