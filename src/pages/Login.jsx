import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { InputField } from "../components/input/InputField";

function Login() {
    const navigate = useNavigate();
    const [FormData, setFormData] = useState({ email: '', password: '' });
    
    const login = (e) => {
        e.preventDefault();
        console.log(FormData.email, FormData.password);
        navigate('/home');
    }
    return (
        <div className="d-flex align-items-center py-4 bg-body-tertiary" style={{minHeight: '100vh'}}>
            <main className="form-signin w-100 m-auto" style={{maxWidth: '330px'}}>
                <form onSubmit={login}>
                    <img className="mb-4" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    
                   <InputField 
                   id="email"
                   label="Email"
                   type="email"
                   placeholder="name@example.com"
                   value={FormData.email}
                   onChange={(e) => setFormData({...FormData, email: e.target.value})}
                   />
                   
                    <InputField 
                    id="password"
                   label="Senha"
                   type="password"
                   placeholder="Password"
                   value={FormData.password}
                   onChange={(e) => setFormData({...FormData, password: e.target.value})}
                   />

                   
                    <div className="form-check text-start my-3">
                        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember me
                        </label>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-body-secondary">© 2017–2025</p>
                </form>
            </main>
        </div>
    )
}

export default Login