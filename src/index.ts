import './components/index';
import './screens/dashboard';
import styles from './components/product/product.css'
import  getProduct  from './services/getProducts';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	async connectedCallback() {
		const data = await getProduct()
		console.log
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ``;

			const something = this.ownerDocument.createElement('app-dashboard');
			this.shadowRoot?.appendChild(something);
		}
	}
}

customElements.define('app-container', AppContainer);
