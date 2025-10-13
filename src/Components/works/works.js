import React from 'react'
import "./works.css"
import portfolio1 from "../../Assets/portfolio1.png"
import portfolio2 from "../../Assets/portfolio2.png"
import portfolio3 from "../../Assets/portfolio3.png"
import portfolio4 from "../../Assets/portfolio4.png"
const Works = () => {
    const projectPaths = {
        project1: "/portfolio/project-one",
        project2: "/portfolio/project-two",
        project3: "/portfolio/project-three" 
    };
  return (
    <section id="works">
        <h2 className="worksTitle">Portfolio</h2>
        <span className="worksDesc">Here's a collection of my work.</span>
        <div className="portfolio">
            <div className="portfolioItem">
            <a 
                    href="https://jubit-pincy.github.io/tictactoe/"
                    target="_blank"  // Opens in a new tab
                    rel="noopener noreferrer" 
                    className="portfolioImg" // Re-use this class for styling
                >            
                <img src={portfolio1} alt="" className="portfolioImg" /></a>
            </div>
            <div className="portfolioItem">
                <a 
                    href="https://sites.google.com/view/knowing-about-mental-health/home"
                    target="_blank"  // Opens in a new tab
                    rel="noopener noreferrer" 
                    className="portfolioImg" // Re-use this class for styling
                >  
                <img src={portfolio2} alt="" className="portfolioImg" /></a>
            </div>
            <div className="portfolioItem">
                <a 
                    href="https://jubit-pincy.github.io/Crossword_Puzzle/"
                    target="_blank"  // Opens in a new tab
                    rel="noopener noreferrer" 
                    className="portfolioImg" // Re-use this class for styling
                >
                <img src={portfolio4} alt="" className="portfolioImg" /></a>
            </div>
            <div className="portfolioItem">
                <a 
                    href="https://jubit-pincy.github.io/simple-portfolio/"
                    target="_blank"  // Opens in a new tab
                    rel="noopener noreferrer" 
                    className="portfolioImg" // Re-use this class for styling
                >
                <img src={portfolio3} alt="" className="portfolioImg" /></a>
            </div>
        </div>
        {/* <button className="workBtn">See More</button> */}
    </section>
  )
}

export default Works;