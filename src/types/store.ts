import { ApiType } from './products';
import { ApiTypeAdded } from './added';

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	products: ApiType[];
	favorites: ApiTypeAdded[];
};

//tipar acciones
export enum ProductsActions {
	'get' = 'get',
}

// action lo que hago y payload lo que voy a cambiar
export interface GetProductsAction {
	action: ProductsActions.get;
	payload: ApiType[];
}

//hay que hacer uno para cada uno, dos arreglos diferentes
export enum FavoritesActions {
	'getfavorites' = 'getfavorites',
}

export interface GetFavoritesAction {
	action: FavoritesActions.getfavorites;
	payload: ApiTypeAdded;
}

export type Actions = GetFavoritesAction | GetProductsAction;
