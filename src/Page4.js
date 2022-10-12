import React from 'react'
import './Page4.css';


function Page4() {
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
                            <div className="col-md-2 " id='one'></div>


                        </div>
                        <div className="col-md-12 stepbox">
                            <div className="steps" id="one">1</div><div className="steps" id="one">2</div><div className="steps" id="one">3</div><div className="steps" id="one">4</div>
                        </div>
                   </div>

                       <img className='completeicon' src='./completeicon.png' alt='logo'/>

                    <h3 className="card-title">Congratulations, Eren!</h3>
                    <p className="card-text">You have completed onboarding, you can start using the Eden!.</p>

                    <div className="mb-3 row ">
                        <div className="d-grid col-md-12 inputicon">
                            <button className="btn btn-primary form-control" type="button" id='loginbutton'
                            >Launch Eden</button>
                        </div>

                    </div>

                </div>
            



            </div>
        </div>
    )
}

export default Page4
