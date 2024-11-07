import { Route, Routes } from 'react-router-dom'
import Admin from './Admin'
import Area from './Area'

const Private = () => {
  return (
    <Routes>
        <Route path={"/admin"} element={<Admin/>} />
        <Route path={"/area"} element={< Area/>} />

    </Routes>
  )
}

export default Private