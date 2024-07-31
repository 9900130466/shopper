import { Categories } from "./category";
import { Products } from "./product";
import "./home.css"

export function Home() {
    return (
        <div>
            <h1>Home Component</h1>
            <div className="main-content">
                <Categories />
                <Products />
            </div >
        </div >
    )
}