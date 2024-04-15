import { useForm } from "../useForm";
import Loader from '../components/Loader';
import Message from "../components/Message";
import styled from 'styled-components'


const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }

  if (!form.subject.trim()) {
    errors.subject = "El campo 'Asunto a tratar' es requerido";
  }

  if (!form.comments.trim()) {
    errors.comments = "El campo 'Comentarios' es requerido";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments =
      "El campo 'Comentarios' no debe exceder los 255 caracteres";
  }

  return errors;
};

let styles = {
  fontWeight: "bold",
  color: "#dc3545",
};

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div className="contacto">
      <Formulario>  
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        {errors.name && <p style={styles}>{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email && <p style={styles}>{errors.email}</p>}
        <input
          type="text"
          name="subject"
          placeholder="Asunto a tratar"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.subject}
          required
        />
        {errors.subject && <p style={styles}>{errors.subject}</p>}
        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Escribe tus comentarios"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required
        ></textarea>
        {errors.comments && <p style={styles}>{errors.comments}</p>}
        <input className="button" type="submit" value="Enviar" />
      </form>
      {loading && <Loader />}
      {response && (
        <Message msg="Los datos han sido enviados" bgColor="#198754" />
      )}
      </Formulario>
    </div>
  );
};

const Formulario = styled.form`


  margin-top:auto;
  margin-bottom:auto;

  h2{
      
    display:flex;
    justify-content:center;
  }
  form{
    display:flex;
    flex-direction:column;
    padding:30px;
    border-radius:10px;
    background-color:rgb(25,43,59);
    width:60%;
    margin:0 auto;
    border:1px solid gray;
    box-shadow: 0 0 8px gray;
    
  }
  input{
    margin-bottom:10px;
    padding:5px;
    border-radius:5px;
    border:none;
  }
  textarea{
    padding:5px;
    margin-bottom:10px;
    border-radius:5px;
    border:none;
  }

  .button{
    background-color: #146ac6;
    color: white;
    border:none;
  }
  @media screen {
    @media (max-width: 768px) {
      form{
        width:100%;
      }
    }
  } 
`

export default ContactForm;
