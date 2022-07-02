import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'raven-hls',
  styleUrl: 'raven-hls.css',
  shadow: true,
})
export class RavenHls {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
