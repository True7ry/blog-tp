import './App.css';
import Paginas from './Modulos/Blog.js';

function App() {
  return (
    <div className="App">
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
      </style> 
      <header className="App-header">
        <ul className='header-dad'>
          <p className='titulo-header'>Malvinas</p>
          <img className='arg-icon' src={require('./img/arg-icon.png')} alt='argentina icono'/>
        </ul>
      </header>
      <div className='inicio'>
        <img  src={require('./img/bandera.png')} alt='imagen ushuaia'/>
      </div>
      <div className='Pading'>
        <div className='pag'>
        <Paginas
        titulo='Historia de las islas Malvinas'
        description='Las islas Malvinas son un archipiélago localizado en el mar argentino, océano Atlántico Sur, a una distancia mínima de la Patagonia de 341 km. Según la ONU, constituyen un territorio en disputa entre la República Argentina y el Reino Unido, quien en 1833 las tomó por la fuerza y las administró como un territorio británico de ultramar. '
        />
        <img src={require('./img/revistaMalvinas.jpg')} alt='Periodico Malvinas'/>
      </div>
      <div className='pag n2'>
        <Paginas
        titulo='El Ejército argentino no estuvo bien equipado'
        description='Las condiciones del ejército argentino desplegado en Malvinas durante la guerra fueron muy precarias. Buenos Aires no se preocupó de proporcionar suministros básicos a sus soldados, que portaron armamento defectuoso y carecían de ropa adecuada para soportar el duro invierno en estas islas. Además, muchas de estas personas eran jóvenes sin apenas experiencia de combate.'
        salto='Las unidades de élite del Ejército de Tierra argentino no fueron desplegadas en Malvinas, ya que la mayoría lo estaban en la frontera con Chile debido al miedo que existía a una invasión de Augusto Pinochet, abiertamente enfrentado con Argentina para esa época.'
        salto2='Con su Ejército rodeado, el 2 de junio Buenos Aires intentó dar un último golpe a la flota británica a través de la Operación Algeciras, en España, que tenía el objetivo de terminar con la flota de Reino Unido desplegada en la base de Gibraltar, pero también fracasó, precipitando el inevitable final de la contienda.'
        />
        <img src={require('./img/heridos.jpg')} className='img-h' alt='Soldados heridos'/>
      </div>
        <div className='pag n2'>
        <Paginas
        titulo='Example text'
        description= 'El 3 de enero se produjo la aparición de los ingleses e intervinieron en las Islas Malvinas como consecuencia al día siguiente, el comandante de la goleta de guerra denominado Sarandí dejó el Puerto Soledad debido a la presencia ante las fuerzas británicas y a partir de ese momento, empieza la colonización inglesa es decir la toma de posesión sobre las islas. por otra parte, el 6 de enero hubo una ocupación del territorio por parte de los ingleses y se aprovecharon de los bienes debido al abandono de los argentinos. en cambio el 16 de enero el gobierno argentino necesitaba explicaciones sobre el tema de lo sucedido en las islas malvinas del encargado británico, es decir que les exigió el primer pedido de explicación formal y por esta razón, el 17 y 22 de enero se produjo la primera protesta formal ante el funcionario británico presentado por el ministerio de relaciones exteriores argentino. '
       /> 
       <img className='img-ej' src={require('./img/ejercito-m.jpg')} alt='Ejercito'/>
      </div>      
      </div>
      
      <footer>
        <h2>Creditos:</h2>
        <ul className='creditos'>
          <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' rel='noreferrer noopener' >Name</a>
          <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'target='_blank' rel='noreferrer noopener' >Name</a>
          <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'target='_blank' rel='noreferrer noopener' >Name</a>
          <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'target='_blank' rel='noreferrer noopener' >Name</a>
        </ul>
        <ul className='creditos'>
          <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'target='_blank' rel='noreferrer noopener' >Name</a>
          <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'target='_blank' rel='noreferrer noopener' >Name</a>
          <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'target='_blank' rel='noreferrer noopener' >Name</a>
          <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'target='_blank' rel='noreferrer noopener' >Name</a>
        </ul>
        <ul className='creditos'>
          <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'target='_blank' rel='noreferrer noopener' >Name</a>
          <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'target='_blank' rel='noreferrer noopener' >Name</a>
          <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'target='_blank' rel='noreferrer noopener' >Name</a>
          <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'target='_blank' rel='noreferrer noopener' >Name</a>
        </ul>
      </footer>
    </div>
  );
}

export default App;
