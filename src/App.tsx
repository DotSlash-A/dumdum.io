
import './App.css'

function App() {

  return (
    <div id='subroot' className='flex flex-col justify-between'>
      <div>
        <h1 className='font-serif text-9xl text-center my-32'>Ananya</h1>
      </div>
      <div className='self-center my-16 font-serif text-center'>
        <h2>I am a student at IIT Madras pursuing Data Science</h2>
        <h2>I am interested in deep learning and NLP</h2>
        <h2> <a className='no-underline hover:underline text-sky-600 mx-1' href="https://www.linkedin.com/in/dotslashananya/" target='_blank'>Linkedin</a>
         •<a className='no-underline hover:underline text-sky-600 mx-1' href="https://github.com/DotSlash-A" target='_blank'>Github</a>
         •<a className='no-underline hover:underline text-sky-600 mx-1' href="mailto:dotslashananya@gmail.com" target='_blank'>email</a></h2>
      </div>
    </div >
  )
}

export default App
