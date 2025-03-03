export function startAnimation(element, words, typeDelay = 50, delDelay = 50, displayDelay = 1000) {
	const controller = new animationController();
	animate(element, words, typeDelay, delDelay, displayDelay, controller);
	return controller;
}

class animationController {
	constructor() {
		this.paused = false;
		this.resumeListener = () => {};
	}
	pause() {
		this.paused = true;
	}
	resume() {
		this.paused = false;
		this.resumeListener();
	}
}

async function animate(element, words, typeDelay, delDelay, displayDelay, controller) {
	element.textContent = '';
	while (true) {
		for (const word of words) {
			let i = 0;
			while (i < word.length) {
				i++;
				await delay(typeDelay);
				if (controller.paused) {
					await new Promise(resolve => {
						controller.resumeListener = resolve;
					});
				}
				type(element, word, i);
			}
			await delay(displayDelay);
			while (i > 0) {
				i--;
				await delay(delDelay);
				if (controller.paused) {
					await new Promise(resolve => {
						controller.resumeListener = resolve;
					});
				}
				type(element, word, i);
			}
		}
	}
}

function type(element, word, i) {
	element.textContent = word.slice(0, i);
}

function delay(ms) {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	});
}
