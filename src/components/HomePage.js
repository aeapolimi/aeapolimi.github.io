import React from 'react';
import './homePage.css';

function HomePage (){
    return(<>
            <div className="App">
                <iframe title="bg" id="bg" src='../../robotrender.html' frameBorder="0"/>
                {/* <iframe title="bg" id="bg" src='https://threejs.org/examples/webgl_loader_collada_kinematics.html' frameBorder="0"/>  */}
                <header className="App-header">
                    <div className="rectangle" key="titolo"><span className="titoloLogo">AEA</span></div>
                </header>
            </div>
        </>
    )
}

export default HomePage;