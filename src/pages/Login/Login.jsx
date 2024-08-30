import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Header, Logo } from "./Header-login";
import bg from "../assets/bg.jpg";
import logo from "../assets/logo.png";

const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 4px;
    padding: 48px 68px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: 0 auto;
`

const Title = styled.h2`
    color: #fff;
    margin-bottom: 28px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Input = styled.input`
    line-height: 1.5;
    padding: 1.5rem 1rem 0.5rem 1rem;
    background: rgba(22, 22, 22, 0.7);
    border-radius: 0.25rem;
    border: solid 1px;
    border-color: rgba(128, 128, 128, 0.7);
`

const Button = styled.button`
    color: #fff;
    background-color: #ff0000;
    padding: 0.375rem 1rem;
    min-height: 2.5rem;
    border-style: solid;
    border-width: .0625rem;
    border-radius: calc(0.25rem - 0.0625rem);
    border-color: rgba(0, 0, 0, 0);

    &:hover{
        background-color: #b11b1b;
    }
`
const ButtonSignIn = styled(Button)`
    background: rgba(128, 128, 128, 0.4);
    font-weight: 500;

    &:hover{
        background-color: rgba(128, 128, 128, 0.2);
    }
`

const Text = styled.p`
    font-size: 1rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
`

const TextLink = styled.p`
    color: #fff;
    cursor: pointer;
    text-align: center;

    &:hover{
        text-decoration: underline;
        color: #fff;
    }
`

const ContainerCheckbox = styled.div`
    display: inline-block;
    margin-top: 16px;
`

const Checkbox = styled.input.attrs({ type: "checkbox" })`
    border-radius: 0.125rem;
    height: 1.125rem;
    width: 1.125rem;
    border-width: 0.0625rem;
    border-color: rgba(128, 128, 128, 0.7);

    &:before{
        background: #000;
    }
`;

const Label = styled.label`
    color: #fff;
    padding-left: 0.75rem;
    margin-top: 16px;
`

const TextSubscribreNow = styled(Text)`
    color: #fff;
    text-align: start;
    margin-top: 16px;
`

const SpanLink = styled.span`
    color: #fff;
    cursor: pointer;
    text-align: start;

    &:hover{
        text-decoration: underline;
        color: #fff;
    }
`

const TextProtect = styled(Text)`
    text-align: start;
    margin-top: 16px;
`

const SpanMore = styled(SpanLink)`
    color: #0071eb;

    &:hover{
        text-decoration: underline;
        color: #0071eb;
    }
`

const AppContainer = styled.div`
    background-color: #000;
    background: url(${bg});
    width: 100%;
    height: 100vh;
`

const BackgroundOpacity = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
`

const Footer = styled.footer`
    border-top: none;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7) 0%, rgb(0, 0, 0) 20%);
    color: #fff;
`

const ContainerFooter = styled.div`
    padding: 0 3rem 0 3rem;
    margin: 4.5rem 0 4.5rem 0;
`

const FooterWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    height: auto;
    display: flex;
    flex-direction: row
`

const NavFooter = styled.ul`
    display: inline-flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: calc(100% + 0.75rem);
`

const Teste = styled.p`
    flex: 0 0 100%;
`

const NavLi = styled.li`
flex: 0 0 calc(25% - 0.75rem);
`

const NavFooterLink = styled.a`
    text-decoration: none;
    color: #fff;

    &:hover{
        color: #ff0000;
    }
`

const Login = () => {

    return (
        <AppContainer>
            <BackgroundOpacity>
                <Header>
                    <Logo src={logo} />
                </Header>
                <Container>
                    <Title>Entrar</Title>
                    <Form>
                        <Input type="text" placeholder="Email ou número de celular"/>
                        <Input type="password" placeholder="Senha"/>
                        <Button type="submit">Entrar</Button>
                        <Text>OU</Text>
                        <ButtonSignIn>Usar um código de acesso</ButtonSignIn>
                        <TextLink to="#">Esqueceu a senha?</TextLink>
                    </Form>
                    <ContainerCheckbox>
                        <Checkbox/>
                        <Label>Lembre-se de mim</Label>
                    </ContainerCheckbox>
                    <TextSubscribreNow>Novo por aqui? <SpanLink><b>Assine agora.</b></SpanLink></TextSubscribreNow>
                    <TextProtect>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <SpanMore>Saiba mais</SpanMore>.</TextProtect>
                </Container>
            </BackgroundOpacity>
            <ContainerFooter>
                <Footer>
                    <FooterWrapper>
                        <Teste>Dúvidas? Ligue 0800 591 2876</Teste>
                        <NavFooter>
                            <NavLi><NavFooterLink href="#">Perguntas Frequentes</NavFooterLink></NavLi>
                            <NavLi><NavFooterLink href="#">Central de Ajuda</NavFooterLink></NavLi>
                            <NavLi><NavFooterLink href="#">Termos de Uso</NavFooterLink></NavLi>
                            <NavLi><NavFooterLink href="#">Privacidade</NavFooterLink></NavLi>
                            <NavLi><NavFooterLink href="#">Preferência de cookies</NavFooterLink></NavLi>
                            <NavLi><NavFooterLink href="#">Perguntas Frequentes</NavFooterLink></NavLi>
                            <NavLi><NavFooterLink href="#">Informações corporativas</NavFooterLink></NavLi>
                        </NavFooter>
                    </FooterWrapper>
                </Footer>
            </ContainerFooter>
        </AppContainer>
        
    );
}

export default Login
