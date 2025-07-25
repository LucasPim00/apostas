import {
  FacebookLogo,
  TwitterLogo,
  LinkedinLogo,
  InstagramLogo,
} from "phosphor-react";
import {
  Container,
  BtnLogin,
  ContainerBtn,
  ContainerForgotPass,
  ContainerLogoMedias,
  BtnClosed,
} from "./styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import { api } from "../../Services/api";
import { useHistory } from "react-router-dom";
import { useUsers } from "../../Providers/Users";

const FormLogin = ({ closeModalLogin, handleChange, openModalRegister }) => {
  const { loginUser } = useUsers();

  const formLoginSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório *"),
    password: yup.string().required("Senha obrigatória *"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formLoginSchema),
  });

  const onSubmitFunction = (data) => {
    loginUser(data, handleChange, closeModalLogin);
    reset();
  };

  return (
    <Container>
      <BtnClosed>
        <button onClick={closeModalLogin}>X</button>
      </BtnClosed>
      <ContainerLogoMedias>
        <span>Login direto com</span>
        <div>
          <a href="#" alt="Facebook">
            <FacebookLogo size={32} />
          </a>
          <a href="#" alt="Twitter">
            <TwitterLogo size={32} />
          </a>
          <a href="#" alt="Linkedin">
            <LinkedinLogo size={32} />
          </a>
          <a href="#" alt="Instagram">
            <InstagramLogo size={32} />
          </a>
        </div>
      </ContainerLogoMedias>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          register={register}
          value="email"
          type="text"
          placeholder="E-mail"
          error={errors.email?.message}
          name="Email"
        />
        <Input
          register={register}
          value="password"
          type="password"
          placeholder="Senha"
          error={errors.password?.message}
          name="Senha"
        />
        <div className="forgotPassword">
          <a href="#" alt="Esqueci a senha">
            Esqueceu a senha?
          </a>
        </div>
        <ContainerBtn>
          <BtnLogin type="submit">ENTRAR</BtnLogin>
        </ContainerBtn>
      </form>
      <ContainerForgotPass>
        <span>
          Ainda não tem conta?ㅤ
          <label
            htmlFor="Register"
            onClick={() => {
              closeModalLogin();
              openModalRegister();
            }}
          >
            Cadastre-se
          </label>
        </span>
      </ContainerForgotPass>
    </Container>
  );
};

export default FormLogin;
