

import axios from "axios";
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

export function Categories(){

    const [categories, setCategories] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies('userid');

    let navigate = useNavigate();

    useEffect(()=>{
        if(cookies['userid']){
            axios.get('https://fakestoreapi.com/products/categories')
            .then(response=> {
                setCategories(response.data);
            })    
        } else {
            navigate('/login');
        }
       
    },[])

    function handleSignoutClick(){
        removeCookie('userid');
        navigate('/login');
    }

    return(
        <div>
            <h2>Categories - { cookies['userid'] }- <button onClick={handleSignoutClick} className="btn btn-link">Signout</button> </h2>
            <ol className="fs-5">
                {
                    categories.map(category=> <li key={category}> <Link to={`/products/${category}`}>{category.toUpperCase()}</Link> </li>)
                }
            </ol>
        </div>
    )
}
