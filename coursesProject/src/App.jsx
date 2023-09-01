import { useState } from 'react';
import 'bulma/css/bulma.css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Courses from './Courses';
import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import AllWeb from './images/kompleweb.jpg';
import Yazilim from './images/ccsharp.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="App">
      <section className="hero is-link">
  <div className="hero-body">
    <p className="title">
      Kurslarım
    </p>
  </div>
</section>
        <div className='container'>
          <section className='section'>
            <div className='columns'>
            
            <div className='column'>
            <Courses 
        image={Angular}
        tittle="Angular"
        description="Lorem ipsum dolor sit amet"/>

            </div>
            <div className='column'>
           
        <Courses
         image={Bootstrap}
         tittle="Bootstrap 5"
         description="Lorem ipsum dolor sit amet"/>


            </div>
            <div className='column'>
            <Courses
        image={AllWeb}
         tittle="Komple Web"
         description="Lorem ipsum dolor sit amet"/>

            </div>
            <div className='column'>
            <Courses
        image={Yazilim}
         tittle="Yazılım"
         description="Lorem ipsum dolor sit amet"/>

            </div>
          </div>
          </section>
          
        </div>
   
       
      
      </div>
     
     
    </>
  )
}

export default App
