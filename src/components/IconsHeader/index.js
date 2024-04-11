import './style.css'

import Profile from '../../images/perfil.svg'
import Bag from '../../images/sacola.svg';

const icons = [Profile, Bag];

function IconsHeader() {
    return (
    <ul className='icons'>
        {icons.map( (icon) => (
    <li className='icon'><img src={icon}></img></li>
        ))}
    </ul>
    )
}

export default IconsHeader;