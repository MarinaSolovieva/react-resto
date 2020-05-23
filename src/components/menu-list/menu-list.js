import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import './menu-list.scss';
import {connect} from "react-redux";
import WithRestoService from "../hoc";
import {menuLoaded, menuRequested} from "../../actions";
import Spinner from "../spinner";

class MenuList extends Component {

    componentDidMount() {
        const {RestoService, menuLoaded, menuRequested} = this.props;
        menuRequested();
        RestoService.getMenuItems()
            .then(res => menuLoaded(res))
            .catch(err => console.log("Произошла ошибка"))

    }

    render() {
        const {menuItems, loading} = this.props;
        return (
            <>
            {
                loading
                ? <Spinner/>
                : <ul className="menu__list">
                    {
                        menuItems.map(menuItem => {
                            return <MenuListItem key={menuItem.id} menuItem={menuItem}/>
                        })
                    }
                </ul>
            }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        menuItems: state.menu,
        loading: state.loading
    }
};

const mapDispatchToProps = {
    menuLoaded,
    menuRequested
};
export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));