import React from 'react'
import './App.css'


import Nav from "./components/Nav"
import Content from './components/Content'
import Card from './components/Card'
import data from './components/data'

function App() {

  const cards = data.map(item => {
    return (
      <Card
        key = {item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots = {item.openSpots}
      ></Card>
    )
  })

  return (
    <>
      <Nav></Nav>
      <Content></Content>
      <section className="cards-list">
        {cards}
      </section>
    </>
  )
}

export default App
