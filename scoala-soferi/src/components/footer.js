import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
export default function AppFooter() {
    const [showTop, setShowTop]=useState(false);

    useEffect(() => {
      window.addEventListener('scroll', ()=>{
        if(window.scrollY>400){
            setShowTop(true);
        } else{
            setShowTop(false);
        }
      })
    },[])

    function goTop(){
        window.scroll({
            top:0,
            behavior:'smooth'
        })
    }

    return(
       <Container fluid>
           <div className="copyright">&copy; All Right Reserved.</div>
           {
            showTop && (<div className='go-top' onClick={goTop}></div>)
           }
       </Container>
    )
}