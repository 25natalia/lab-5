import styles from './product.css';
import { dispatch } from '../../store/index';
import { SaveShoppingCartItem } from '../../store/actions';

export enum Attribute {
	'button' = 'button',
	'image' = 'image',
	'titlee' = 'titlee',
	'description' = 'description',
	'category' = 'category',
	'price' = 'price',
	'rating' = 'rating',
}

export default class Product extends HTMLElement {
	button?: string;
	image?: string;
	titlee?: string;
	description?: string;
	category?: string;
	price?: string;
	rating?: string;

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			button: null,
			image: null,
			titlee: null,
			description: null,
			category: null,
			price: null,
			rating: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: Attribute, _: unknown, newValue: string) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `

  <section>
  <h1>${this.titlee}</h1>
  <img src='${this.image}'></img>
  <h3> ${this.description}</h3>
  <h3>Category: ${this.category}</h3>
  <h2>$${this.price}</h2>
  <img src='${this.rating}'></img>
	<button class="add">Add</button>
  </section>`;
			const AddButton = this.shadowRoot.querySelector('.add');
			if (AddButton) {
				AddButton.addEventListener('click', () => {
					dispatch(SaveShoppingCartItem({ titlee: this.titlee, image: this.image, price: this.price }));
				});
			}
		}
		const cssProduct = this.ownerDocument.createElement('style');
		cssProduct.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProduct);
	}
}

customElements.define('app-product', Product);
