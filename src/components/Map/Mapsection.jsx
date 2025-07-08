import React from 'react'
import Map from './Map'
import SectionHeading from '../SectionHeading/SectionHeading'

export default function Mapsection() {
    const serviceAreas = [
  "Langley",
  "Pitt Meadows",
  "Maple Ridge",
  "Aldergrove",
  "White Rock",
  "Surrey",
  "New West",
  "North Vancouver",
  "Burnaby",
  "Richmond",
  "Delta",
  "West Vancouver",
  "East Vancouver",
  "Chilliwack"
];

  return (
    <div>
         <div className="ak-height-125 ak-height-lg-80"></div>
            <div className="my-5">
                <SectionHeading
                           title={"Areas we covered"}
                           />
            <ul className="cities-list">
                {
                    serviceAreas.map((city)=>(
                        <li>{city}</li>
                    ))
                }
            </ul>
            </div>
                <p className='text-start p-1' style={{fontSize:'13px'}}> *Travelling Charges may apply for the distance more than 20kms</p>           
      <Map/>
    </div>

)
}
