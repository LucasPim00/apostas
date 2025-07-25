import { Button } from '@mui/material';
import { Container } from './styles';
import { Content } from './styles';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';

const Form = () => {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required('Nome obrigatório')
      .matches(
        /^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/,
        'O nome não pode conter números'
      ),
    number: yup.string().required('Celular obrigatório'),
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    subject: yup.string().required('Assunto obrigatório'),
    message: yup.string().required('Mensagem obrigatória'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const url = 'https://capstone-group2-alex-api.herokuapp.com/contact';

  const onSubmitFunction = (data) => {
    axios
      .post(url, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container>
      <Content>
        <h1>Fale com a gente</h1>
        <h5>
          Preencha o formulário e nossa equipe retornará em até 24 horas.
        </h5>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <label>
            Nome
            <input
              className="input"
              placeholder="João da Silva"
              {...register('name')}
            />
          </label>

          <label>
            Seu e-mail
            <input
              className="input"
              placeholder="joaodasilva@email.com"
              {...register('email')}
            />
          </label>

          <label>
            Celular
            <input
              className="input"
              placeholder="+55 (11) 91234-5678"
              {...register('number')}
            />
          </label>

          <label>
            Assunto
            <input
              className="input"
              placeholder="Ajuda com apostas"
              {...register('subject')}
            />
          </label>

          <label>
            Mensagem
            <textarea
              placeholder="Gostaria de ajuda com as minhas apostas"
              {...register('message')}
            ></textarea>
          </label>

          <div className="botao">
            <Button type="submit">Enviar Mensagem</Button>
          </div>
        </form>
      </Content>
    </Container>
  );
};

export default Form;
