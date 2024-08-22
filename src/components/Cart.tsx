import Button from "./Button/Button"

interface Props {
    cartItems: string[],
    onClear: () => void
}

const Cart = ({ cartItems, onClear }: Props) => {
    return (
        <>
            <h4>Cart</h4>
            <ul>
                {cartItems.map(item => <li>{item}</li>)}
            </ul>
            <Button onClick={onClear}>Clear</Button>
        </>
    )
}

export default Cart