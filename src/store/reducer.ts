import { Actions, AppState, FavoritesActions, ProductsActions } from '../types/store';
import { appState } from './index';

// acciones

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
	const { action, payload } = currentAction;
	console.log(currentState.favorites);


//retorna lo que ya esta
	switch (action) {
		case ProductsActions.get:
			return {
				...currentState,
				products: payload,
			};

		case FavoritesActions.getfavorites:
			return {
				...currentState,
				favorites: [...currentState.favorites, payload],
			};

		default:
			return currentState;
	}
};
