import styled from 'styled-components';
import { loginBackground } from '../data';
import { mobile } from '../responsive';
import { useEffect, useState } from 'react';
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isFetching, error, currentUser} = useSelector((state) => state.user);
  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, {email, password});
  };

  useEffect(()=>{
    if(currentUser) {
      navigate('../');
    }
  }, [currentUser]);
  
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input 
            placeholder='email' 
            onChange={e=>setEmail(e.target.value)}
          />
          <Input 
            placeholder='password'
            type='password'
            onChange={e=>setPassword(e.target.value)}
          />
          <Button onClick={handleLogin} disabled={isFetching}>LOGIN</Button>
          {error && <Error>Invalid Credentails</Error>}
          <Link>FORGOT PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${loginBackground})
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center; 
`;
const Wrapper = styled.div`
  width:25%;
  padding: 20px;
  background-color: white;
  ${mobile({width:'75%'})}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px ;
  background-color: #0394fc;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
    color: green;
    cursor: not-allowed;
  }
`;
const Link = styled.a`
  margin: 10px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`
export default Login;