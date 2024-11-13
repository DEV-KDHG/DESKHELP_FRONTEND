import { Route, Routes } from 'react-router-dom'
import Admin from './Admin'
import Area from './Area'
import Status from './status'

const Private = () => {
  return (
    <Routes>
        <Route path={"/admin"} element={<Admin/>} />
        <Route path={"/area"} element={< Area/>} />
        <Route path={"/estados"} element={< Status/>} />


    </Routes>
  )
}

export default Private