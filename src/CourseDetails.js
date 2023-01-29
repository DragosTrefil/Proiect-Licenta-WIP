import { useParams } from "react-router-dom";
import useFetch from './useFetch';
import { useState } from "react";
import Create from "./Create";
import react from "react";
const CourseDetails = () => {

    const [ myArray, setMyArray ] = useState([])
    
    let [participare, setParticipare] = useState('')
    
    const { id }  = useParams()
    const {data: stiinte} = useFetch('http://localhost:8000/stiinte/' + id)
    const {data: limbistraine} = useFetch('http://localhost:8000/limbistraine/' + id)
    const {data: contabilitate} = useFetch('http://localhost:8000/contabilitate/' + id)
    const {data: analiza} = useFetch('http://localhost:8000/analiza/'+ id)
    const {data: informatica} = useFetch('http://localhost:8000/informatica/' + id)

    const handleSubmit = (e) =>{
        let curs = {participare}
        fetch('http://localhost:9000/users', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(curs)
        }).then(()=>{
            console.log("participi la un curs!")
        })
    }




    return ( 
        <div className="blog-details">
            <h2>Detalii Curs</h2>
            <br />
            {stiinte && (
                
                <div className="course-container">
                <p>{stiinte.descriere}</p>
                <br />
                <br />
                <br />
                    <h2>{stiinte.curs[0]}</h2>
                    <br />
                    <p>Durata Sesiune : {stiinte.durataMinute[0]} minute</p>
                    <p>Durata Curs: {stiinte.durataOre[0]} ore</p>
                    <p>Coordonator: {stiinte.profesor[0]}</p>
                    <br />
                    <a onClick={handleSubmit} href=""
                    value={participare="Fizica"}
                    onChange={(e) => setParticipare(e.target.value)}
                     style={{
                    color:"white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px",
                    padding:"8px",
                    textDecoration: "none",
                    
                }}>Alatura-te</a>
                    

                
                    
                    <br />
                    <br />
                    <br />

                   
                    <h2>{stiinte.curs[1]}</h2>
                    <br />
                    <p>Durata Sesiune : {stiinte.durataMinute[1]} minute</p>
                    <p>Durata Curs: {stiinte.durataOre[1]} ore</p>
                    <p>Coordonator {stiinte.profesor[1]}</p>
                    <br />
                    <a onClick={handleSubmit} href=""
                    value={participare}
                    onChange={(e) => setParticipare(e.target.value)} style={{
                    color:"white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px",
                    padding:"8px",
                    textDecoration: "none",
                    
                }}> Alătura-te</a>
                
                </div>
                
                
            )}
               {limbistraine && (
                
                <>  <p>{limbistraine.descriere}</p>
                <br />
                <br />
                <br />
                    <h2>{limbistraine.curs[0]}</h2>
                    <br />
                    <p>Durata Sesiune : {limbistraine.durataMinute[0]} minute</p>
                    <p>Durata Curs: {limbistraine.durataOre[0]} ore</p>
                    <p>Coordonator {limbistraine.profesor[0]}</p>
                    <br />
                    <a href="/create" style={{
                    color:"white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px",
                    padding:"8px",
                    textDecoration: "none",
                    
                }}> Alătura-te</a>
                

                <br />
                <br />
                <br />

                <h2>{limbistraine.curs[1]}</h2>
                    <br />
                    <p>Durata Sesiune : {limbistraine.durataMinute[1]} minute</p>
                    <p>Durata Curs: {limbistraine.durataOre[1]} ore</p>
                    <p>Coordonator {limbistraine.profesor[1]}</p>
                    <br />
                    <a href="/create" style={{
                    color:"white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px",
                    padding:"8px",
                    textDecoration: "none",
                    
                }}> Alătura-te</a>

                <br />
                <br />
                <br />

                <h2>{limbistraine.curs[2]}</h2>
                    <br />
                    <p>Durata Sesiune : {limbistraine.durataMinute[2]} minute</p>
                    <p>Durata Curs: {limbistraine.durataOre[2]} ore</p>
                    <p>Coordonator {limbistraine.profesor[2]}</p>
                    <br />
                    <a href="/create" style={{
                    color:"white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px",
                    padding:"8px",
                    textDecoration: "none",
                    
                }}> Alătura-te</a>

               
                </>
               )}
                {contabilitate && (
                    <>
                    <p>{contabilitate.descriere}</p>
                    <br />
                    <br />
                    <br />
                    <h2>{contabilitate.curs[0]}</h2>
                    <br />
                    <p>Durata Sesiune : {contabilitate.durataMinute[0]} minute</p>
                    <p>Durata Curs: {contabilitate.durataOre[0]} ore</p>
                    <p>Coordonator: {contabilitate.profesor[0]}</p>
                    <br />
                    <a href="/create" style={{
                    color:"white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px",
                    padding:"8px",
                    textDecoration: "none",
                    
                }}> Alătura-te</a>
                 <br />
                <br />
                <br />

                <h2>{contabilitate.curs[1]}</h2>
                    <br />
                    <p>Durata Sesiune : {contabilitate.durataMinute[1]} minute</p>
                    <p>Durata Curs: {contabilitate.durataOre[1]} ore</p>
                    <p>Coordonator: {contabilitate.profesor[1]}</p>
                    <br />
                    <a href="/create" style={{
                    color:"white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px",
                    padding:"8px",
                    textDecoration: "none",
                    
                }}> Alătura-te</a>
                 <br />
                <br />
                <br />

                <h2>{contabilitate.curs[2]}</h2>
                    <br />
                    <p>Durata Sesiune : {contabilitate.durataMinute[2]} minute</p>
                    <p>Durata Curs: {contabilitate.durataOre[2]} ore</p>
                    <p>Coordonator: {contabilitate.profesor[2]}</p>
                    <br />
                    <a href="/create" style={{
                    color:"white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px",
                    padding:"8px",
                    textDecoration: "none",
                    
                }}> Alătura-te</a>
                 <br />
                <br />
                <br />

                <h2>{contabilitate.curs[3]}</h2>
                    <br />
                    <p>Durata Sesiune : {contabilitate.durataMinute[3]} minute</p>
                    <p>Durata Curs: {contabilitate.durataOre[3]} ore</p>
                    <p>Coordonator: {contabilitate.profesor[3]}</p>
                    <br />
                    <a href="/create" style={{
                    color:"white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px",
                    padding:"8px",
                    textDecoration: "none",
                    
                }}> Alătura-te</a>
                 <br />
                <br />
                <br />
                </>
                )}
                {analiza && (
                    <>
                    <p>{analiza.descriere}</p>
                    <br />
                    <br />
                    <br />
                    <h2>{analiza.curs[0]}</h2>
                    <br />
                    <p>Durata Sesiune : {analiza.durataMinute[0]} minute</p>
                    <p>Durata Curs: {analiza.durataOre[0]} ore</p>
                    <p>Coordonator: {analiza.profesor[0]}</p>
                    <br />
                    <a href="/create" style={{
                    color:"white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px",
                    padding:"8px",
                    textDecoration: "none",
                    
                }}> Alătura-te</a>
                 <br />
                <br />
                <br />

                <h2>{analiza.curs[1]}</h2>
                    <br />
                    <p>Durata Sesiune : {analiza.durataMinute[1]} minute</p>
                    <p>Durata Curs: {analiza.durataOre[1]} ore</p>
                    <p>Coordonator: {analiza.profesor[1]}</p>
                    <br />
                    <a href="/create" style={{
                    color:"white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px",
                    padding:"8px",
                    textDecoration: "none",
                    
                }}> Alătura-te</a>
                 <br />
                <br />
                <br />
                </>
                )}

                {informatica && (
                    <>
                    <p>{informatica.descriere}</p>
                    <br />
                    <br />
                    <br />
                     <h2>{informatica.curs[0]}</h2>
                     <br />
                     <p>Durata Sesiune : {informatica.durataMinute[0]} minute</p>
                     <p>Durata Curs: {informatica.durataOre[0]} ore</p>
                     <p>Coordonator: {informatica.profesor[0]}</p>
                     <br />
                     <a href="/create" style={{
                     color:"white",
                     backgroundColor: "#f1356d",
                     borderRadius: "8px",
                     padding:"8px",
                     textDecoration: "none",
                     
                 }}> Alătura-te</a>
                  <br />
                 <br />
                 <br />

                 <h2>{informatica.curs[1]}</h2>
                     <br />
                     <p>Durata Sesiune : {informatica.durataMinute[1]} minute</p>
                     <p>Durata Curs: {informatica.durataOre[1]} ore</p>
                     <p>Coordonator: {informatica.profesor[1]}</p>
                     <br />
                     <a href="/create" style={{
                     color:"white",
                     backgroundColor: "#f1356d",
                     borderRadius: "8px",
                     padding:"8px",
                     textDecoration: "none",
                     
                 }}> Alătura-te</a>
                  <br />
                 <br />
                 <br />

                 <h2>{informatica.curs[2]}</h2>
                     <br />
                     <p>Durata Sesiune : {informatica.durataMinute[2]} minute</p>
                     <p>Durata Curs: {informatica.durataOre[2]} ore</p>
                     <p>Coordonator: {informatica.profesor[2]}</p>
                     <br />
                     <a href="/create" style={{
                     color:"white",
                     backgroundColor: "#f1356d",
                     borderRadius: "8px",
                     padding:"8px",
                     textDecoration: "none",
                     
                 }}> Alătura-te</a>
                  <br />
                 <br />
                 <br />

                 <h2>{informatica.curs[3]}</h2>
                     <br />
                     <p>Durata Sesiune : {informatica.durataMinute[3]} minute</p>
                     <p>Durata Curs: {informatica.durataOre[3]} ore</p>
                     <p>Coordonator: {informatica.profesor[3]}</p>
                     <br />
                     <a href="/create" style={{
                     color:"white",
                     backgroundColor: "#f1356d",
                     borderRadius: "8px",
                     padding:"8px",
                     textDecoration: "none",
                     
                 }}> Alătura-te</a>
                  <br />
                 <br />
                 <br />

                 <h2>{informatica.curs[4]}</h2>
                     <br />
                     <p>Durata Sesiune : {informatica.durataMinute[4]} minute</p>
                     <p>Durata Curs: {informatica.durataOre[4]} ore</p>
                     <p>Coordonator: {informatica.profesor[4]}</p>
                     <br />
                     <a href="/create" style={{
                     color:"white",
                     backgroundColor: "#f1356d",
                     borderRadius: "8px",
                     padding:"8px",
                     textDecoration: "none",
                     
                 }}> Alătura-te</a>
                  <br />
                 <br />
                 <br />
                 </>
                )}
        </div>
    );
}
 
export default CourseDetails;