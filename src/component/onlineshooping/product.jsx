import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export function Products() {
    const [products, setProducts] = useState([]);

    const { categoryName } = useParams();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
            .then(response => {
                setProducts(response.data);
            })
    }, []);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${categoryName}`)
            .then(response => {
                setProducts(response.data);
            })
    }, [categoryName]);

    return (
        <div>
            <h2>Products</h2>
            <div>
                {products.map(product => (
                    <div style={{ width: "100px" }} className="my-2" key={product.id}>
                        <img src={product.image} alt={product.title} width="50" height="50" className="card-img-top" />
                    </div>
                ))}
            </div>
            <div>
                <Link to="/categories">Back to Categories</Link>
            </div>
        </div>
    );
}
