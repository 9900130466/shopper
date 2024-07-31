
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { Home } from "./home";
import { Products } from "./product";
import { Categories } from "./category";
import { Details } from "./details";
import { NotFound } from "./notfound";
import { Cookies } from "react-cookie";
import { Login } from "./login";
import { CookiesProvider } from "react-cookie";


export default function RouterFun() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <header className="d-flex justify-content-between p-2 fs-3 bg-dark text-white">
                    <div>shooping.</div>
                    <div>
                        <Link to="/" className="mx-2"><span>Home</span></Link>
                        {<Link to="Login" className="mx-2"><span>shop</span></Link>}
                        {<Link to="Blog" className="mx-2"><span>Blog</span></Link>}
                        {<Link to="products" className="mx-2"><span>Products</span></Link>}
                        <Link to="categories" className="mx-2"><span>Categories</span></Link>
                    </div>
                    <div>
                        <span className="bi bi-search mx-2"></span>
                        <span className="bi bi-person mx-2"></span>
                        <span className="bi bi-cart4 mx-2"></span>
                    </div>
                </header>
                <section>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="login" element={<Login />} />
                        <Route path="categories" element={<Categories />} />

                        <Route path="products" element={<Products />} />
                        <Route path="/products/:categoryName" element={<Home/>} > 
                        </Route>
                        <Route path="details/:id" element={<Details />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </section>
            </BrowserRouter>

        </div>
    )
}