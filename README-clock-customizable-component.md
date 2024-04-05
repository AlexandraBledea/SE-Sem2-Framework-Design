# Clock Customizable Component
`ClockComponentCustomizable` is a web component built with LitElement that displays a clock. Users can customize time zone, locale, appearance (text color, border color, background color), and border style.

## Features
- Displays current time with customizable time zone and locale.
- Customizable text color, border color, and background color.
- Supports various border styles: solid, dashed and dotted.

## Public Properties

- **timezone**: String.
  - Default: `Europe/Bucharest`
  - Description:  Sets the time zone for the clock. For the complete list of timezones consult IANA Time Zone Database.

- **locales**: String
  - Default: `en-GB`
  - Description: Sets the locale for the clock format.

- **type**: String
  - Default: `basic`
  - Description: Determines the border style of the clock and can have the following values:
    - `basic`
    - `border-solid`
    - `border-dashed`
    - `border-dotted`

- **backgroundColor**: String
  - Default: `pink`
  - Description: Sets the background color of the clock.

- **textColor**: String
  - Default: `#000000`
  - Description: Sets the text color of the clock

- **borderColor**: String
  - Default: `#000000`
  - Description: Sets the border color.

## Internal (Private) Properties

- **time**: String
  - Description: Holds the current time string. This property is internal and updated every second.


## Methods

- **startTimer()**
  - Description:  Initializes the clock, updating the time every second.

- **stopTimer()**
  - Description: Stops the clock.

- **updateTime()**
  - Description: Updates the `time` property with the current time based on the set `timezone` and `locales`.


## Rendering

- **render()**
  - Description: This is the primary rendering method. It decides which type of clock to display based on the `type` property. It can render a basic clock or a custom clock with different borders based on this property.

## Usage
To use 'ClockComponentCustomizable' in your HTML:
```html
<clock-component-customizable></clock-component-customizable>
```

## Customization
### Examples
```html
<clock-component-customizable timezone="America/New_York" locales="en-US" type="border-dashed" background-color="#FFFFFF" text-color="#333333" border-color="#FF0000"></clock-component-customizable>
```
