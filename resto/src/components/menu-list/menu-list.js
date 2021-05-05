import React, { Component } from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import { menuLoaded, menuRequested, menuError, addedToCard } from '../../actions';
import Spinner from '../spinner';
import Error from '../error'

import './menu-list.scss';

class MenuList extends Component {

	componentDidMount() {

		this.props.menuRequested();

		const { RestoService } = this.props;
		RestoService.getMenuItems()
			.then(res => this.props.menuLoaded(res))
			.catch(error => this.props.menuError())
	}

	render() {
		const { menuItems, loading, error, addedToCard } = this.props;
		if (error) {
			return <Error />
		}
		if (loading) {
			return <Spinner />
		}

		return (
			<ul className="menu__list">
				{
					menuItems.map(menuItem => {
						return <MenuListItem
							key={menuItem.id}
							menuItem={menuItem}
							onAddToCard={() => addedToCard(menuItem.id)} />
					})
				}
			</ul>
		)
	}
};

const mapStateToProps = (state) => {
	return {
		menuItems: state.menu,
		loading: state.loading,
		error: state.error,

	}
}

const mapDispathToProps = {
	menuLoaded,
	menuRequested,
	menuError,
	addedToCard
};

export default WithRestoService()(connect(mapStateToProps, mapDispathToProps)(MenuList));