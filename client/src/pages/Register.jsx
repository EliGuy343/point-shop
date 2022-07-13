import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { registerBackground } from '../data';
import { register } from '../redux/apiCalls';
import { mobile } from '../responsive';

const Register = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isFetching, error, currentUser} = useSelector((state) => state.user);
  const handleChange = (e) => {
    setUser({...user, [e.target.name]:e.target.value});
    console.log(user);
  }
  const handleRegister = (e) => {
    e.preventDefault();
    register(dispatch, user);
  };

  useEffect(()=>{
    if(currentUser) {
      navigate('../');
    }
  }, [currentUser]);
  

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder='name'
            name='name'
            onChange={handleChange}
          />
          <Input
            placeholder='last name'
            name='lastname' 
            onChange={handleChange}
          />
          <Input
            placeholder='username'
            name='username' 
            onChange={handleChange}
          />
          <Input
            placeholder='email'
            name='email'
            onChange={handleChange}
          />
          <Input
            placeholder='password'
            name='password'
            onChange={handleChange}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal 
            data in accordance wtih the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleRegister}>CREATE ACCOUNT</Button>
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
    url(${registerBackground})
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center; 
`;
const Wrapper = styled.div`
  width:40%;
  padding: 20px;
  background-color: white;
  ${mobile({width:'85%', height:'96%'})}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #0394fc;
  color: white;
  cursor: pointer;
`;

export default Register;