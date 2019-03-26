import { LitElement, html, css } from 'lit-element';

class MyElement extends LitElement {
  static get styles() {
    return css``;
  }
  render() {
    return html`
      <span>More inheritance</span>
    `;
  }
}
customElements.define('my-element', MyElement);
