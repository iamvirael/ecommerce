import React from 'react'
import { useSelector /* , useDispatch */ } from 'react-redux'
// import { addGoodToCart, removeGoodFromCart } from '../redux/reducers/cart'
import Head from './head'
import CartItem from './cart-item'

const Basket = () => {
  const ratio = useSelector((store) => store.currencies.ratio)
  const items = useSelector((store) =>
    Object.keys(store.cart).map((item) => {
      return { ...store.goods.list.find((good) => good.id === item), count: store.cart[item] }
    })
  )

  return (
    <div className="w-2/3 mx-auto">
      <div className="bg-white shadow-md rounded my-6">
        <Head title="Basket" />
        <table className="text-left w-full border-collapse table-fixed">
          <thead>
            <tr>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                Basket
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              return <CartItem key={item.id} item={item} ratio={ratio} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
