# bigtext-cli

This TUI app lets users interactively specify a color and text, then displays the text in large font with the chosen color.

## Features
- Interactive prompts for color and text
- Displays text in big font with selected color

## Available Colors

**Standard terminal colors:**
- black, red, green, yellow, blue, magenta, cyan, white
- gray/grey, redBright, greenBright, yellowBright, blueBright, magentaBright, cyanBright, whiteBright

**Hex colors:**
- Any hex format like `#FF5733`, `#00FF00`, etc.

**RGB format:**
- `rgb(255, 87, 51)`

## Usage
1. Run the app.
2. Enter your desired color and text when prompted.
3. The app will display your text in big font using the specified color.

## Requirements
- Node.js
- Supported terminal with color display

## Example
```
$ npm start
Enter color: red
Enter text: Hello

[Displays "Hello" in big red font]
```
