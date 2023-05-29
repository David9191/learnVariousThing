import styled from "styled-components";

const Main = styled.main`
  margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 25rem;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #f4f0fa;
`;

const Control = styled.div`
  margin-bottom: 0.5rem;
`;

const Label = styled.label`
  display: block;
  color: #616161;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  display: block;
  width: 20rem;
  margin: auto;
  border-radius: 4px;
  padding: 0.25rem;
  border: 1px solid #ccc;
`;

const Auth = () => {
  return (
    <Main>
      <section>
        <form>
          <Control>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" />
          </Control>
          <Control>
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" />
          </Control>
          <button>Login</button>
        </form>
      </section>
    </Main>
  );
};

export default Auth;
