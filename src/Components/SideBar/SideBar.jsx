import m from './SideBar.module.css'

function SideBar() {
    return (
        <div className={m.SideBar}>
            <ul>
                <li className={m.Text}>
                    Профиль
                </li>
                <li className={m.Text}>
                    Сообщения
                </li>
                <li className={m.Text}>
                    Друзья
                </li>
            </ul>
        </div>
    );
}

export default SideBar;