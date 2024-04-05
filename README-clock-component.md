# ClockComponent
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

## CSS Custom Properties
### pinkThemePrimary
| Custom Property | Description | Default |
| ------------- | ------------- | ------------- |
| --clock-text-color | Color text | - ![#BB8493](https://placehold.co/15x15/BB8493/BB8493.png) `#BB8493` |
|--clock-border-color  | Color border  | - ![#BCA0BC](https://placehold.co/15x15/BCA0BC/BCA0BC.png) `#BCA0BC` |
| --clock-primary-bg-color | Color background  | - ![#fddde6](https://placehold.co/15x15/fddde6/fddde6.png) `#fddde6` |

### pinkThemeAccent
| Custom Property | Description | Default |
| ------------- | ------------- | ------------- |
| --clock-text-color | Color text | - ![#BB8493](https://placehold.co/15x15/BB8493/BB8493.png) `#BB8493` |
|--clock-border-color  | Color border  | - ![#BCA0BC](https://placehold.co/15x15/BCA0BC/BCA0BC.png) `#BCA0BC` |

### brightPinkThemePrimary
| Custom Property | Description | Default |
| ------------- | ------------- | ------------- |
| --clock-text-color | Color text | - ![#B0578D](https://placehold.co/15x15/B0578D/B0578D.png) `#B0578D` |
|--clock-border-color  | Color border  | - ![#E26EE5](https://placehold.co/15x15/E26EE5/E26EE5.png) `#E26EE5` |
| --clock-primary-bg-color | Color background  | - ![#F9B9F2](https://placehold.co/15x15/F9B9F2/F9B9F2.png) `#F9B9F2` |

### brightPinkThemeAccent
| Custom Property | Description | Default |
| ------------- | ------------- | ------------- |
| --clock-text-color | Color text | - ![#B0578D](https://placehold.co/15x15/B0578D/B0578D.png) `#B0578D` |
|--clock-border-color  | Color border  | - ![#E26EE5](https://placehold.co/15x15/E26EE5/E26EE5.png) `#E26EE5` |

### greenThemePrimary
| Custom Property | Description | Default |
| ------------- | ------------- | ------------- |
| --clock-text-color | Color text | - ![#114232](https://placehold.co/15x15/114232/114232.png) `#114232` |
|--clock-border-color  | Color border  | - ![#4A7C59](https://placehold.co/15x15/4A7C59/4A7C59.png) `#4A7C59` |
| --clock-primary-bg-color | Color background  | - ![#BFEA7C](https://placehold.co/15x15/BFEA7C/BFEA7C.png) `#BFEA7C` |

### greenThemeAccent
| Custom Property | Description | Default |
| ------------- | ------------- | ------------- |
| --clock-text-color | Color text | - ![#114232](https://placehold.co/15x15/114232/114232.png) `#114232` |
|--clock-border-color  | Color border  | - ![#4A7C59](https://placehold.co/15x15/4A7C59/4A7C59.png) `#4A7C59` |

### purpleThemePrimary
| Custom Property | Description | Default |
| ------------- | ------------- | ------------- |
| --clock-text-color | Color text | - ![#492E87](https://placehold.co/15x15/492E87/492E87.png) `#492E87` |
|--clock-border-color  | Color border  | - ![#8644A2](https://placehold.co/15x15/8644A2/8644A2.png) `#8644A2` |
| --clock-primary-bg-color | Color background  | - ![#C499F3](https://placehold.co/15x15/C499F3/C499F3.png) `#C499F3` |

### purpleThemeAccent
| Custom Property | Description | Default |
| ------------- | ------------- | ------------- |
| --clock-text-color | Color text | - ![#492E87](https://placehold.co/15x15/492E87/492E87.png) `#492E87` |
|--clock-border-color  | Color border  | - ![#8644A2](https://placehold.co/15x15/8644A2/8644A2.png) `#8644A2` |

### blueThemePrimary
| Custom Property | Description | Default |
| ------------- | ------------- | ------------- |
| --clock-text-color | Color text | - ![#0B60B0](https://placehold.co/15x15/0B60B0/0B60B0.png) `#0B60B0` |
|--clock-border-color  | Color border  | - ![#86B6F6](https://placehold.co/15x15/86B6F6/86B6F6.png) `#86B6F6` |
| --clock-primary-bg-color | Color background  | - ![#B4D4FF](https://placehold.co/15x15/B4D4FF/B4D4FF.png) `#B4D4FF` |

### blueThemeAccent
| Custom Property | Description | Default |
| ------------- | ------------- | ------------- |
| --clock-text-color | Color text | - ![#0B60B0](https://placehold.co/15x15/0B60B0/0B60B0.png) `#0B60B0` |
|--clock-border-color  | Color border  | - ![#86B6F6](https://placehold.co/15x15/86B6F6/86B6F6.png) `#86B6F6` |

### orangeThemePrimary
| Custom Property | Description | Default |
| ------------- | ------------- | ------------- |
| --clock-text-color | Color text | - ![#FC6736](https://placehold.co/15x15/FC6736/FC6736.png) `#FC6736` |
|--clock-border-color  | Color border  | - ![#F6995C](https://placehold.co/15x15/F6995C/F6995C.png) `#F6995C` |
| --clock-primary-bg-color | Color background  | - ![#FFC374](https://placehold.co/15x15/FFC374/FFC374.png) `#FFC374` |

### orangeThemeAccent
| Custom Property | Description | Default |
| ------------- | ------------- | ------------- |
| --clock-text-color | Color text | - ![#FC6736](https://placehold.co/15x15/FC6736/FC6736.png) `#FC6736` |
|--clock-border-color  | Color border  | - ![#F6995C](https://placehold.co/15x15/F6995C/F6995C.png) `#F6995C` |
