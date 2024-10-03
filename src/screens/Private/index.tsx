import { Route, Routes } from 'react-router-dom'
import Admin from './Admin'

const Private = () => {
  return (
    <Routes>
        <Route path={"/admin"} element={<Admin/>} />
    </Routes>
  )
}

export default Private