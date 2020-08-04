import { Component } from '@angular/core';

@Component({
	selector: 'polygon-root',
	template: `
		<p class="test-class">Root Component (with router outlet lvl 0)</p>
		<router-outlet></router-outlet>
	`,
	styleUrls: ["./root.component.scss"]
})
export class RootComponent {
	constructor() {
		console.log("RootComponent constructor");
	}
}
