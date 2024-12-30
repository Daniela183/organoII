import "./CampoTexto.css";

const CampoTexto = (props) => {

  //const placeholderModificado = `${props.placeholder}...`

  //let valor = 'Guilherme Silveira'

  //const [valor, setValor] = useState('')

  const aoDigitado =(evento) =>{
    props.aoAlterado(evento.target.value)
  }
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      {/*<input placeholder={props.placeholder} />*/}
      <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={`${props.placeholder}...`} />
    </div>
  );
};

export default CampoTexto;
