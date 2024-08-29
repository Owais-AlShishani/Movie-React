import { useEffect, useState } from "react"

const ProductList = ({ category }: { category: string }) => {
    const [product, setProducts] = useState<string[]>([])
    useEffect(() => {
        console.log('Fetching Products', category);
        setProducts(['Clothing', 'HouseHold'])
        // console.log(product)
    }, [category])

    return (
        <div>ProductList</div>
    )
}

export default ProductList