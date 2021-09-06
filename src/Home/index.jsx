import React from "react"
import Banner from "../components/Banner"
import Dashboard from "../components/Dashboard"
import Header from "../components/Header"

import data from "../components/Constant/Test_Data.json"

const Home = () => {
  const { Comercio, Productos } = data
  console.log(data)
  return (
    <div>
      <Header />
      <div>
        <Banner bannerImg={Comercio.bannerComercio} />
        <Dashboard products={data} />
      </div>
    </div>
  )
}

export default Home
