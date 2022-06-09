import m from './SideBar.module.css'
import {NavLink} from "react-router-dom";

function SideBar() {
    return (
        <div className={m.SideBar}>
            <nav className={m.top_menu}>
                <ul className={m.MenuMain}>
                    <li className={m.Text}>
                        <NavLink to={'/profile'}>
                            Профиль
                        </NavLink>
                    </li>
                    <li className={m.Text}>
                        <NavLink to={'/dialogs'}>
                            Сообщения
                        </NavLink>
                    </li>
                    <li className={m.Text}>
                        <NavLink to={''}>
                            Музыка
                        </NavLink>
                    </li>
                    <li className={m.Text}>
                        <NavLink to={''}>
                            Новости
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default SideBar;