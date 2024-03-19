import React from 'react'

const TabContent = ({id,tabActive,children}) => {
  return (
    tabActive === id ? <div className='flex'>
      {children}
    </div> : null
  )
}

export default TabContent