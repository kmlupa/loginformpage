import React from 'react'

function Card() {
  return (
    <>
    <h3 className='text-primary'>Tasks</h3>
   <div className="w-100">
    <div className="scroller scroller-left float-start mt-2"><i className="bi bi-caret-left-fill"></i></div>
    <div className="scroller scroller-right float-end mt-2"><i className="bi bi-caret-right-fill"></i></div>
    <div className="wrapper-nav">
        <nav className="nav nav-tabs list mt-2" id="myTab" role="tablist">
            <a className="nav-item nav-link pointer active" data-bs-toggle="tab" data-bs-target="#tab1" role="tab" aria-controls="public" aria-selected="true">Daily</a>
            <a className="nav-item nav-link pointer" data-bs-target="#tab2" role="tab" data-bs-toggle="tab">Pending</a>
            <a className="nav-item nav-link pointer" data-bs-target="#tab3" role="tab" data-bs-toggle="tab">Monthly</a>
        </nav>
    </div>

    <div className="tab-content p-3 border rounded m-auto p-5 bg-light" id="myTabContent" style={{height:"38vh"}}>
        <div role="tabpanel" className="tab-pane fade active show mt-2" id="tab1" aria-labelledby="public-tab" >
            This is the Daily content...
        </div>
        <div className="tab-pane fade mt-2" id="tab2" role="tabpanel" aria-labelledby="group-dropdown2-tab" >
            This is the Pending ...
        </div>
        <div className="tab-pane fade mt-2" id="tab3" role="tabpanel" aria-labelledby="group-dropdown2-tab" >
            This is the Monthly...
        </div>
    </div>
</div>
    </>
  )
}

export default Card