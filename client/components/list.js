import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import GoodCard from './good-card'
import { getGoodsData, orderAlphabetically, orderByPrice } from '../redux/reducers/goods'

const List = () => {
  const list = useSelector((store) => store.goods.list)
  const ratio = useSelector((store) => store.currencies.ratio)
  const cart = useSelector((store) => store.cart)

  const dispatch = useDispatch()

  const sortByAlphabet = () => {
    dispatch(orderAlphabetically())
  }
  const sortByPrice = () => {
    dispatch(orderByPrice())
  }
  useEffect(() => {
    dispatch(getGoodsData())
  }, [dispatch])
  return (
    <div>
      <div className="flex justify-center mb-2">
        <button
          type="button"
          onClick={sortByAlphabet}
          className="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white mr-2"
        >
          A-Z
        </button>
        <button
          type="button"
          onClick={sortByPrice}
          className="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white"
        >
          1-9
        </button>
      </div>
      <div className="card flex flex-wrap justify-around">
        {list.map((good) => (
          <GoodCard key={good.id} good={good} ratio={ratio} count={cart[good.id] || 0} />
        ))}
      </div>
    </div>
  )
}

List.propTypes = {}

export default React.memo(List)
