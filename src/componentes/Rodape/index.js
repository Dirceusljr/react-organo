import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <div className='icones'>
                <a href='facebook.com' target='_blank'><img src='/imagens/fb.png' alt='Ícone do Facebook' /></a>
                <a href='twitter.com' target='_blank'><img src='/imagens/tw.png' alt='Ícone do Twitter' /></a>
                <a href='instagram.com' target='_blank'><img src='/imagens/ig.png' alt='Ícone do Instagram' /></a>
            </div>
            <img src='/imagens/logo.png' alt='Logo do Organo' />
            <p>Desenvolvido por Alura</p>

        </footer>
    )
}

export default Rodape