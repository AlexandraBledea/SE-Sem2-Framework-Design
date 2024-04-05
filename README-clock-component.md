# Clock  Component
`ClockComponent` is a LitElement-based web component that displays a clock, which can be customized in terms of time zone, locale, and theme.

## Features
- Displays the current time, updating every second.
- Customizable time zone and locale settings.
- Supports multiple theme variations for customization.

## Public Properties

- **timezone**: String.
  - Default: `Europe/Bucharest`
  - Description:  Sets the time zone for the clock. For the complete list of timezones consult IANA Time Zone Database.

- **locales**: String
  - Default: `en-GB`
  - Description: Sets the locale for the clock format.

- **type**: String
  - Default: `basic`
  - Description: Determines the theme of the clock and can have the following values:
    - `pinkThemePrimary`
    - `pinkThemeAccent`
    - `brightPinkThemePrimary`
    - `brightPinkThemeAccent`
    - `brightPinkThemePrimary`
    - `greenThemePrimary`
    - `greenThemeAccent`
    - `purpleThemePrimary`
    - `purpleThemeAccent`
    - `blueThemePrimary`
    - `blueThemeAccent`
    - `orangeThemePrimary`
    - `orangeThemeAccent`
    - `basic`
      
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
