import React from 'react'

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gray-950 z-50 flex items-center justify-center">
    <div className="flex items-center space-x-3">
      <div className="w-5 h-5 bg-blue-500 rounded-full animate-bounce"></div>
      <div className="w-5 h-5 bg-blue-500 rounded-full animate-bounce delay-100"></div>
      <div className="w-5 h-5 bg-blue-500 rounded-full animate-bounce delay-200"></div>
    </div>
  </div>
  )
}

export default Loader