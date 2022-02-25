import React, { useState } from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.jpeg'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import IMG7 from '../../assets/portfolio7.png'
import IMG8 from '../../assets/portfolio8.png'
const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Blog React',
      github: 'https://github.com/',
      demo: 'https://dribbble.com/'
    },
    {
      id: 2,
      image: IMG2,
      title: 'Blog React',
      github: 'https://github.com/',
      demo: 'https://dribbble.com/'
    },
    {
      id: 3,
      image: IMG3,
      title: 'Blog React',
      github: 'https://github.com/',
      demo: 'https://dribbble.com/'
    },
    {
      id: 4,
      image: IMG4,
      title: 'Blog React',
      github: 'https://github.com/',
      demo: 'https://dribbble.com/'
    },
    {
      id: 5,
      image: IMG5,
      title: 'Blog React',
      github: 'https://github.com/',
      demo: 'https://dribbble.com/'
    },
    {
      id: 6,
      image: IMG6,
      title: 'Blog React',
      github: 'https://github.com/',
      demo: 'https://dribbble.com/'
    },
    {
      id: 7,
      image: IMG7,
      title: 'Blog React',
      github: 'https://github.com/',
      demo: 'https://dribbble.com/'
    },
    {
      id: 8,
      image: IMG8,
      title: 'Blog React',
      github: 'https://github.com/',
      demo: 'https://dribbble.com/'
    }

  ]

  const [showItems, setShowItems] = useState(3)

  const handleLoadmore = () => {
    setShowItems(prev => prev + 3)
  }
  const handleShowless = () => {
    setShowItems(prev => prev - 6)
  }
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.slice(0, showItems).map((item, index) =>
          <article className='portfolio__item' key={index}>
            <div className="portfolio__item-image">
              <img src={item.image} alt="" />
            </div>
            <h3>{item.title}</h3>
            <div className="portfolio__item-cta">
              <a href={item.github} className='btn'
                target='_blank' rel='noreferrer'>Github</a>
              <a href={item.demo}
                target='_blank'
                className='btn btn-primary' rel='noreferrer'>Live Demo</a>
            </div>
          </article>
        )}
      </div>
      <div className='portfolio__btn'>
        {showItems >= data.length
          ? <button className='btn'
            onClick={handleShowless}>Show Less</button>
          :
          <button className='btn'
            onClick={handleLoadmore}>Load more</button>
        }
      </div>
    </section>
  )
}

export default Portfolio