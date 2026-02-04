import React from 'react'
import Header from '../shared/Header'

interface ProviderSetupProps {
 children:React.ReactNode    
}

const ProviderSetup = ({children}:ProviderSetupProps) => {
  return (
    <div>
     <Header/>   
     {children}    
    </div>
  )
}

export default ProviderSetup