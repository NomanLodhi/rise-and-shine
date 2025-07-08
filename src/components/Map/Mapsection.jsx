import React from 'react'
import Map from './Map'
import SectionHeading from '../SectionHeading/SectionHeading'

export default function Mapsection() {
  return (
    <div>
         <div className="ak-height-125 ak-height-lg-80"></div>
            <div className="my-3">
                <SectionHeading
                           title={"Areas we covered"}
                           />
                <h5 className='text-center py-5'>List of the places that our services covers anything further than this will be a $30 charge for fuel</h5>           
            </div>
      <Map/>
    </div>

)
}
