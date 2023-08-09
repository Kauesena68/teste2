import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import App from '../pages/app'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/app" element={<App />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router