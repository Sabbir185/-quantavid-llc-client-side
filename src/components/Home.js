import './Home.css';
import defaultImage from '../stataticFiles/avat.png'
// import jwt_decode from 'jwt-decode'
import FileContainer from './fileContainer/FileContainer';



function Home() {
//   const {
//       name, email
//   } = jwt_decode(JSON.parse(localStorage.getItem('jwt')));
const name='sabbir';
const email='sabbir@gmail.com';


  return (
      <main>
            <section className="row d-flex align-items-center justify-content-center user-dashBoard">
                <div className="col">
                    <img src={defaultImage} alt="" className="img-fluid user-img"/>
                </div>
                <div className="col user-info">
                    <h6 className="textColor1 fw-bold">{name? name: ''}</h6>
                    <h6 className="textColor2 fw-bold">{email? email : ''}</h6>
                </div>
            </section>

            <section>
                <FileContainer />
            </section>
            
        </main>
  );
}

export default Home;
