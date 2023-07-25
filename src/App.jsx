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
      </div>
    </>
  );
}

export default App;
