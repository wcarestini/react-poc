import './style.css'

function Form() {

  return(
    <form action="">
      <fieldset>
        <div className="campo">
          <label htmlFor="">Nome:</label>
          <input type="text" />
        </div>
        <div className="campo">
          <label htmlFor="">Descrição</label>
          <input type="text" />
        </div>
      </fieldset>
    </form>
  );
}

export default Form;
