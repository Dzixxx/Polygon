import { Component, Input } from '@angular/core';

@Component({
	selector: 'polygon-button',
	template: `
		<button>{{ text }}</button>
	`,
	styleUrls: []
})
export class ButtonComponent {
    @Input() public readonly text: string;

	constructor() {
		console.log("ButtonComponent constructor");
	}
}
