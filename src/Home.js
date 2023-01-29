import { useState, useEffect } from 'react';
import CourseList from './CourseList';
import useFetch from './useFetch';
import ProfilePage from './ProfilePage';


const Home = () => {

const {data: stiinte} = useFetch('http://localhost:8000/stiinte')
const {data: limbistraine} = useFetch('http://localhost:8000/limbistraine')
const {data: contabilitate} = useFetch('http://localhost:8000/contabilitate')
const {data: analiza} = useFetch('http://localhost:8000/analiza')
const {data: informatica} = useFetch('http://localhost:8000/informatica')


    return ( 

        <div className="home">
         { stiinte && <CourseList blogs={stiinte}/>}
         { limbistraine && <CourseList blogs={limbistraine}/>}
         { contabilitate && <CourseList blogs={contabilitate}/>}
         { analiza && <CourseList blogs={analiza}/>}
         { informatica && <CourseList blogs={informatica}/>}
         

        </div>
     );
     
}


export default Home;