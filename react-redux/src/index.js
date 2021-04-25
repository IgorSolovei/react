import { createStore } from 'redux'

const reducer = (state = 0, action) => {
	switch (action.type) {
		case 'INC':
			return state + 1;
		case 'DEC':
			return state - 1;
		case 'RES':
			return 0;
		default:
			return state;
	}
}

const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });
const rnd = (value) => ({ type: 'RES', value });

const store = createStore(reducer);

document.querySelector('#inc').addEventListener('click', () => {
	store.dispatch(inc());
});

document.querySelector('#dec').addEventListener('click', () => {
	store.dispatch(dec());
});

document.querySelector('#res').addEventListener('click', () => {

	store.dispatch(rnd());
});

const update = () => {
	document.querySelector('#counter').textContent = store.getState();
}


store.subscribe(update)



// store.dispatch({ type: 'INC' });
// store.dispatch({ type: 'INC' });
// store.dispatch({ type: 'INC' });




