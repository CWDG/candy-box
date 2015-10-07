# Candy Box

The goal of this challenge is to create a game like [this one](http://candies.aniwey.net/).

## Usage

All of your JavaScript code should go in `js/game.js`. It's mostly blank, have fun!

I have already given you an element with id "candy-counter". It should be used to show the candy count!

### Adapter.js

I have provided `js/adapter.js` to interface with the DOM. You should not have to modify it to complete this project (but if you have improvements I'd be interested to see them!). The `adapter.js` file defines these functions:

| Name | Description |
|------|-------------|
| `GAME.addButton(id, text, handler)` | Adds a button to the page. `id` is a unique identifier for this button, `text` is the button text, and `handler` is the event handler for when the button is pressed. |
| `GAME.disableButton(id)` | Disables the button with the id `id` |
| `GAME.enableButton(id)` | Enables the button with the id `id` |
| `GAME.addTextBox(id, text)` | Adds text to the page with unique id `id` and text `text` |
| `GAME.hasItem(id)` | Returns `true` or `false` depending on whether the DOM has an element with that `id` or not |
| `GAME.removeElement(id)` | Removes the element with id `id` |
| `GAME.removeHandler(id, handler)` | Removes the provided handler from the element with the given `id` |
| `GAME.addHandler(id, handler)` | Adds the provided handler from the element with the given `id` |
| `GAME.changeHandler(id, oldHandler, newHandler)` | Removes the old handler and adds the new handler to the element with the given `id` |
| `GAME.setText(id, text)` | Sets the text of the element with id `id`, regardless whether it's a button or text element |

## Requirements

Have fun!

## How to Contribute

1. Fork this repository
2. Clone your fork
3. Make your changes and commit them
4. Push your changes to your fork
5. Send us a pull request!
