import img from './maria.jpg';
import './App.css';

function App() {
  return (
    <>
      <div className='carousel'>
        <img src={img} alt='Maria de Almeida' />
        <blockqoute className='testimonial'>
          <p className='testimonial-text'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            nesciunt aliquid ex atque quibusdam. Rerum officia unde suscipit quo
            sunt hic illo fugit.
          </p>
          <p className='testimonial-author'>Maria de Almeida</p>
          <div className='testimonial-job'>
            Senior Product Manager at EDP Comercial
          </div>
        </blockqoute>
        <button className='btn btn--left'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='btn-icon'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </button>
        <button className='btn btn--right'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='btn-icon'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9 5l7 7-7 7'
            />
          </svg>
        </button>
        <div className='dots'>
          <button className='dot dot--fill'>&nbsp;</button>
          <button className='dot'>&nbsp;</button>
          <button className='dot'>&nbsp;</button>
          <button className='dot'>&nbsp;</button>
        </div>
      </div>
    </>
  );
}

export default App;
