import PropTypes from 'prop-types';

function Item(props) {
    return(
        <>
            <ul>
                <li>Modelo: {props.modelo} - Ano de Lançamento: {props.anoLancamento}</li>
            </ul>
        </>
    )
}

Item.propTypes = {
    modelo: PropTypes.string.isRequired,
    anoLancamento: PropTypes.number.isRequired,
}

Item.defaultProps = {
    modelo: "Modelo não inserido",
    anoLancamento: "Ano não inserido",
}

export default Item;