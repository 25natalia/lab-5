import './components/index';
import './screens/dashboard';
import styles from './components/product/product.css';
import getProduct from './services/getProducts';
import { Dashboard } from './screens/dashboard';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ``;

			const something = this.ownerDocument.createElement('app-dashboard') as Dashboard;
			this.shadowRoot?.appendChild(something);
		}
	}
}

customElements.define('app-container', AppContainer);
