import './components/index';
import './screens/dashboard';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		const something = this.ownerDocument.createElement('app-dasboard');
		this.shadowRoot?.appendChild(something);
	}
}

customElements.define('app-container', AppContainer);
