![image](https://github.com/AlexandraBledea/SE-Sem2-Framework-Design/assets/72063091/13e05fd7-1142-4275-86c1-0c5be2e6ad26)# Clock  Component
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
  - Description: etermines which render method to invoke based on the `type` property.

- **renderDefaultClock()**
  - Description: Renders the clock without any specific theme applied, using default styling.
    
- **renderCustomClock()**
  - Description: Renders the clock with the specified theme class, applying the corresponding styling.
    
## Usage
To use 'ClockComponentCustomizable' in your HTML:
```html
<clock-component></clock-component>
```
![image](https://github.com/AlexandraBledea/SE-Sem2-Framework-Design/assets/72063091/09cc52e3-a763-4e05-9550-624df66ad587)

## Customization
### Examples
1. Blue Theme Primary
```html
<clock-component type="blueThemePrimary" locales="en-GB" timezone="Europe/Bucharest"></clock-component>
```
![image](https://github.com/AlexandraBledea/SE-Sem2-Framework-Design/assets/72063091/e712176b-1f8a-4046-a17a-43c94f9b324a)

2. Blue Theme Accent
```html
<clock-component type="blueThemeAccent" locales="en-GB" timezone="Europe/Bucharest"></clock-component>
```
![image](https://github.com/AlexandraBledea/SE-Sem2-Framework-Design/assets/72063091/cd36ea67-0c34-43e3-ae82-d7fc4099f073)

3. Pink Theme Primary
```html
<clock-component type="pinkThemePrimary" locales="en-GB" timezone="Europe/Bucharest"></clock-component>
```
![image](https://github.com/AlexandraBledea/SE-Sem2-Framework-Design/assets/72063091/0aedb587-9219-495a-889e-91b8ff94d1bb)

4. Pink Theme Accent
```html
<clock-component type="pinkThemeAccent" locales="en-GB" timezone="Europe/Bucharest"></clock-component>
```
![image](https://github.com/AlexandraBledea/SE-Sem2-Framework-Design/assets/72063091/37db017b-d8ae-4fa6-b5c2-f66a2581f933)

5. Bright Pink Theme Primary
```html
<clock-component type="brightPinkThemePrimary" locales="en-GB" timezone="Europe/Bucharest"></clock-component>
```
![image](https://github.com/AlexandraBledea/SE-Sem2-Framework-Design/assets/72063091/a1d78266-f701-47c2-a2fa-b0d5d1b5c90f)

6. Bright Pink Theme Accent
```html
<clock-component type="brightPinkThemeAccent" locales="en-GB" timezone="Europe/Bucharest"></clock-component>
```
![image](https://github.com/AlexandraBledea/SE-Sem2-Framework-Design/assets/72063091/3d995e00-73b5-4fb6-9ca8-d25cfc637f65)

7. Purple Theme Primar
```html
<clock-component type="purpleThemePrimary" locales="en-GB" timezone="Europe/Bucharest"></clock-component>
```
![image](https://github.com/AlexandraBledea/SE-Sem2-Framework-Design/assets/72063091/15ef5f45-3ba9-4261-907e-0224e7310050)


8. Purple Theme Accent
```html
<clock-component type="purpleThemeAccent" locales="en-GB" timezone="Europe/Bucharest"></clock-component>
```
![image](https://github.com/AlexandraBledea/SE-Sem2-Framework-Design/assets/72063091/4dd25f58-e955-479a-a77f-727585d59182)

9. Orange Theme Primary
```html
<clock-component type="orangeThemePrimary" locales="en-GB" timezone="Europe/Bucharest"></clock-component>
```
![image](https://github.com/AlexandraBledea/SE-Sem2-Framework-Design/assets/72063091/c30785f1-8b25-4e3a-8aa7-0e114292b48b)

10. Orange Theme Accent
```html
<clock-component type="orangeThemeAccent" locales="en-GB" timezone="Europe/Bucharest"></clock-component>
```
![image](https://github.com/AlexandraBledea/SE-Sem2-Framework-Design/assets/72063091/06b1cf4d-ef41-4597-a57c-a6982d714d23)

11. Green Theme Primary
```html
<clock-component type="greenThemePrimary" locales="en-GB" timezone="Europe/Bucharest"></clock-component>
```
![image](https://github.com/AlexandraBledea/SE-Sem2-Framework-Design/assets/72063091/fc876878-c13e-4fd8-a6ca-a1c64752c741)

12. Green Theme Accent
```html
<clock-component type="greenThemeAccent" locales="en-GB" timezone="Europe/Bucharest"></clock-component>
```
![image](https://github.com/AlexandraBledea/SE-Sem2-Framework-Design/assets/72063091/3a3f2844-2261-40fa-b937-900f858ef261)
