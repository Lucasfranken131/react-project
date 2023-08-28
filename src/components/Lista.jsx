import Item from './Item';

function Lista() {
    
    return(
        <>
            <Item modelo="Fiat Uno"/>
            <Item anoLancamento={1955}/>
            <Item modelo="Bugatti Veyron" anoLancamento={2012}/>
        </>
    )
}

export default Lista;