import m from './Header.module.css'
function Header () {
    return (
        <div className={m.Cap}>
            <img alt={''} align={'left'} className={m.Logo} src={'https://www.logodesignlove.com/wp-content/uploads/2022/02/arnaldo-c-castro-logo.jpeg'}/>
        </div>
    )
}

export default Header;