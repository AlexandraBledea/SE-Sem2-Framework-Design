import {css, html, LitElement} from "lit";

class CustomButton extends LitElement {
  static styles = css`
    button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <button @click="${this.handleClick}">
        <slot></slot>
      </button>
    `;
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent('custom-click'));
  }
}

customElements.define('custom-button', CustomButton);
