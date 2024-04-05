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

## Lifecycle Methods

- **connectedCallback()**
  - Description:  Invoked when the component is added to the document's DOM, starting the timer.

- **disconnectedCallback()**
  - Description:  Invoked when the component is removed from the document's DOM, stopping the timer.

## Methods

- **startTimer()**
  - Description:  Initiates the timer to update the clock every second.

- **stopTimer()**
  - Description: Clears the existing timer, stopping the clock updates.

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
<clock-component-customizable timezone="America/New_York" locales="en-US"
                              type="border-dashed" backgroundColor="#FFFFFF"
                              textColor="#333333" borderColor="#FF0000"></clock-component-customizable>
```
![image](https://github.com/AlexandraBledea/SE-Sem2-Framework-Design/assets/72063091/21bc839a-4274-4615-9c9c-302e497616b1)

```html
<clock-component-customizable timezone="America/New_York" locales="en-GB"
                              type="border-dotted" textColor="blue"
                              borderColor="purple"></clock-component-customizable>
```
![image](https://github.com/AlexandraBledea/SE-Sem2-Framework-Design/assets/72063091/97efc028-2519-43f3-b207-1722a21946e8)

```html
<clock-component-customizable timezone="America/New_York" locales="en-GB"
                              type="border-dotted" textColor="blue"
                              borderColor="purple"></clock-component-customizable>
```
![image](https://github.com/AlexandraBledea/SE-Sem2-Framework-Design/assets/72063091/0892c786-00ac-4998-913a-36f0d65ca06c)

```html
<clock-component-customizable timezone="America/New_York" locales="en-GB"></clock-component-customizable>
```
![image](https://github.com/AlexandraBledea/SE-Sem2-Framework-Design/assets/72063091/5ccbd642-2260-44cf-9c01-140abdf2e2d0)

```html
<clock-component-customizable type="border-dashed" textColor="#FAF3DD" borderColor="black"
                              backgroundColor="#68B0AB" locales="en-GB"
                              timezone="Europe/Bucharest"></clock-component-customizable>
```
![image](https://github.com/AlexandraBledea/SE-Sem2-Framework-Design/assets/72063091/0de3cad7-cdcf-45c2-abb2-bbdbcc2c5af4)
