import {Link} from "react-router"

export function Homepage(){
    return <div className="container">
        <div className="navBar"><span>Logo</span><Link to="/">Home</Link><Link>Shop</Link>
        <Link>Cart</Link></div>
        <div className="content"><h1>Welcome to my shopping page</h1></div>
        <div className="footer"></div>
    </div>
}