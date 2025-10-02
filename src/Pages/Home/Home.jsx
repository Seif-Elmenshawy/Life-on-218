import React from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import "../Home/Home.css"
import banner_video from "../../assets/video.mp4"


const Home = () => {
  return (
    <>
      <main>
        <video autoPlay loop muted playsInline className="video">
          <source src={banner_video} />
        </video>
        <Nav/>
        <div className="hero">
          <h1>Welcome to Life on 218</h1>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home