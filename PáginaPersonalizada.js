// main.js
const { useState } = React;
const { render } = ReactDOM;
const styled = window.styled;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
    font-family: 'Arial', sans-serif;
`;

const Header = styled.header`
    background: #333;
    color: #fff;
    padding: 20px;
    width: 100%;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
    margin: 0;
    font-size: 2.5em;
`;

const Content = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 600px;
    margin: 20px;
`;

const Button = styled.button`
    background: #333;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 1em;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: #555;
    }
`;

const Footer = styled.footer`
    background: #333;
    color: #fff;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);
`;

const App = () => {
    const [clickCount, setClickCount] = useState(0);

    return (
        <Container>
            <Header>
                <Title>Página Personalizada Foda</Title>
            </Header>
            <Content>
                <p>Bem-vindo à minha página personalizada! Aqui está um botão:</p>
                <Button onClick={() => setClickCount(clickCount + 1)}>
                    Clique Aqui ({clickCount})
                </Button>
            </Content>
            <Footer>&copy; 2024 Minha Empresa</Footer>
        </Container>
    );
};

render(<App />, document.getElementById('root'));
