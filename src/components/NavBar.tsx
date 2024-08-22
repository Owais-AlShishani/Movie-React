interface Props {
    count: number
}

const NavBar = ({ count }: Props) => {
    return (
        <div>Total Item Count is {count}</div>
    )
}

export default NavBar