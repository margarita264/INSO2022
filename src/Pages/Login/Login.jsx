import './Login.css';
//import image from '../../assets/login-icon.svg';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const Login = () => {
  const { setCurrentUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.setItem('currentUser', JSON.stringify(data));
    setCurrentUser(data);
    navigate('/vistaAdmin');
  };

  return (
    <div className='d-flex justify-content-center'>
      <div
        className='form p-5 rounded-5 text-secondary shadow mt-4'
        style={{ width: '25rem' }}
      >
        <div className='d-flex justify-content-center'>
          <img src="https://ps.w.org/login-customizer/assets/icon-256x256.png?rev=2455454" alt='login-icon' style={{ height: '7rem' }} />
        </div>
        <div className='text-center fs-1 fw-bold text-dark'>Login</div>

        <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
          <div className='form-floating'>
            <input
              className='form-control'
              id='floatingInput'
              type='text'
              placeholder='Nombre de usuario'
              {...register('username', {
                required: 'Debe ingresar su nombre de usuario',
              })}
            />
            <label htmlFor='floatingInput'>Usuario</label>
            <p>{errors.username?.message}</p>
          </div>

          <div className='form-floating'>
            <input
              className='form-control'
              id='floatingPassword'
              type='password'
              placeholder='Contraseña'
              {...register('password', {
                required: 'Debe ingresar su contraseña',
              })}
            />
            <label htmlFor='floatingPassword'>Password</label>
            <p>{errors.password?.message}</p>
          </div>
          <button
            className='btn btn-info text-white w-100 mt-4 fw-semibold shadow-sm'
            type='submit'
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
