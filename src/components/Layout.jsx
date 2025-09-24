import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div className="d-flex flex-column min-vh-100">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">Meu App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/cadastro">Cadastro</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/usuarios">Usuários</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Conteúdo da página atual */}
            <main className="flex-grow-1">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-3 mt-auto">
                <div className="container">
                    <p>&copy; 2025 Meu App. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    )
}

export default Layout