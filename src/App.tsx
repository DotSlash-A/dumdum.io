
import './App.css'

function App() {
  const socialLinks = [
    {
      text: 'Linkedin',
      url: 'https://www.linkedin.com/in/dotslashananya/',
    },
    {
      text: 'Github',
      url: 'https://github.com/DotSlash-A',
    },
    {
      text: 'Email',
      url: 'mailto:dotslashananya@gmail.com',
    },
  ];

  return (
    <div id='subroot' className='flex flex-col justify-between'>
      <div>
        <h1 className='font-serif text-9xl text-center my-32'>Ananya</h1>
      </div>
      <div className='self-center my-16 font-serif text-center'>
        <h2>I am a student at IIT Madras pursuing Data Science</h2>
        <h2>I am interested in deep learning and NLP</h2>
        <h2>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              className="no-underline hover:underline text-sky-600 mx-1"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text}
            </a>
          ))}
        </h2>
      </div>
    </div >
  )
}

export default App
