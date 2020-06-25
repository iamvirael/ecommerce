import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import GoodCard from './good-card'
import { getGoodsData } from '../redux/reducers/goods'

const List = () => {
  const list = useSelector((store) => store.goods.list)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getGoodsData())
  }, [dispatch])
  return (
    <div>
      <div className="card flex flex-wrap justify-around">
        {list.map((good) => (
          <GoodCard key={good.id} good={good} />
        ))}
      </div>
    </div>
  )
}

List.propTypes = {}

export default React.memo(List)