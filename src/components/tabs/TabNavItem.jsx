import React from 'react'

const TabNavItem = ({id, titulo,icono, tabActive, setTabActive}) => {

    const handleTab = ()=>{
    setTabActive(id)
   }
  return (
    <li onClick={handleTab} className={`me-2 ${tabActive===id ? 'active bg-amber-600 font-bold border-slate-300 rounded-lg text-slate-200 border-b-2': 'hover:text-gray-500 hover:border-gray-300 dark:hover:text-gray-500'}`}>
      <div className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer">
          <div className={`me-2 ${tabActive===id ? 'text-slate-200 font-bold' : 'text-gray-600 hover:text-slate-200'}`}>
            {icono}
          </div>
            {titulo}
      </div>
    </li>
  )
}

export default TabNavItem