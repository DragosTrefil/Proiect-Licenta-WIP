


const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Evolve</h1>
            <div className="links">
                <a href="/Home">Home</a>
                <a href="/profile">Profil</a>
                <a href="/create" style={{
                    color:"white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px",
                }}> Înregistrează-te</a>

            </div>
        </nav>
    );
}
 
export default Navbar;