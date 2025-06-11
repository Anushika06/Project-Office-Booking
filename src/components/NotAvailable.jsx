import React from 'react'

function NotAvailable({room,members}) {
  return (
    <div>
      <button className="group relative overflow-hidden rounded-3xl border border-white/50 p-8 transition-all duration-500 hover:scale-[1.02] min-h-[200px] w-[200px]">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-800 opacity-90 transition-opacity duration-500 group-hover:opacity-70" />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 from-gray-200 to-gray-300 blur-3xl"
        style={{ background: 'linear-gradient(to bottom right, #bbf7d0, #86efac)' }}
      />
       <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
  <h3 className="text-6xl font-bold text-white">{room}</h3>
  <p className="text-white mt-3">Members Required: {members}</p>
</div>

      {/* <div className='mt-3'>
        <p className='text-white'>Members Required: 4</p>
     </div> */}
    </button>
    </div>
  )
}

export default NotAvailable
