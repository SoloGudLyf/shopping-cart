import { Link } from "react-router"

export function CartPage({inventory}){
    return  <div className="container">
        <section className="">
        <span>Logo</span>
        <span>
          <Link to="/">Home</Link>
          <Link to="shop">Shop</Link>
          <Link>Cart</Link>
        </span>
          </section>
          <section>
            <h1>Cart Page</h1>
            <table>
  <caption>
Your Cart Summary  </caption>
  <thead>
    <tr>
      <th scope="col">ITEM</th>
      <th scope="col">PRICE</th>
      <th scope="col">QUANTITY</th>
      <th scope="col">TOTAL</th>
    </tr>
  </thead>
  <tbody>
   {inventory.map((item)=>{
     <tr>
     <th scope="row">{item.name}</th>
     <td>{item.price}</td>
     <td>{item.quantity}</td>
     <td>{item.price*item.quantity}</td>
   </tr>
   })}
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colSpan="3">Total Amount</th>
      <td>23</td>
    </tr>
  </tfoot>
</table>

          </section>
    </div>
}