import { Component, Host, h, Prop, Element, State } from '@stencil/core';
import Hls from 'hls.js';

@Component({
  tag: 'raven-hls',
  styleUrl: 'raven-hls.css',
  shadow: true,
})
export class RavenHls {
  @Element()
  element: HTMLElement;

  /* -------------------------------------------------------------------------- */
  /*                                 Properties                                 */
  /* -------------------------------------------------------------------------- */

  @Prop()
  src: string | null = null;

  @Prop()
  title: string = '';

  @Prop()
  autoplay: boolean = false;

  /* -------------------------------------------------------------------------- */
  /*                                    State                                   */
  /* -------------------------------------------------------------------------- */

  @State()
  playSpeed: 0 | -0.15 | -0.75 | 1.75 | 2 = 0;

  @State()
  hlsIsSupported: boolean = true;

  /* -------------------------------------------------------------------------- */
  /*                                   Fields                                   */
  /* -------------------------------------------------------------------------- */

  _hls: Hls;
  _htmlVideoElement: HTMLVideoElement;

  /* -------------------------------------------------------------------------- */
  /*                                   Events                                   */
  /* -------------------------------------------------------------------------- */

  // null

  /* -------------------------------------------------------------------------- */
  /*                                 Live cycle                                 */
  /* -------------------------------------------------------------------------- */

  connectedCallback() {
    console.log('connectedCallback()');
  }

  componentWillLoad() {
    console.log('componentWillLoad()');
  }

  componentWillRender() {
    console.log('componentWillRender()');
  }

  //! DOM element ready!
  componentDidRender() {
    console.log('componentDidRender()');

    this._hls = new Hls();

    this._htmlVideoElement = this.element.shadowRoot.querySelector('video.raven-hls__video');

    this._hls.attachMedia(this._htmlVideoElement); // Attach media
    this._hls.loadSource(this.src);
  }

  componentDidLoad() {
    console.log('componentDidLoad()');
  }

  /* -------------------------------------------------------------------------- */
  /*                                   Render                                   */
  /* -------------------------------------------------------------------------- */

  render() {
    return (
      <Host>
        <slot>
          {this.hlsIsSupported ? null : <p>You browser not support HLS</p>}
          <div class="raven-hls">
            <video controls class="raven-hls__video"></video>
            {/* <div class="raven-hls__controls-overlay">
              <input type="range" class="raven-hls__progress" />
              <div class="raven-hls__controls-group">
                <div class="raven-hls__controls">
                  <button class="raven-hls__play-btn">play</button>
                  <button class="raven-hls__pause-btn">pause</button>
                  <input type="range" class="raven-hls__volume-control"></input>
                </div>
                <div class="raven-hls__controls">
                  <select name="Speed" class="raven-hls__speed-control">
                    <option value="">Normal</option>
                    <option value="">0.15</option>
                    <option value="">0.25</option>
                    <option value="">1.75X</option>
                    <option value="">2X</option>
                  </select>
                </div>
              </div>
            </div> */}
          </div>
        </slot>
      </Host>
    );
  }
}
