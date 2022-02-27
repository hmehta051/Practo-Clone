import { useState } from 'react'
import './FindDoctorSearch.css'

export const FindDoctorSearch = () => {

    const [locationResultHidden, setLocationResultHidden] = useState(true);
    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const [searchLocation, setSearchLocation] = useState('');
    const [searchDoctor, setSearchDoctor] = useState('');


    const initLocations = [
        {
            place: "Vijay Nagar",
            city: "Indore"
        },
        {
            place: "Old Palasia",
            city: "Indore"
        },
        {
            place: "New Palasia",
            city: "Indore"
        },
        {
            place: "Sapna Sangeeta",
            city: "Indore"
        },
        {
            place: "Ab Road",
            city: "Indore"
        },
        {
            place: "Lig Colony",
            city: "Indore"
        },
        {
            place: "Sudama Nagar",
            city: "Indore"
        },
    ]

    const initSpeciality = [
        'Dentist', 'Gynecologist/obstetrician', 'General Physician', 'Dermatologist', 'Ear-nose-throat (ent) Specialist', 'Homeopath', 'Ayurveda'
    ]

    const [specialities, setSpecialities] = useState(initSpeciality);

    const [locations, setLocations] = useState(initLocations);

    return <div className="home-search-container">
        <div className="location-search-box">
            {/* <img src={process.env.PUBLIC_URL + './images/location.svg'} alt="" width="22" /> */}
            <input type="text" className="search-location-input-box" placeholder="Search location" onFocus={() => setLocationResultHidden(false)} onBlur={() => setLocationResultHidden(true)} value={searchLocation} onChange={(e) => setSearchLocation(e.target.value)} />
            <div className="search-location-input-results" hidden={locationResultHidden}>
                {
                    locations.map(location => <div className="search-location-result-item" key={location.place} onMouseDown={() => setSearchLocation(location.place)}>
                        {/* <span><img src={process.env.PUBLIC_URL + './images/search.svg'} alt="" width="12" /></span> */}
                        <span><div>{location.place}</div><div>{location.city}</div></span>
                    </div>)
                }
            </div>
        </div>
        <div className="doctor-search-box">
            {/* <img src={process.env.PUBLIC_URL + 'https://img.icons8.com/ios-glyphs/30/000000/search--v1.png'} alt="" width="22" /> */}
            <input type="text" className="search-doctor-input-box" placeholder="Search doctors, clinics, hospitals, etc." onFocus={() => setDoctorResultHidden(false)} onBlur={() => setDoctorResultHidden(true)} value={searchDoctor} onChange={(e) => setSearchDoctor(e.target.value)} />
            <div className="search-doctor-input-results" hidden={doctorResultHidden}>
                {
                    specialities.map(speciality => <div className="search-doctor-result-item" key={speciality} onMouseDown={() => setSearchDoctor(speciality)}>
                        {/* <span><img src={process.env.PUBLIC_URL + './images/search.svg'} alt="" width="12" /></span> */}
                        <span>{speciality}</span>
                        <span>SPECIALITY</span>
                    </div>)
                }
            </div>
        </div>
    </div>
}