import { LitElement, html, css } from 'lit';

class ClockComponentCustomizable extends LitElement {
  static properties = {
    timezone: { type: String },
    locales: { type: String },
    time: { type: String, state: true },
    type: { type: String },
    backgroundColor: { type: String },
    textColor: { type: String },
    borderColor: { type: String }
  };

  constructor() {
    super();
    this.locales = 'en-GB';
    this.timezone = 'Europe/Bucharest';
    this.textColor = '#000000'; // Default text color
    this.borderColor = '#000000'; // Default border color
    this.backgroundColor = 'pink'; // Default background color
    this.type = 'basic'; // Default type
  }

  connectedCallback() {
    super.connectedCallback();
    this.startTimer();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopTimer();
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  startTimer() {
    this.updateTime();
    this.timer = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: this.timezone };
    this.time = new Intl.DateTimeFormat(this.locales, options).format(new Date());
  }

  static styles = css`

    .clock {
      font-size: 24px;
      color: var(--text-color);
    }

    .border-solid, .border-dashed, .border-dotted, .border-background {
      border-radius: 10px;
    }

    .basic-clock, .border-solid, .border-dashed, .border-dotted, .border-background{
      width: 200px;
      height: fit-content;
      display: flex;
      justify-content: center;
    }

    .border-solid {
      border: 3px solid var(--border-color);
    }

    .border-dashed {
      border: 3px dashed var(--border-color);
    }

    .border-dotted {
      border: 3px dotted var(--border-color);
    }

    .border-background {
      border: 3px solid var(--border-color);
      background-color: var(--background-color);
    }

  `;

  renderCustomClock(borderClass) {
    return html`
      <div class="${borderClass}"
           style="--text-color: ${this.textColor}; --border-color: ${this.borderColor}; --background-color: ${this.backgroundColor};">
        <div class="clock">${this.time}</div>
      </div>
    `;
  }

  renderBasicClock() {
    return html`
      <div class="basic-clock"
           style="--text-color: ${this.textColor}; --border-color: ${this.borderColor}; --background-color: ${this.backgroundColor};">
        <div class="clock">${this.time}</div>
      </div>
    `;
  }

  render() {
    let content;
    switch (this.type) {
      case 'border-solid':
        content = this.renderCustomClock('border-solid');
        break;
      case 'border-dashed':
        content = this.renderCustomClock('border-dashed');
        break;
      case 'border-dotted':
        content = this.renderCustomClock('border-dotted');
        break;
      case 'border-background':
        content = this.renderCustomClock('border-background');
        break;
      default:
        content = this.renderBasicClock();
    }

    return content;
  }
}

customElements.define('clock-component-customizable', ClockComponentCustomizable);
