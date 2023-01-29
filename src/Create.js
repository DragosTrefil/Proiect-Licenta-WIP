import { useState } from "react";
import { useHistory } from "react-router-dom";
import $ from 'jquery';
import Home from "./Home";

const Create = () => {
    const [participare, setParticipare] = useState('')
    const [user, setUser] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [pass, setPass] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault();
        const regUser = {user,pass,email,tel,lastName,name, participare};
        fetch('http://localhost:9000/users',{
        method: 'POST',
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(regUser)
    }).then(() => {
        
        history.push("/home")
    })
    }


    
    return (  
        <div className="create">
            <h2>Inregistrează-te aici</h2>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text"
                id="textinput"
                 required
                 value={user}
                 onChange= {(e) => setUser(e.target.value)}
                 />
                 <label>Nume</label>
                 <input type="text"
                 required
                 value={lastName}
                 onChange={(e) => setLastName(e.target.value)}/>
                 <label>Prenume</label>
                 <input type="text"
                 required
                 value={name}
                 onChange={(e) => setName(e.target.value)}/>
                 <label>Parolă</label>
                <input type="password"
                minLength={6}
                 required
                 value={pass}
                 onChange={(e) => setPass(e.target.value)}
                 />
                 <label>E-mail</label>
                <input type="email"
                 required
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 />
                 <label>Telefon</label>
                <input type="tel"
                pattern={"[0-9]{10}"}
                minLength={10}
                 required
                 value={tel}
                 onChange={(e) => setTel(e.target.value)}
                 />
                 <button>Înregistrează</button>
            </form>
        </div>

        
    );
}
 
export default Create;