import useFetch from './useFetch';


const  ProfilePage= () => {
  const { data: users } = useFetch('http://localhost:9000/users')
  return (
    <div className="user-profile-page">
      <h1>Detalii Utilizator</h1>
      <br />
      <br />
      
        {users && (
          <>
          {console.log(users)}
          <h4> Nume Utilizator: {users[0].user}</h4>
          <br />
          <h4>Nume: {users[0].lastName}</h4>
          <br />
          
          <h4>Prenume: {users[0].name}</h4>
          <br />
          <h4>Adresă E-Mail: {users[0].email}</h4>
          <br />
          <h4>Număr Telefon: {users[0].tel}</h4>
          <br />
          <h1>Cursuri La Care Participi: </h1>
            <br />
            
            <h3>Matematică</h3>
            <br />
           
            <a      href=""
                    style={{
                    color:"white",
                    backgroundColor: "#686868",
                    borderRadius: "8px",
                    padding:"8px",
                    textDecoration: "none",
                    
                }}>Abandonează Curs</a>
                
            <br />
            <br />
            <br />
            <h3>Limba Germană</h3>
            <br />
            <a      href=""
                    style={{
                    color:"white",
                    backgroundColor: "#686868",
                    borderRadius: "8px",
                    padding:"8px",
                    textDecoration: "none",
                    
                }}>Abandonează Curs</a>
            <br />
            <br />
            <br />
            <h3>Contabilitatea Instituțiilor De Credit</h3>
            <br />
            <a      href=""
                    style={{
                    color:"white",
                    backgroundColor: "#686868",
                    borderRadius: "8px",
                    padding:"8px",
                    textDecoration: "none",
                    
                }}>Abandonează Curs</a>
            <br />
            <br />
            <br />
            <h3>Curs Python</h3>
            <br />
            <a      href=""
                    style={{
                    color:"white",
                    backgroundColor: "#686868",
                    borderRadius: "8px",
                    padding:"8px",
                    textDecoration: "none",
                    
                }}>Abandonează Curs</a>

         
           

        

          







          </>
        )}
        
        
      
      
    </div>
    
    );
    
}
 
export default ProfilePage;