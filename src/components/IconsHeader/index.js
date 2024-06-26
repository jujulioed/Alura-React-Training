import Profile from '../../images/perfil.svg'
import Bag from '../../images/sacola.svg';
import styled from 'styled-components'


const Icons = styled.ul` 
    display: flex;
    align-items: center;
`

const Icon = styled.li`
    margin-right: 40px;
    width: 25px;
`
const icons = [Profile, Bag];

function IconsHeader() {
    return (
    <Icons>
        {icons.map( (icon, index) => (
            <Icon key={index}><img src={icon} alt='desc'></img></Icon>
        ))}
    </Icons>
    )
}

export default IconsHeader;