import React from 'react'

const GoodCart = (props) => {
  const { title, price, image, description } = props.good
  const { ratio } = props
  return (
    <div className="w-64 rounded overflow-hidden shadow-lg mb-3">
      <div className="flex justify-center">
        <img className="card__image h-32 object-cover w-full" src={image} alt={title} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold mr-2 text-black text-5xl">
          <i className="fas fa-shopping-cart" />
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {price}({ratio})
        </span>
      </div>
    </div>
  )
}

GoodCart.propTypes = {}

export default React.memo(GoodCart)
