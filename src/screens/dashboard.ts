import {getProduct} from "../services/getProducts"

class Dashboard extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode:"open"})
  }

  async connectCallback(){
    const data = await getProduct
    this.render (data)
  }

  render (data:any){
    if(this.shadowRoot) this.shadowRoot.innerHTML='';
    data.forEach(element => {
      
    });
  }
}
