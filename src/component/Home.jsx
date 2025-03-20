"use client"

import { useState, useEffect } from "react"
import Threads from "../Threads" // Ensure the correct path
import logo from "../assets/logo.png" // Correct path for the logo
import ClickSpark from "../ClickSpark"

const Home = () => {
  const [animationState, setAnimationState] = useState("initial")

  useEffect(() => {
    // Start the animation sequence after a short delay
    const startTimer = setTimeout(() => {
      setAnimationState("animate")
    }, 300)

    return () => clearTimeout(startTimer)
  }, [])

  return (
    <div className="home-container">
      {/* ClickSpark as the base layer to capture all clicks */}
      <ClickSpark amplitude={1} distance={0} enableMouseInteraction={true} />
      
      {/* Threads Background */}
      <div className="background-layer">
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>

      <div className={`animation-wrapper ${animationState}`}>
        {/* Logo */}
        <div className="logo-container">
          <img src={logo || "/placeholder.svg"} alt="Nari Nexus Logo" className="logo" />
        </div>

        {/* Text Content */}
        <div className="text-content">
          <h1 className="main-title">NARI-NEXUS</h1>
          <h2 className="sub-title">Coming Soon</h2>
        </div>
      </div>

      <style jsx>{`
        .home-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100vw;
          background-color: #000;
          color: #fff;
          overflow: hidden;
          position: relative;
        }
        
        /* Make ClickSpark work by applying it directly to the main container */
        .home-container > :first-child {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 20; /* Higher z-index but transparent to events */
          pointer-events: auto;
        }
        
        .background-layer {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 5;
        }
        
        .animation-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
          box-sizing: border-box;
        }
        
        .animation-wrapper.initial {
          flex-direction: column;
        }
        
        .animation-wrapper.animate {
          flex-direction: row;
          animation: spreadOut 1.2s ease-out forwards;
        }
        
        @keyframes spreadOut {
          0% {
            flex-direction: column;
            gap: 0;
          }
          50% {
            flex-direction: row;
            gap: 0;
          }
          100% {
            flex-direction: row;
            gap: 3rem;
          }
        }
        
        .logo-container {
          position: relative;
          display: flex;
          justify-content: center;
        }
        
        .animation-wrapper.initial .logo {
          transform: scale(1);
          opacity: 0;
        }
        
        .animation-wrapper.animate .logo {
          animation: logoAnimation 1.5s ease-out forwards;
        }
        
        @keyframes logoAnimation {
          0% {
            transform: scale(0.8) translateX(0);
            opacity: 0;
          }
          30% {
            transform: scale(1) translateX(0);
            opacity: 1;
          }
          100% {
            transform: scale(1) translateX(-20px);
            opacity: 1;
          }
        }
        
        .logo {
          width: clamp(120px, 20vw, 200px);
          height: auto;
          object-fit: contain;
        }
        
        .text-content {
          display: flex;
          flex-direction: column;
          opacity: 0;
        }
        
        .animation-wrapper.animate .text-content {
          animation: textAppear 1.8s ease-out 0.6s forwards;
        }
        
        @keyframes textAppear {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .main-title {
          font-family: 'Courier New', monospace;
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 700;
          margin: 0;
          letter-spacing: 0.1em;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          line-height: 1.1;
        }
        
        .sub-title {
          font-family: 'Courier New', monospace;
          font-size: clamp(1.5rem, 4vw, 3rem);
          font-weight: 400;
          margin: 0.5rem 0 0 0;
          color: #cccccc;
          letter-spacing: 0.2em;
          opacity: 0;
          animation: fadeInUp 1s ease-out 1.8s forwards;
        }
        
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .animation-wrapper.animate {
            flex-direction: column;
            animation: mobileSpreadOut 1.2s ease-out forwards;
          }
          
          @keyframes mobileSpreadOut {
            0% {
              gap: 0;
            }
            100% {
              gap: 2rem;
            }
          }
          
          .animation-wrapper.animate .logo {
            animation: mobileLogoAnimation 1.5s ease-out forwards;
          }
          
          @keyframes mobileLogoAnimation {
            0% {
              transform: scale(0.8) translateY(0);
              opacity: 0;
            }
            30% {
              transform: scale(1) translateY(0);
              opacity: 1;
            }
            100% {
              transform: scale(1) translateY(-20px);
              opacity: 1;
            }
          }
          
          .animation-wrapper.animate .text-content {
            animation: mobileTextAppear 1.8s ease-out 0.6s forwards;
            text-align: center;
          }
          
          @keyframes mobileTextAppear {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .main-title {
            font-size: clamp(2.5rem, 10vw, 4rem);
          }
          
          .sub-title {
            font-size: clamp(1.2rem, 5vw, 2rem);
          }
        }
      `}</style>
    </div>
  )
}

export default Home