import React from 'react'
import './Page3.css';
import { useNavigate } from 'react-router-dom';

function Page3() {
    let navigate = useNavigate('');
    return (
        <div>
            <div className='login'>
                <div className="card" >


                    <div className='logo'>

                        <div className='innerlogo'><img className='logoimage' src='./eden.png' alt='logo'></img> Eden</div>
                        </div>
                        <div className='progress'>
                        <div className="row stepbar">
                        <div className="col-md-2 " id='one'></div>
                            <div className="col-md-4 " id='one'></div>
                            <div className="col-md-4 " id='one'></div>
                            <div className="col-md-2 "></div>


                        </div>
                        <div className="col-md-12 stepbox">
                            <div className="steps" id="one">1</div><div className="steps" id="one">2</div><div className="steps" id="one">3</div><div className="steps" id="4">4</div>
                        </div>
                   </div>
                    <h3 className="card-title">How are you planing to use Eden?</h3>
                    <p className="card-text">We will streamline your setup accordingly.</p>
                    <div className='boxes'>
                       <div className='box'>
                   <img className='iconimage' src='./boxicon1.png' alt='icon'/>
                   <h6>for myself</h6>
                   <p id='desc'>Write better.Think more clearly. Stay organized</p>
                       </div>
                       <div className='box'>
                                              <img className='iconimage' src='./boxicon2.png' alt='icon'/>
                                              <h6>with my team</h6>
                                              <p id='desc'>wikis, docs, tasks and projects, all in one place</p>
                       </div>
                    </div>

                    <div className="mb-3 row ">
                        <div className="d-grid col-md-12 inputicon">
                            <button className="btn btn-primary form-control" type="button" id='loginbutton' onClick={() => { navigate('/Page4') }}
                            >Create Workspace</button>
                        </div>

                    </div>


                </div>



            </div>
        </div>
    )
}

export default Page3
