import React from 'react'

const marine = () => {
  return (
    <div className='container-fluid'>
        <div className="row marine--main">
            <p className='search_count'>9 results </p>
            <div className="col-lg-2 col-md-3">
                <div className='main-category--form'>
                    <form>
                     <div className="custom-checkbox">
                        <input type="checkbox" name="checkbox1" id="shipshapepro" /><label for="shipshapepro" >SHIPSHAPE PROs only</label>
                    </div>
                    <button className='self-filter'>Apply</button>
                    <div className='category-lst'>
                    <div className="accordion" id="myAccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">Engine</button>									
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                <div className="card-body">
                                    <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="inboard" /><label className='px-2' for="inboard">Inboard</label></div>
                                        <div className="subcategory_lst">
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="cummins" /><label for="cummins" >Cummins</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="cat" /><label for="cat">CAT</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="nanni" /><label for="nanni">Nanni</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="westerbeke" /><label for="westerbeke">Westerbeke</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="crusader" /><label for="crusader">Crusader</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="detriot" /><label for="detriot">Detriot</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="indmar" /><label for="indmar">Indmar</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="yanmar" /><label for="yanmar">Yanmar</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="perkins" /><label for="perkins">Perkins</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="man" /><label for="man">mAN</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="universal" /><label for="universal">Universal</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="nissan" /><label for="nissan">Nissan</label></div>
                                        </div>
                                        <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="outboard" /><label className='px-2' for="outboard">Outboard</label></div>
                                        <div className="subcategory_lst">
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Mercury" /><label for="Mercury" >Mercury</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Yamaha" /><label for="Yamaha">Yamaha</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Suzuki" /><label for="Suzuki">Suzuki</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Honda" /><label for="Honda">Honda</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Evinrude" /><label for="Evinrude">Evinrude</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Tohatsu" /><label for="Tohatsu">Tohatsu</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Minn Kota" /><label for="Minn Kota">Minn Kota</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Torqeedo" /><label for="Torqeedo">Torqeedo</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo">Electrical</button>                     
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                <div className="card-body">
                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="proonly" /><label for="proonly">SHIPSHAPE PROs only</label></div>
                            
                                        <div className="subcategory_lst">
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="cummins" /><label for="cummins" >Cummins</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="cat" /><label for="cat">CAT</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="nanni" /><label for="nanni">Nanni</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="westerbeke" /><label for="westerbeke">Westerbeke</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="crusader" /><label for="crusader">Crusader</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="detriot" /><label for="detriot">Detriot</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="indmar" /><label for="indmar">Indmar</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="yanmar" /><label for="yanmar">Yanmar</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="perkins" /><label for="perkins">Perkins</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="man" /><label for="man">mAN</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="universal" /><label for="universal">Universal</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="nissan" /><label for="nissan">Nissan</label></div>
                                        </div>
                                        <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="outboard" /><label className='px-2' for="outboard">Outboard</label></div>
                                        <div className="subcategory_lst">
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Mercury" /><label for="Mercury" >Mercury</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Yamaha" /><label for="Yamaha">Yamaha</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Suzuki" /><label for="Suzuki">Suzuki</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Honda" /><label for="Honda">Honda</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Evinrude" /><label for="Evinrude">Evinrude</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Tohatsu" /><label for="Tohatsu">Tohatsu</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Minn Kota" /><label for="Minn Kota">Minn Kota</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Torqeedo" /><label for="Torqeedo">Torqeedo</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">Plumbing</button>                     
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                            <div className="card-body">
                                    <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="inboard" /><label className='px-2' for="inboard">Inboard</label></div>
                                        <div className="subcategory_lst">
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="cummins" /><label for="cummins" >Cummins</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="cat" /><label for="cat">CAT</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="nanni" /><label for="nanni">Nanni</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="westerbeke" /><label for="westerbeke">Westerbeke</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="crusader" /><label for="crusader">Crusader</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="detriot" /><label for="detriot">Detriot</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="indmar" /><label for="indmar">Indmar</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="yanmar" /><label for="yanmar">Yanmar</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="perkins" /><label for="perkins">Perkins</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="man" /><label for="man">mAN</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="universal" /><label for="universal">Universal</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="nissan" /><label for="nissan">Nissan</label></div>
                                        </div>
                                        <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="outboard" /><label className='px-2' for="outboard">Outboard</label></div>
                                        <div className="subcategory_lst">
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Mercury" /><label for="Mercury" >Mercury</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Yamaha" /><label for="Yamaha">Yamaha</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Suzuki" /><label for="Suzuki">Suzuki</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Honda" /><label for="Honda">Honda</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Evinrude" /><label for="Evinrude">Evinrude</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Tohatsu" /><label for="Tohatsu">Tohatsu</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Minn Kota" /><label for="Minn Kota">Minn Kota</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Torqeedo" /><label for="Torqeedo">Torqeedo</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour">Transportation</button>                     
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                            <div className="card-body">
                                    <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="inboard" /><label className='px-2' for="inboard">Inboard</label></div>
                                        <div className="subcategory_lst">
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="cummins" /><label for="cummins" >Cummins</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="cat" /><label for="cat">CAT</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="nanni" /><label for="nanni">Nanni</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="westerbeke" /><label for="westerbeke">Westerbeke</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="crusader" /><label for="crusader">Crusader</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="detriot" /><label for="detriot">Detriot</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="indmar" /><label for="indmar">Indmar</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="yanmar" /><label for="yanmar">Yanmar</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="perkins" /><label for="perkins">Perkins</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="man" /><label for="man">mAN</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="universal" /><label for="universal">Universal</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="nissan" /><label for="nissan">Nissan</label></div>
                                        </div>
                                        <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="outboard" /><label className='px-2' for="outboard">Outboard</label></div>
                                        <div className="subcategory_lst">
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Mercury" /><label for="Mercury" >Mercury</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Yamaha" /><label for="Yamaha">Yamaha</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Suzuki" /><label for="Suzuki">Suzuki</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Honda" /><label for="Honda">Honda</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Evinrude" /><label for="Evinrude">Evinrude</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Tohatsu" /><label for="Tohatsu">Tohatsu</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Minn Kota" /><label for="Minn Kota">Minn Kota</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Torqeedo" /><label for="Torqeedo">Torqeedo</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFive">Boat Builder</button>                     
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                            <div className="card-body">
                                    <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="inboard" /><label className='px-2' for="inboard">Inboard</label></div>
                                        <div className="subcategory_lst">
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="cummins" /><label for="cummins" >Cummins</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="cat" /><label for="cat">CAT</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="nanni" /><label for="nanni">Nanni</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="westerbeke" /><label for="westerbeke">Westerbeke</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="crusader" /><label for="crusader">Crusader</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="detriot" /><label for="detriot">Detriot</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="indmar" /><label for="indmar">Indmar</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="yanmar" /><label for="yanmar">Yanmar</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="perkins" /><label for="perkins">Perkins</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="man" /><label for="man">mAN</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="universal" /><label for="universal">Universal</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="nissan" /><label for="nissan">Nissan</label></div>
                                        </div>
                                        <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="outboard" /><label className='px-2' for="outboard">Outboard</label></div>
                                        <div className="subcategory_lst">
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Mercury" /><label for="Mercury" >Mercury</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Yamaha" /><label for="Yamaha">Yamaha</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Suzuki" /><label for="Suzuki">Suzuki</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Honda" /><label for="Honda">Honda</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Evinrude" /><label for="Evinrude">Evinrude</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Tohatsu" /><label for="Tohatsu">Tohatsu</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Minn Kota" /><label for="Minn Kota">Minn Kota</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Torqeedo" /><label for="Torqeedo">Torqeedo</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingSix">
                                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseSix">Yacht Designer</button>                     
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                            <div className="card-body">
                                    <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="inboard" /><label className='px-2' for="inboard">Inboard</label></div>
                                        <div className="subcategory_lst">
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="cummins" /><label for="cummins" >Cummins</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="cat" /><label for="cat">CAT</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="nanni" /><label for="nanni">Nanni</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="westerbeke" /><label for="westerbeke">Westerbeke</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="crusader" /><label for="crusader">Crusader</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="detriot" /><label for="detriot">Detriot</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="indmar" /><label for="indmar">Indmar</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="yanmar" /><label for="yanmar">Yanmar</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="perkins" /><label for="perkins">Perkins</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="man" /><label for="man">mAN</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="universal" /><label for="universal">Universal</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="nissan" /><label for="nissan">Nissan</label></div>
                                        </div>
                                        <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="outboard" /><label className='px-2' for="outboard">Outboard</label></div>
                                        <div className="subcategory_lst">
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Mercury" /><label for="Mercury" >Mercury</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Yamaha" /><label for="Yamaha">Yamaha</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Suzuki" /><label for="Suzuki">Suzuki</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Honda" /><label for="Honda">Honda</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Evinrude" /><label for="Evinrude">Evinrude</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Tohatsu" /><label for="Tohatsu">Tohatsu</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Minn Kota" /><label for="Minn Kota">Minn Kota</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Torqeedo" /><label for="Torqeedo">Torqeedo</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingSeven">
                                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseSeven">Below Waterline</button>                     
                            </h2>
                            <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                            <div className="card-body">
                                    <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="inboard" /><label className='px-2' for="inboard">Inboard</label></div>
                                        <div className="subcategory_lst">
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="cummins" /><label for="cummins" >Cummins</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="cat" /><label for="cat">CAT</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="nanni" /><label for="nanni">Nanni</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="westerbeke" /><label for="westerbeke">Westerbeke</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="crusader" /><label for="crusader">Crusader</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="detriot" /><label for="detriot">Detriot</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="indmar" /><label for="indmar">Indmar</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="yanmar" /><label for="yanmar">Yanmar</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="perkins" /><label for="perkins">Perkins</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="man" /><label for="man">mAN</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="universal" /><label for="universal">Universal</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="nissan" /><label for="nissan">Nissan</label></div>
                                        </div>
                                        <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="outboard" /><label className='px-2' for="outboard">Outboard</label></div>
                                        <div className="subcategory_lst">
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Mercury" /><label for="Mercury" >Mercury</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Yamaha" /><label for="Yamaha">Yamaha</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Suzuki" /><label for="Suzuki">Suzuki</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Honda" /><label for="Honda">Honda</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Evinrude" /><label for="Evinrude">Evinrude</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Tohatsu" /><label for="Tohatsu">Tohatsu</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Minn Kota" /><label for="Minn Kota">Minn Kota</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Torqeedo" /><label for="Torqeedo">Torqeedo</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingEight">
                                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseEight">Hardware</button>                     
                            </h2>
                            <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                            <div className="card-body">
                                    <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="inboard" /><label className='px-2' for="inboard">Inboard</label></div>
                                        <div className="subcategory_lst">
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="cummins" /><label for="cummins" >Cummins</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="cat" /><label for="cat">CAT</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="nanni" /><label for="nanni">Nanni</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="westerbeke" /><label for="westerbeke">Westerbeke</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="crusader" /><label for="crusader">Crusader</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="detriot" /><label for="detriot">Detriot</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="indmar" /><label for="indmar">Indmar</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="yanmar" /><label for="yanmar">Yanmar</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="perkins" /><label for="perkins">Perkins</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="man" /><label for="man">mAN</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="universal" /><label for="universal">Universal</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="nissan" /><label for="nissan">Nissan</label></div>
                                        </div>
                                        <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="outboard" /><label className='px-2' for="outboard">Outboard</label></div>
                                        <div className="subcategory_lst">
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Mercury" /><label for="Mercury" >Mercury</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Yamaha" /><label for="Yamaha">Yamaha</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Suzuki" /><label for="Suzuki">Suzuki</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Honda" /><label for="Honda">Honda</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Evinrude" /><label for="Evinrude">Evinrude</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Tohatsu" /><label for="Tohatsu">Tohatsu</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Minn Kota" /><label for="Minn Kota">Minn Kota</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Torqeedo" /><label for="Torqeedo">Torqeedo</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingNine">
                                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseNine">Above Waterline</button>                     
                            </h2>
                            <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                            <div className="card-body">
                                    <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="inboard" /><label className='px-2' for="inboard">Inboard</label></div>
                                        <div className="subcategory_lst">
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="cummins" /><label for="cummins" >Cummins</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="cat" /><label for="cat">CAT</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="nanni" /><label for="nanni">Nanni</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="westerbeke" /><label for="westerbeke">Westerbeke</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="crusader" /><label for="crusader">Crusader</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="detriot" /><label for="detriot">Detriot</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="indmar" /><label for="indmar">Indmar</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="yanmar" /><label for="yanmar">Yanmar</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="perkins" /><label for="perkins">Perkins</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="man" /><label for="man">mAN</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="universal" /><label for="universal">Universal</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="nissan" /><label for="nissan">Nissan</label></div>
                                        </div>
                                        <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="outboard" /><label className='px-2' for="outboard">Outboard</label></div>
                                        <div className="subcategory_lst">
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Mercury" /><label for="Mercury" >Mercury</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Yamaha" /><label for="Yamaha">Yamaha</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Suzuki" /><label for="Suzuki">Suzuki</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Honda" /><label for="Honda">Honda</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Evinrude" /><label for="Evinrude">Evinrude</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Tohatsu" /><label for="Tohatsu">Tohatsu</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Minn Kota" /><label for="Minn Kota">Minn Kota</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Torqeedo" /><label for="Torqeedo">Torqeedo</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTen">
                                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTen">Sailboat</button>                     
                            </h2>
                            <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                            <div className="card-body">
                                    <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="inboard" /><label className='px-2' for="inboard">Inboard</label></div>
                                        <div className="subcategory_lst">
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="cummins" /><label for="cummins" >Cummins</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="cat" /><label for="cat">CAT</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="nanni" /><label for="nanni">Nanni</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="westerbeke" /><label for="westerbeke">Westerbeke</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="crusader" /><label for="crusader">Crusader</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="detriot" /><label for="detriot">Detriot</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="indmar" /><label for="indmar">Indmar</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="yanmar" /><label for="yanmar">Yanmar</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="perkins" /><label for="perkins">Perkins</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="man" /><label for="man">mAN</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="universal" /><label for="universal">Universal</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="nissan" /><label for="nissan">Nissan</label></div>
                                        </div>
                                        <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="outboard" /><label className='px-2' for="outboard">Outboard</label></div>
                                        <div className="subcategory_lst">
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Mercury" /><label for="Mercury" >Mercury</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Yamaha" /><label for="Yamaha">Yamaha</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Suzuki" /><label for="Suzuki">Suzuki</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Honda" /><label for="Honda">Honda</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Evinrude" /><label for="Evinrude">Evinrude</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Tohatsu" /><label for="Tohatsu">Tohatsu</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Minn Kota" /><label for="Minn Kota">Minn Kota</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Torqeedo" /><label for="Torqeedo">Torqeedo</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingEleven">
                                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseEleven">Power Generation</button>                     
                            </h2>
                            <div id="collapseEleven" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                            <div className="card-body">
                                    <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="inboard" /><label className='px-2' for="inboard">Inboard</label></div>
                                        <div className="subcategory_lst">
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="cummins" /><label for="cummins" >Cummins</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="cat" /><label for="cat">CAT</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="nanni" /><label for="nanni">Nanni</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="westerbeke" /><label for="westerbeke">Westerbeke</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="crusader" /><label for="crusader">Crusader</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="detriot" /><label for="detriot">Detriot</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="indmar" /><label for="indmar">Indmar</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="yanmar" /><label for="yanmar">Yanmar</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="perkins" /><label for="perkins">Perkins</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="man" /><label for="man">mAN</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="universal" /><label for="universal">Universal</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="nissan" /><label for="nissan">Nissan</label></div>
                                        </div>
                                        <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="outboard" /><label className='px-2' for="outboard">Outboard</label></div>
                                        <div className="subcategory_lst">
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Mercury" /><label for="Mercury" >Mercury</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Yamaha" /><label for="Yamaha">Yamaha</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Suzuki" /><label for="Suzuki">Suzuki</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Honda" /><label for="Honda">Honda</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Evinrude" /><label for="Evinrude">Evinrude</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Tohatsu" /><label for="Tohatsu">Tohatsu</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Minn Kota" /><label for="Minn Kota">Minn Kota</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Torqeedo" /><label for="Torqeedo">Torqeedo</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwelve">
                                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwelve">Winter</button>                     
                            </h2>
                            <div id="collapseTwelve" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                            <div className="card-body">
                                    <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="inboard" /><label className='px-2' for="inboard">Inboard</label></div>
                                        <div className="subcategory_lst">
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="cummins" /><label for="cummins" >Cummins</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="cat" /><label for="cat">CAT</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="nanni" /><label for="nanni">Nanni</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="westerbeke" /><label for="westerbeke">Westerbeke</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="crusader" /><label for="crusader">Crusader</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="detriot" /><label for="detriot">Detriot</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="indmar" /><label for="indmar">Indmar</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="yanmar" /><label for="yanmar">Yanmar</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="perkins" /><label for="perkins">Perkins</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="man" /><label for="man">mAN</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="universal" /><label for="universal">Universal</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="nissan" /><label for="nissan">Nissan</label></div>
                                        </div>
                                        <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="outboard" /><label className='px-2' for="outboard">Outboard</label></div>
                                        <div className="subcategory_lst">
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Mercury" /><label for="Mercury" >Mercury</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Yamaha" /><label for="Yamaha">Yamaha</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Suzuki" /><label for="Suzuki">Suzuki</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Honda" /><label for="Honda">Honda</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Evinrude" /><label for="Evinrude">Evinrude</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Tohatsu" /><label for="Tohatsu">Tohatsu</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Minn Kota" /><label for="Minn Kota">Minn Kota</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Torqeedo" /><label for="Torqeedo">Torqeedo</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThirteen">
                                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThirteen">Interior</button>                     
                            </h2>
                            <div id="collapseThirteen" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                            <div className="card-body">
                                    <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="inboard" /><label className='px-2' for="inboard">Inboard</label></div>
                                        <div className="subcategory_lst">
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="cummins" /><label for="cummins" >Cummins</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="cat" /><label for="cat">CAT</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="nanni" /><label for="nanni">Nanni</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="westerbeke" /><label for="westerbeke">Westerbeke</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="crusader" /><label for="crusader">Crusader</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="detriot" /><label for="detriot">Detriot</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="indmar" /><label for="indmar">Indmar</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="yanmar" /><label for="yanmar">Yanmar</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="perkins" /><label for="perkins">Perkins</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="man" /><label for="man">mAN</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="universal" /><label for="universal">Universal</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="nissan" /><label for="nissan">Nissan</label></div>
                                        </div>
                                        <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="outboard" /><label className='px-2' for="outboard">Outboard</label></div>
                                        <div className="subcategory_lst">
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Mercury" /><label for="Mercury" >Mercury</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Yamaha" /><label for="Yamaha">Yamaha</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Suzuki" /><label for="Suzuki">Suzuki</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Honda" /><label for="Honda">Honda</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Evinrude" /><label for="Evinrude">Evinrude</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Tohatsu" /><label for="Tohatsu">Tohatsu</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Minn Kota" /><label for="Minn Kota">Minn Kota</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Torqeedo" /><label for="Torqeedo">Torqeedo</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFourteen">
                                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFourteen">Haul Out</button>                     
                            </h2>
                            <div id="collapseFourteen" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                            <div className="card-body">
                                    <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="inboard" /><label className='px-2' for="inboard">Inboard</label></div>
                                        <div className="subcategory_lst">
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="cummins" /><label for="cummins" >Cummins</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="cat" /><label for="cat">CAT</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="nanni" /><label for="nanni">Nanni</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="westerbeke" /><label for="westerbeke">Westerbeke</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="crusader" /><label for="crusader">Crusader</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="detriot" /><label for="detriot">Detriot</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="indmar" /><label for="indmar">Indmar</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="yanmar" /><label for="yanmar">Yanmar</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="perkins" /><label for="perkins">Perkins</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="man" /><label for="man">mAN</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="universal" /><label for="universal">Universal</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="nissan" /><label for="nissan">Nissan</label></div>
                                        </div>
                                        <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="outboard" /><label className='px-2' for="outboard">Outboard</label></div>
                                        <div className="subcategory_lst">
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Mercury" /><label for="Mercury" >Mercury</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Yamaha" /><label for="Yamaha">Yamaha</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Suzuki" /><label for="Suzuki">Suzuki</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Honda" /><label for="Honda">Honda</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Evinrude" /><label for="Evinrude">Evinrude</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Tohatsu" /><label for="Tohatsu">Tohatsu</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Minn Kota" /><label for="Minn Kota">Minn Kota</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Torqeedo" /><label for="Torqeedo">Torqeedo</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFifteen">
                                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFifteen">Surveyor</button>                     
                            </h2>
                            <div id="collapseFifteen" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                            <div className="card-body">
                                    <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="inboard" /><label className='px-2' for="inboard">Inboard</label></div>
                                        <div className="subcategory_lst">
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="cummins" /><label for="cummins" >Cummins</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="cat" /><label for="cat">CAT</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="nanni" /><label for="nanni">Nanni</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="westerbeke" /><label for="westerbeke">Westerbeke</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="crusader" /><label for="crusader">Crusader</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="detriot" /><label for="detriot">Detriot</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="indmar" /><label for="indmar">Indmar</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="yanmar" /><label for="yanmar">Yanmar</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="perkins" /><label for="perkins">Perkins</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="man" /><label for="man">mAN</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="universal" /><label for="universal">Universal</label></div>
                                                <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="nissan" /><label for="nissan">Nissan</label></div>
                                        </div>
                                        <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="outboard" /><label className='px-2' for="outboard">Outboard</label></div>
                                        <div className="subcategory_lst">
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Mercury" /><label for="Mercury" >Mercury</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Yamaha" /><label for="Yamaha">Yamaha</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Suzuki" /><label for="Suzuki">Suzuki</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Honda" /><label for="Honda">Honda</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Evinrude" /><label for="Evinrude">Evinrude</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Tohatsu" /><label for="Tohatsu">Tohatsu</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Minn Kota" /><label for="Minn Kota">Minn Kota</label></div>
                                            <div className="custom-checkbox"><input type="checkbox" name="checkbox1" id="Torqeedo" /><label for="Torqeedo">Torqeedo</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </form>
                </div>
            </div>
            <div className="col">
                <div className='main-tech-search'>
                    <div className='tech_pro'>
                        <div className='custom-media'>
                            <div className="media">
                                <div className="media-left">
                                <img src="../../images/boatrx_square_whitebg.png" className="media-object" />
                                </div>
                                <div className="media-body">
                                <h6>BoatRx<sub>PRO</sub></h6>
                                <div className="review-star">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i> <span>5</span><span className="review-count">(1)</span>
                                </div>
                                    <div className='h-scroll'>
                                        <div className='tech_lst'>
                                            <div className='tech-icon'><i><img src="../../images/icons/search-icon15.png" alt="" /></i> <span>Electrical</span></div>
                                            <div className='tech-icon'><i><img src="../../images/icons/search-icon11.png" alt="" /></i> <span>Interior</span></div>
                                            <div className='tech-icon'><i><img src="../../images/icons/icon5.png" alt="" /></i> <span>Power Generation</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='custom-media'>
                            <div className="media">
                                <div className="media-left">
                                <img src="../../images/safety.png" className="media-object" />
                                </div>
                                <div className="media-body">
                                <h6>Cape Cod Boatworks<sub>PRO</sub></h6>
                                    <div className="review-star">
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i> 
                                        <span></span>
                                        <span className="review-count"></span>
                                    </div>
                                    <div className='h-scroll'>
                                        <div className='tech_lst'>
                                            <div className='tech-icon'><i><img src="../../images/icons/icon3.png" alt="" /></i> <span>Above Waterline</span></div>
                                            <div className='tech-icon'><i><img src="../../images/icons/search-icon8-1.png" alt="" /></i> <span>Above Waterline</span></div>
                                            <div className='tech-icon'><i><img src="../../images/icons/icon1.png" alt="" /></i> <span>Engine</span></div>
                                            <div className='tech-icon'><i><img src="../../images/icons/search-icon11.png" alt="" /></i> <span>Interior</span></div>
                                            <div className='tech-icon'><i><img src="../../images/icons/icon4.png" alt="" /></i> <span>Transportation</span></div>
                                            <div className='tech-icon'><i><img src="../../images/icons/icon2.png" alt="" /></i> <span>Winter</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='custom-media'>
                            <div className="media">
                                <div className="media-left">
                                <img src="../../images/before-the-storm-1.jpeg" className="media-object" />
                                </div>
                                <div className="media-body">
                                <h6>Thunderbolt Marine<sub>PRO</sub></h6>
                                    <div className="review-star">
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <span></span>
                                        <span className="review-count"></span>
                                    </div>
                                    <div className='h-scroll'>
                                        <div className='tech_lst'>
                                            <div className='tech-icon'><i><img src="../../images/icons/icon3.png" alt="" /></i> <span>Above Waterline</span></div>
                                            <div className='tech-icon'><i><img src="../../images/icons/search-icon8-1.png" alt="" /></i> <span>Below Waterline</span></div>
                                            <div className='tech-icon'><i><img src="../../images/icons/search-icon15.png" alt="" /></i> <span>Electrical</span></div>
                                            <div className='tech-icon'><i><img src="../../images/icons/icon1.png" alt="" /></i> <span>Engine</span></div>
                                            <div className='tech-icon'><i><img src="../../images/icons/search-icon14.png" alt="" /></i> <span>Hardware</span></div>
                                            <div className='tech-icon'><i><img src="../../images/icons/search-icon9.png" alt="" /></i> <span>Haul Out</span></div>
                                            <div className='tech-icon'><i><img src="../../images/icons/search-icon11.png" alt="" /></i> <span>Interior</span></div>
                                            <div className='tech-icon'><i><img src="../../images/icons/icon6.png" alt="" /></i> <span>Plumbing</span></div>
                                            <div className='tech-icon'><i><img src="../../images/icons/icon5.png" alt="" /></i> <span>Power Generation</span></div>
                                            <div className='tech-icon'><i><img src="../../images/icons/search-icon10.png" alt="" /></i> <span>Sailboat</span></div>
                                            <div className='tech-icon'><i><img src="../../images/icons/icon2.png" alt="" /></i> <span>Winter</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='custom-media'>
                            <div className="media">
                                <div className="media-left">
                                <img src="../../images/boatrx_square_whitebg.png" className="media-object" />
                                </div>
                                <div className="media-body">
                                <h6>BoatRx<sub>PRO</sub></h6>
                                <div className="review-star">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i> <span>5</span><span className="review-count">(1)</span>
                                </div>
                                    <div className='h-scroll'>
                                        <div className='tech_lst'>
                                            <div className='tech-icon'><i><img src="../../images/icons/search-icon15.png" alt="" /></i> <span>Electrical</span></div>
                                            <div className='tech-icon'><i><img src="../../images/icons/search-icon11.png" alt="" /></i> <span>Interior</span></div>
                                            <div className='tech-icon'><i><img src="../../images/icons/icon5.png" alt="" /></i> <span>Power Generation</span></div>
                                            <div className='tech-icon'><i><img src="../../images/icons/search-icon15.png" alt="" /></i> <span>Electrical</span></div>
                                            <div className='tech-icon'><i><img src="../../images/icons/search-icon11.png" alt="" /></i> <span>Interior</span></div>
                                            <div className='tech-icon'><i><img src="../../images/icons/icon5.png" alt="" /></i> <span>Power Generation</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='tect-user'>
                        <div className="custom-media">
                            <div className="media">
                                <div className="media-left"><img src="../../images/safety.png" className="media-object" /></div>
                                <div className="media-body">
                                    <h6>BoatRx<sub>PRO</sub></h6>
                                    <div className="review-star"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> <span>5</span><span className="review-count">(1)</span></div>
                                    <div className="h-scroll">
                                        <div className="tech_lst">
                                            <div className="tech-icon">
                                                <i><img src="../../images/icons/search-icon15.png" alt="" /></i> 
                                                <i><img src="../../images/icons/search-icon11.png" alt="" /></i>
                                                <i><img src="../../images/icons/icon5.png" alt="" /></i>
                                                <i><img src="../../images/icons/search-icon15.png" alt="" /></i>
                                                <i><img src="../../images/icons/search-icon11.png" alt="" /></i>
                                                <i><img src="../../images/icons/icon5.png" alt="" /></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="custom-media">
                            <div className="media">
                                <div className="media-left"><img src="../../images/safety.png" className="media-object" /></div>
                                <div className="media-body">
                                    <h6>BoatRx<sub>PRO</sub></h6>
                                    <div className="review-star"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> <span>5</span><span className="review-count">(1)</span></div>
                                    <div className="h-scroll">
                                        <div className="tech_lst">
                                            <div className="tech-icon">
                                                <i><img src="../../images/icons/search-icon15.png" alt="" /></i> 
                                                <i><img src="../../images/icons/search-icon11.png" alt="" /></i>
                                                <i><img src="../../images/icons/icon5.png" alt="" /></i>
                                                <i><img src="../../images/icons/search-icon15.png" alt="" /></i>
                                                <i><img src="../../images/icons/search-icon11.png" alt="" /></i>
                                                <i><img src="../../images/icons/icon5.png" alt="" /></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="custom-media">
                            <div className="media">
                                <div className="media-left"><img src="../../images/safety.png" className="media-object" /></div>
                                <div className="media-body">
                                    <h6>BoatRx<sub>PRO</sub></h6>
                                    <div className="review-star"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> <span>5</span><span className="review-count">(1)</span></div>
                                    <div className="h-scroll">
                                        <div className="tech_lst">
                                            <div className="tech-icon">
                                                <i><img src="../../images/icons/search-icon15.png" alt="" /></i> 
                                                <i><img src="../../images/icons/search-icon11.png" alt="" /></i>
                                                <i><img src="../../images/icons/icon5.png" alt="" /></i>
                                                <i><img src="../../images/icons/search-icon15.png" alt="" /></i>
                                                <i><img src="../../images/icons/search-icon11.png" alt="" /></i>
                                                <i><img src="../../images/icons/icon5.png" alt="" /></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="custom-media">
                            <div className="media">
                                <div className="media-left"><img src="../../images/safety.png" className="media-object" /></div>
                                <div className="media-body">
                                    <h6>BoatRx<sub>PRO</sub></h6>
                                    <div className="review-star"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> <span>5</span><span className="review-count">(1)</span></div>
                                    <div className="h-scroll">
                                        <div className="tech_lst">
                                            <div className="tech-icon">
                                                <i><img src="../../images/icons/search-icon15.png" alt="" /></i> 
                                                <i><img src="../../images/icons/search-icon11.png" alt="" /></i>
                                                <i><img src="../../images/icons/icon5.png" alt="" /></i>
                                                <i><img src="../../images/icons/search-icon15.png" alt="" /></i>
                                                <i><img src="../../images/icons/search-icon11.png" alt="" /></i>
                                                <i><img src="../../images/icons/icon5.png" alt="" /></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav aria-label=" Page navigation example">
                    <ul className="ship_styl pagination mt-4 mb-5">
                        <li className="page-item">
                        <a className="page-link" to="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>
                        <li className="page-item"><a className="page-link" to="#">1</a></li>
                        <li className="page-item"><a className="page-link" to="#">2</a></li>
                        <li className="page-item"><a className="page-link" to="#">3</a></li>
                        <li className="page-item">
                        <a className="page-link" to="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                        </li>
                    </ul>
                    </nav>
            </div>
            <div className="col">
                <div className="main-iframe">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.90977327293!2d-79.54286233854499!3d43.7183709578687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2s!4v1692009965988!5m2!1sen!2s" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default marine
