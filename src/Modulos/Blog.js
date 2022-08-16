import '../stylesheet/Pag.css';

function Paginas(props) {
  return(
  <div className='main'>
    <h2 className='titulo'>{props.titulo}</h2>
      <p className='btext'>{props.description}</p>
      <p className='btext'>{props.salto}</p>
      <p className='btext'>{props.salto2}</p>
      <p className='btext'>{props.salto3}</p>
      <p className='btext'>{props.salto4}</p>
  </div>
  ) 
};

export default Paginas;
