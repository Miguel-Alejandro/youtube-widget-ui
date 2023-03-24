import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'y-search',
  styleUrl: 'y-search.css',
  shadow: true,
})
export class YSearch {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
