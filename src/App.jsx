import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import AllJewellary from './pages/AllJewellary'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import CategoryPage from './pages/CategoryPage'
import CurrentRate from './pages/CurrentRate'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="w-full">
        <div className="mx-auto">
          <Navbar />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow w-full">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alljewellary" element={<AllJewellary />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/currentrate" element={<CurrentRate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/:productId" element={<Products />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
          </Routes>
        </div>
      </main>

      {/* Footer */}
      <div className="w-full">
        <div className="mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
