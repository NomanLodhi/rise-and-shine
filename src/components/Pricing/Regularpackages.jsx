import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading';
import packages from '../../dataJson/regularpackages.json'
export default function Regularpackages() {

  return (
    <div>
        <div className="container">
            
                <div className="my-5">
                    <SectionHeading
                title={"Regular Packages (Maintenance Level)"}
                />
                </div>
          
              <ul class="nav nav-tabs justify-content-center border-0 nav-style" id="myTab" role="tablist">
                <li class="nav-item " role="presentation">
                  <button class="nav-link active" id="homet-tab" data-bs-toggle="tab" data-bs-target="#homet-tab-pane" type="button" role="tab" aria-controls="homet-tab-pane" aria-selected="true">Cars</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="profilet-tab" data-bs-toggle="tab" data-bs-target="#profilet-tab-pane" type="button" role="tab" aria-controls="profilet-tab-pane" aria-selected="false">SUVs</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="contactT-tab" data-bs-toggle="tab" data-bs-target="#contactT-tab-pane" type="button" role="tab" aria-controls="contactT-tab-pane" aria-selected="false">Trucks</button>
                </li>
                
              </ul>
                  <div className="price-table-container">
              <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active py-5" id="homet-tab-pane" role="tabpanel" aria-labelledby="homet-tab" tabindex="0">
                   <table className="table table-striped table-hover ">
                <thead>
                  <tr className="row-head">
                    <th scope="col"> </th>
                    <th scope="col"> <h4><p class="rounded-top-3 text-center p-3 text-bg-heading">Basic</p></h4></th>
                    <th scope="col"> <h4><p class="rounded-top-3 text-center p-3 text-bg-heading">Essentials</p></h4></th>
                    <th scope="col"> <h4><p class="rounded-top-3 text-center p-3 text-bg-heading">Premium</p></h4></th>
                  </tr>
                    
                </thead>
                <tbody>
                  <tr>
                    <td scope="col"></td>
                    <td scope="col" className="text-center">$150</td>
                    <td scope="col" className="text-center">$190</td>
                    <td scope="col" className="text-center">$230</td>
                  </tr>
                  {
                    packages.map((data)=>(
                      <>
                      <tr>
                    <th scope="row" >{data.name}</th>
                    <td className="text-center border">{
                      data.includes.find(basic=> basic=='basic')?(<i class="fa-solid fa-check text-success"></i>):(<i class="fa-solid fa-xmark text-danger"></i>)
                      }
                    </td>
                    <td className="text-center border">{
                      data.includes.find(essential=> essential=='essential')?(<i class="fa-solid fa-check text-success"></i>):(<i class="fa-solid fa-xmark text-danger"></i>)
                      }
                    </td>
                    <td className="text-center border">{
                      data.includes.find(premium=> premium=='premium')?(<i class="fa-solid fa-check text-success"></i>):(<i class="fa-solid fa-xmark text-danger"></i>)
                      }
                    </td>
                   
                  </tr>
                      </>
                    ))
                  }
                </tbody>
              </table>
                  
                 
              
                  </div>
                  <div class="tab-pane fade py-5" id="profilet-tab-pane" role="tabpanel" aria-labelledby="profilet-tab" tabindex="0">
                  <table className="table table-striped table-hover ">
                <thead>
                  <tr className="row-head">
                    <th scope="col"> </th>
                    <th scope="col"> <h4><p class="rounded-top-3 text-center p-3 text-bg-heading">Basic</p></h4></th>
                    <th scope="col"> <h4><p class="rounded-top-3 text-center p-3 text-bg-heading">Essentials</p></h4></th>
                    <th scope="col"> <h4><p class="rounded-top-3 text-center p-3 text-bg-heading">Premium</p></h4></th>
                  </tr>
                    
                </thead>
                <tbody>
                  <tr>
                    <td scope="col"></td>
                    <td scope="col" className="text-center">$170</td>
                    <td scope="col" className="text-center">$210</td>
                    <td scope="col" className="text-center">$260</td>
                  </tr>
                  {
                    packages.map((data)=>(
                      <>
                      <tr>
                    <th scope="row" >{data.name}</th>
                    <td className="text-center border">{
                      data.includes.find(basic=> basic=='basic')?(<i class="fa-solid fa-check text-success"></i>):(<i class="fa-solid fa-xmark text-danger"></i>)
                      }
                    </td>
                    <td className="text-center border">{
                      data.includes.find(essential=> essential=='essential')?(<i class="fa-solid fa-check text-success"></i>):(<i class="fa-solid fa-xmark text-danger"></i>)
                      }
                    </td>
                    <td className="text-center border">{
                      data.includes.find(premium=> premium=='premium')?(<i class="fa-solid fa-check text-success"></i>):(<i class="fa-solid fa-xmark text-danger"></i>)
                      }
                    </td>
                   
                  </tr>
                      </>
                    ))
                  }
                </tbody>
              </table>
                </div>
                <div class="tab-pane fade py-5" id="contactT-tab-pane" role="tabpanel" aria-labelledby="contactT-tab" tabindex="0">
                  <table className="table table-striped table-hover ">
                <thead>
                  <tr className="row-head">
                    <th scope="col"> </th>
                    <th scope="col"> <h4><p class="rounded-top-3 text-center p-3 text-bg-heading">Basic</p></h4></th>
                    <th scope="col"> <h4><p class="rounded-top-3 text-center p-3 text-bg-heading">Essentials</p></h4></th>
                    <th scope="col"> <h4><p class="rounded-top-3 text-center p-3 text-bg-heading">Premium</p></h4></th>
                  </tr>
                    
                </thead>
                <tbody>
                  <tr>
                    <td scope="col"></td>
                    <td scope="col" className="text-center">$200</td>
                    <td scope="col" className="text-center">$240</td>
                    <td scope="col" className="text-center">$280</td>
                  </tr>
                  {
                    packages.map((data)=>(
                      <>
                      <tr>
                    <th scope="row" >{data.name}</th>
                    <td className="text-center border">{
                      data.includes.find(basic=> basic=='basic')?(<i class="fa-solid fa-check text-success"></i>):(<i class="fa-solid fa-xmark text-danger"></i>)
                      }
                    </td>
                    <td className="text-center border">{
                      data.includes.find(essential=> essential=='essential')?(<i class="fa-solid fa-check text-success"></i>):(<i class="fa-solid fa-xmark text-danger"></i>)
                      }
                    </td>
                    <td className="text-center border">{
                      data.includes.find(premium=> premium=='premium')?(<i class="fa-solid fa-check text-success"></i>):(<i class="fa-solid fa-xmark text-danger"></i>)
                      }
                    </td>
                   
                  </tr>
                      </>
                    ))
                  }
                </tbody>
              </table>
                </div>
                </div>
              </div>
              </div>
    
        </div>
  )
}