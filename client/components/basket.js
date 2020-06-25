import React from 'react'

const Basket = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
          This is dummy basket
        </div>
      </div>
    </div>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
