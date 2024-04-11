import './style.css'

const optionTexts = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OptionsHeader() {
    return (
        <ul className='options'>
            { optionTexts.map((text) => (
              <li className='option'><p>{text}</p></li>
            ))}
        </ul>
    )
}

export default OptionsHeader;