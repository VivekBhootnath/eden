import React from 'react'
import './Page2.css';
import { useNavigate } from 'react-router-dom';

function Page2() {
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
                            <div className="col-md-4 "></div>
                            <div className="col-md-2 "></div>

                        </div>
                        <div className="col-md-12 stepbox">
                            <div className="steps" id="one">1</div><div className="steps" id="one">2</div><div className="steps" id="3">3</div><div className="steps" id="4">4</div>
                        </div>
                   </div>
                    <h3 className="card-title">Let's set up a home for all your work</h3>
                    <p className="card-text">You can always create another workspace later.</p>
                    <form>
                        <div className="mb-3 row">
                            <div className="col-md-12 inputicon">
                                <label>Workspace Name</label>
                                <input type="email" className="form-control" name="email" id="email"
                                    placeholder='Eden' />
                            </div>
                        </div>

                        

                        <div className="mb-3 row ">

                        <div class="col-md-11 input-group flex-nowrap inputicon2">
  <span class="input-group-text" id="addon-wrapping">www.eden.com/</span>
  <input type="text" class="form-control" placeholder="Example"  aria-describedby="addon-wrapping"/>
</div>

                            {/* <div className="col-md-12 inputicon">
                                <label className='form-label'>Workspace URL<span>(Optional)</span></label>
                                <input type="password" class="form-control"
                                    placeholder='Password' />

                            </div> */}

                        </div>
                    </form>

                    <div className="mb-3 row ">
                        <div className="d-grid col-md-12 inputicon">
                            <button className="btn btn-primary form-control" type="button" id='loginbutton' onClick={() => { navigate('/Page3') }}
                            >Create Workspace</button>
                        </div>

                    </div>


                </div>



            </div>
        </div>
    )
}

export default Page2
