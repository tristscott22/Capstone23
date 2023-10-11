import { useState, useEffect } from "react";

export default function ProductList() {
    const[products, setProducts] = useState([]);

    const getProducts = async () => {
        try{
            const response = await fetch(`https://fakestoreapi.com/products`);
            const result = response.json()
return result
        } catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        const fetchAllProducts = async () => {
            const data = await getProducts();
            
            setProducts(data)
        }
        fetchAllProducts();
    }, [])


    return(<div>
{products.map((product) => {
                return (
                    <div key={product.id}>
                <h4>{product.title}</h4>
                <p>Price: {product.price}</p>
                <p>Rating: {product.rating.rate}</p>
                <button onClick={() => navigate(`/products/${product.id}`)}>Details</button>
                </div>
                )
            }
                
            )}
    </div>)
}