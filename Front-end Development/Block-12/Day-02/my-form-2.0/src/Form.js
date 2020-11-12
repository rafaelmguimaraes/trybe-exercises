import React, { Component } from 'react';
import Input from './Input';
import InputArea from './InputArea';
import InputSelect from './InputSelect';
import InputRadio from './InputRadio';
import estados from './dataUF';
import Modal from './Modal';
import './Form.css'


import './Form.css';



class Form extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.validation = this.validation.bind(this);
    this.validateCity = this.validateCity.bind(this);
    this.alertJob = this.alertJob.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.sendClick = this.sendClick.bind(this);
    this.clearClick = this.clearClick.bind(this);
    
        
    this.state = {
      name: '',
      email:'',
      cpf:'',
      address:'',
      city:'',
      state:'',
      typeAddress:'',
      resume:'',
      job:'',
      alertJob: false,
      jobDescription:'',
      messageError: {
        name: '',
        email: '',
        cpf: '',
        address: '',
        city: '',
        state: '',
        typeAddress: '',
        resume: '',
        job: '',
        jobDescription:'',
      },
      show: false,
    };

    this.lengthValidation = {
      name: 40,
      email: 50,
      cpf: 11,
      address: 200,
      city: 28,
      resume: 1000,
      job:40,
      jobDescription:500,
    };

    this.ruleValidation = {
      name: (text) => (text.toUpperCase()),
      address: (text) => (text.replace(/[^\w\s]/gi, '')),
      cpf: (text) => (text.replace(/[^\d]/gi, '')),
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: this.validation(name, value)
    });
  }

  validation(name, value) {
    if(this.lengthValidation[name]) {
      // value = value.slice(0, this.lengthValidation[name]);
      console.log(name, value.length, this.lengthValidation[name]);
      if(value.length > this.lengthValidation[name])
        this.setState((beforeState, _props) => ({
          ...beforeState,
          messageError: {...beforeState.messageError, [name]: `* Limite de Caracteres ultrapassado! Limite:${this.lengthValidation[name]} Encontrado:${value.length}`}
        }));
      else 
        this.setState((beforeState, _props) => ({
          ...beforeState,
          messageError: {...beforeState.messageError, [name]: '' }
        }));
    }

    if(this.ruleValidation[name])
      value = this.ruleValidation[name](value);
    
    if (!value)
      this.setState((beforeState, _props) => ({
        ...beforeState,
        messageError: {...beforeState.messageError, [name]: '* Campo Requerido' }
      }));
    /* else 
      this.setState((beforeState, _props) => ({
        ...beforeState,
        messageError: {...beforeState.messageError, [name]: '' }
      })); */

    return value;
  }

  validateCity() {
    const { city } = this.state;
    if (/^[0-9].*/.test(city))
      this.setState({city: ''});
  }

  validateEmail() {
    const { email } = this.state;
    if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email))
      this.setState((beforeState, _props) => ({
        // ...beforeState,
        messageError: {...beforeState.messageError, email: '' }
      }));
    else
      this.setState((beforeState, _props) => ({
        // ...beforeState,
        messageError: {...beforeState.messageError, email: '* Digite um email válido.' }
      }));
  }

  alertJob() {
    const { alertJob } = this.state;
    if (!alertJob)
      alert('Preencha com cuidado esta informação.');
    this.setState({alertJob: true});
  }

  sendClick(e) {
    e.preventDefault();
    let hasSomeError = false;
    Object.keys(this.state).forEach(key => {
      if (this.state[key] === '' && key !== 'alertJob' && key !== 'messageError' && key !== 'show') {
        this.setState((beforeState, _props) => ({
          ...beforeState,
          messageError: {...beforeState.messageError, [key]: '* Campo Requerido' }
        }));
        hasSomeError = true;
      }
    });
    if(this.isAllOK() && !hasSomeError) this.showModal();
  }

  clearClick(e) {
    e.preventDefault();
    Object.keys(this.state).forEach(key => {
      if (this.state[key] !== '' && key !== 'alertJob' && key !== 'messageError' && key !== 'show')
        this.setState((beforeState, _props) => ({...beforeState, [key]: '',
          messageError: {...beforeState.messageError, [key]: '' }
        }));
    });
  }

  isAllOK = () => {
    return Object.values(this.state.messageError).every((message) => message === '');
  }

  render() {
    return (
      <form className="form" id="form">
        <fieldset form="form" key="personalInfo" name="personalInfo" className="fieldset">
          <legend>Informações Pessoais:</legend>
          <Input labelText="Nome:" name="name" type="text" value={this.state.name} handleChange={this.handleChange} messageError={this.state.messageError.name}/>
          <Input labelText="Email:" name="email" type="text" value={this.state.email} handleChange={this.handleChange} handleOnBlur={this.validateEmail} messageError={this.state.messageError.email} />
          <Input labelText="CPF:" name="cpf" type="text" value={this.state.cpf} handleChange={this.handleChange} messageError={this.state.messageError.cpf}/>
          <Input labelText="Endereço:" name="address" type="text" value={this.state.address} handleChange={this.handleChange} messageError={this.state.messageError.address}/>
          <Input labelText="Cidade:" name="city" type="text" value={this.state.city} handleChange={this.handleChange} handleOnBlur={this.validateCity} messageError={this.state.messageError.city} />
          <InputSelect labelText="Estado:" name="state" value={this.state.state} handleChange={this.handleChange} options={estados} messageError={this.state.messageError.state}/>
          <InputRadio labelText="Tipo:" name="typeAddress" messageError={this.state.messageError.typeAddress} >
            <input type="radio" key="house" id="house" name="typeAddress" value="Casa" checked={this.state.typeAddress === 'Casa'} onChange={this.handleChange}/>
            <input type="radio" key="apartment" id="apartment" name="typeAddress" value="Apartamento" checked={this.state.typeAddress === 'Apartamento'} onChange={this.handleChange}/>
          </InputRadio> 
        </fieldset>
        <fieldset form="form" key="lastJob" name="lastJob" className="fieldset">
        <legend>Último Emprego:</legend>
          <InputArea labelText="Resumo do currículo:" name="resume"  value={this.state.resume} handleChange={this.handleChange} messageError={this.state.messageError.resume} />
          <Input labelText="Cargo:" name="job" type="text" value={this.state.job} handleChange={this.handleChange} handleOnMouseEnter={this.alertJob} messageError={this.state.messageError.job}/>
          <InputArea labelText="Descrição do Cargo:" name="jobDescription"  value={this.state.jobDescription} handleChange={this.handleChange} messageError={this.state.messageError.jobDescription} />
        </fieldset>
        <div className="actions">
          <button onClick={this.clearClick}>Limpar</button>
          <button onClick={this.sendClick}>Enviar</button>
        </div>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <h2>Formulário Preenchido com Sucesso!</h2>
          <h3>Por favor, confira seus dados:</h3>
          <p><strong>Nome:</strong> {this.state.name}</p>
          <p><strong>Email:</strong> {this.state.email}</p>
          <p><strong>CPF:</strong> {this.state.cpf}</p>
          <p><strong>Endereço:</strong> {this.state.address}</p>
          <p><strong>Cidade:</strong> {this.state.city}</p>
          <p><strong>Estado:</strong> {this.state.state}</p>
          <p><strong>Endereço:</strong> {this.state.typeAddress}</p>
          <p><strong>Resumo do Currículo:</strong> {this.state.resume}</p>
          <p><strong>Cargo:</strong>{this.state.job}</p>
          <p><strong>Descrição do Cargo:</strong> {this.state.jobDescription}</p>
        </Modal>
      </form>
    );
  }

  showModal = () => {
    this.setState((beforeState, _props) => ({...beforeState, show: true }));
  };

  hideModal = (e) => {
    e.preventDefault();
    this.setState((beforeState, _props) => ({...beforeState, show: false }));
  };

}

export default Form;