import { createStore } from 'redux'

const reducer = (state = 0, action) => {
	switch (action.type) {
		case 'INC':
			return state + 1;
		case 'DEC':
			return state - 1;
		case 'RND':
			return action.value;
		default:
			return state;
	}
}

const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });
const rnd = (value) => ({ type: 'RND', value });

const store = createStore(reducer);

document.querySelector('#inc').addEventListener('click', () => {
	store.dispatch(inc());
});

document.querySelector('#dec').addEventListener('click', () => {
	store.dispatch(dec());
});

document.querySelector('#rnd').addEventListener('click', () => {
	const value = 0;
	store.dispatch(rnd(value));
});

const update = () => {
	document.querySelector('#counter').textContent = store.getState();
}


store.subscribe(update)



// store.dispatch({ type: 'INC' });
// store.dispatch({ type: 'INC' });
// store.dispatch({ type: 'INC' });




