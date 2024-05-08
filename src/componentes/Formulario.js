import './formulario.css';

function Formulario() {
    return (
        <section className='formulario'>
            <form>
                <div className='campo-texto'>
                    <label >
                        Nome
                    </label>
                    <input Type="text" name="nome" placeholder="Seu nome" />
                </div>

                <div className='campo-texto'>
                    <label>
                        Endereço
                    </label>
                    <input Type="text" name="endereco" placeholder="Endereço, nº" />
                </div>

                <div className='campo-texto'>
                    <label>
                        Telefone
                    </label>
                    <input Type="text" name="telefone" placeholder="Seu telefone"/>
                </div>

                <div className='campo-texto'>
                    <label>
                        E-mail
                    </label>
                    <input Type="email" name="email" placeholder="seuemail@gmail.com"/>
                </div>

                <input type="submit" className='botao'>Salvar</input>

            </form>
        </section>
    )
}

export default Formulario;