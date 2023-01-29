import { Link } from "react-router-dom";
const CourseList = ({blogs}) => {
    
    return ( 
        
        <div className="blog-list">
            
             {blogs.map((categorii) => (
                
            <div className="blog-preview" key={categorii.id}>
                <Link to={`/details/${categorii.id}`}>
                <h2>{categorii.categorieCurs}</h2>
                <p>{categorii.descriere}</p>
                 </Link>
                 
                    
               
            
                
            </div>
           ))}
        
        </div>
     );
}
 
export default CourseList;