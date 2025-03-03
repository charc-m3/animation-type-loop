# Type Loop Animation

A module to help create a typing animation on webpages, where each word in a list are typed out and then deleted repeatedly.

The module achieves the animation by directly modifying the `textContent` of the given HTMLElement. The animation can be paused and resumed by calling `pause()` and `resume()` on the returned object.

## Usage

```js
startAnimation(element: HTMLELement, words: [String], [typeDelay: Number(ms), delDelay: Number(ms), displayDelay: Number(ms)])
```

## Example

```js
import { startAnimation } from './animation-type-words.js';
const animation = startAnimation(document.getElementById('target_span'), [
	'apple',
	'banana',
	'cherry',
]);
document.getElementById('pause_button').onclick = () => animation.pause();
document.getElementById('resume_button').onclick = () => animation.resume();
```
