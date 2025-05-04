import React from 'react';
import { SocketProvider } from '@/context/Socket.context';
const Layout = ({children}:{children:React.ReactNode}) => {
  return (
   <SocketProvider>
   {children}
   </SocketProvider>
  )
}

export default Layout