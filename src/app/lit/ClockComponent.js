import {LitElement, html, css} from 'lit';

class ClockComponent extends LitElement {
  static properties = {
    timezone: {type: String},
    locales: {type: String},
    time: {type: String, state: true},
    type: {type: String},
  };

  constructor() {
    super();
    this.locales = 'en-GB';
    this.timezone = 'Europe/Bucharest';
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
    if (this.timer) {
      clearInterval(this.timer); // Ensure no timer is already running
    }
    this.updateTime();
    this.timer = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    const options = {hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: this.timezone};
    this.time = new Intl.DateTimeFormat(this.locales, options).format(new Date());
  }

  static styles = css`

    /* Define default theme variables */

    :host {
      --clock-text-color: #000;
      --clock-border-color: #000;
      --clock-primary-bg-color: #fff;
    }

    .clock {
      color: var(--clock-text-color);
      border-color: var(--clock-border-color);
      background-color: var(--clock-primary-bg-color);
      font-size: 24px;
      width: 200px;
      height: fit-content;
      display: flex;
      justify-content: center;
      border-radius: 10px;
      border-width: 3px;
      border-style: solid;
    }

    /* Theme-specific styles using CSS variables */

    .themePrimary .clock,
    .themeAccent .clock {
      color: var(--clock-text-color);
      border-color: var(--clock-border-color);
    }

    /* Specific background colors for primary theme variants */

    .themePrimary .clock {
      background-color: var(--clock-primary-bg-color);
    }

    /* Specific themes */

    .defaultTheme {

    }

    .pinkThemePrimary, .pinkThemeAccent {
      --clock-text-color: #BB8493;
      --clock-border-color: #BCA0BC;
      --clock-primary-bg-color: #fddde6;
    }

    .brightPinkThemePrimary, .brightPinkThemeAccent {
      --clock-text-color: #B0578D;
      --clock-border-color: #E26EE5;
      --clock-primary-bg-color: #F9B9F2; /* Adjust if brightThemePrimary is a typo */
    }

    .greenThemePrimary, .greenThemeAccent {
      --clock-text-color: #114232;
      --clock-border-color: #4A7C59;
      --clock-primary-bg-color: #BFEA7C;
    }

    .purpleThemePrimary, .purpleThemeAccent {
      --clock-text-color: #492E87;
      --clock-border-color: #8644A2;
      --clock-primary-bg-color: #C499F3;
    }

    .blueThemePrimary, .blueThemeAccent {
      --clock-text-color: #0B60B0;
      --clock-border-color: #86B6F6;
      --clock-primary-bg-color: #B4D4FF;
    }

    .orangeThemePrimary, .orangeThemeAccent {
      --clock-text-color: #FC6736;
      --clock-border-color: #F6995C;
      --clock-primary-bg-color: #FFC374;
    }

  `;

  renderCustomClock(themeClass){
    // Determine if the theme is primary or accent based on the type
    const themeType = themeClass.includes('Primary') ? 'themePrimary' : 'themeAccent';
    return html`
        <div class="${themeType} ${themeClass}">
          <div class="clock">${this.time}</div>
        </div>
      `;
  }

  renderDefaultClock(){
    return html`
        <div>
          <div class="clock">${this.time}</div>
        </div>
      `;
  }

  render() {
    return this.type ? this.renderCustomClock(this.type) : this.renderDefaultClock();
  }

}

customElements.define('clock-component', ClockComponent);
