import './Home.css';
import defaultImage from '../stataticFiles/avat.png'
import FileContainer from './fileContainer/FileContainer';
import { useContext } from 'react';
import { UserContext } from '../App';


function Home() {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


  return (
      <main>
            <section className="row d-flex align-items-center justify-content-center user-dashBoard">
                <div className="col">
                    <img src={defaultImage} alt="" className="img-fluid user-img"/>
                </div>
                <div className="col user-info">
                    <h6 className="textColor1 fw-bold">{loggedInUser.user.name}</h6>
                    <h6 className="textColor2 fw-bold">{loggedInUser.user.email}</h6>
                </div>
            </section>

            <section>
                <FileContainer />
            </section>
            
        </main>
  );
}

export default Home;
