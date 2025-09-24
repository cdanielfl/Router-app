import { useState } from "react"
import { InputField } from "../components/input/InputField"
import { formatCep, formatPhone } from "../util/formatters"

function Cadastro() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contact: '',
        cep: '',
        rua: '',
        bairro: '',
        cidade: '',
        estado: ''
    });

    const handle = async (e) => {
        let value = e.target.value;
        console.log(`Campo: ${e.target.name} - Valor original: ${value}`);
        
        if (e.target.name === 'cep') {
            value = formatCep(value);
            console.log(`CEP formatado: ${value}`);
        }
        
        if (e.target.name === 'contact') {
            value = formatPhone(value);
            console.log(`Telefone formatado: ${value}`);
        }
        
        setFormData({...formData, [e.target.name]: value});
        console.log('FormData atualizado:', {...formData, [e.target.name]: value});
    }

    const byCep = async (e) => {
        console.log('Buscando CEP...');
        const cep = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos

        if (cep.length === 8) {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
            console.log('Dados Api:', data);
            
            if (!data.erro) {
                setFormData({
                    ...formData, 
                    rua: data.logradouro, 
                    bairro: data.bairro, 
                    cidade: data.localidade, 
                    estado: data.uf
                });
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Formulário enviado:', formData);
        
        const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
        usuarios.push(formData);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        
        alert('Cadastro realizado com sucesso!');
    }

    return (
    <>
    <div className="container mt-5">
        <div className="card shadow-lg">
            <div className="card-header">
                <h3>Cadastro</h3>
            </div>
        <div className="card-body">
            <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
  <div className="col-md-6">
    <InputField 
      id="firstName"
      name="firstName"
      label="Primeiro Nome"
      type="text"
      value={formData.firstName}
      onChange={handle}
    />
  </div>
  <div className="col-md-6">
    <InputField 
      id="lastName"
      name="lastName"
      label="Segundo Nome"
      type="text"
      value={formData.lastName}
      onChange={handle}
    />
  </div>
  <div className="col-md-4">
    <InputField 
      id="contact"
      name="contact"
      label="Número de Contato"
      type="tel"
      placeholder="(11) 99999-9999"
      value={formData.contact}
      onChange={handle}
    />
  </div>
  
  <div className="col-12">
    <hr className="my-4" />
    <h4>Endereço</h4>
  </div>
  
  <div className="col-md-3">
    <InputField 
      id="cep"
      name="cep"
      label="CEP"
      type="text"
      placeholder="00000-000"
      value={formData.cep}
      onChange={handle}
      onBlur = {byCep}
    />
  </div>
  <div className="col-md-6">
    <InputField 
      id="rua"
      name="rua"
      label="Rua"
      type="text"
      value={formData.rua}
      onChange={handle}
    />
  </div>
  <div className="col-md-3">
    <InputField 
      id="bairro"
      name="bairro"
      label="Bairro"
      type="text"
      value={formData.bairro}
      onChange={handle}
    />
  </div>
  <div className="col-md-6">
    <InputField 
      id="cidade"
      name="cidade"
      label="Cidade"
      type="text"
      value={formData.cidade}
      onChange={handle}
    />
  </div>
  <div className="col-md-6">
    <InputField 
      id="estado"
      name="estado"
      label="Estado"
      type="text"
      value={formData.estado}
      onChange={handle}
    />
  </div>
  
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Cadastrar</button>
  </div>
</form>
        </div>
        </div>

    </div>
    </>



    )
}

export default Cadastro