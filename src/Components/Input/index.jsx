import { ContainerInput, Container } from './styles'

// Componente de input reutilizável
const Input = (
  { name, value, type, placeholder, register, error },
  ...props
) => {
  return (
    <Container>
      {/* Nome do campo */}
      <span>{name}</span>

      {/* Campo de input com tratamento de erro */}
      <ContainerInput isErrored={!!error}>
        {register ? (
          <input
            type={type}
            placeholder={placeholder}
            {...props}
            {...register(value)}
          />
        ) : (
          <input type={type} placeholder={placeholder} {...props} />
        )}
      </ContainerInput>

      {/* Exibe mensagem de erro, se houver */}
      <div className='error'>
        {!!error && <span>{error}</span>}
      </div>
    </Container>
  )
}

export default Input
