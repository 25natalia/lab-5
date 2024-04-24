import styles from './ShoppingCartItem.css';

export enum AttributeCart {
	'image' = 'image',
	'titlee' = 'titlee',
	'price' = 'price',
}

export default class CartItem extends HTMLElement {
	image?: string;
	titlee?: string;
	price?: string;

	static get observedAttributes() {
		const attrs: Record<AttributeCart, null> = {
			image: null,
			titlee: null,
			price: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: AttributeCart, _: unknown, newValue: string) {
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
    <h2>Type:${this.price}</h2>
    </section>`;
		}
		const cssCartItem = this.ownerDocument.createElement('style');
		cssCartItem.innerHTML = styles;
		this.shadowRoot?.appendChild(cssCartItem);
	}
}
