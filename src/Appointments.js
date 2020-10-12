import React from 'react'
import './Appointments.css';
function Appointments() {
    return (
        <div className="appointments">
            <div className="appointments__header">
                <div className="appointments__headerLogo">
                    <a href="#">SARS</a>
                </div>
                <div className="appointments__headerSearch">
                    <input type="text" name="search" placeholder="search doctors"></input>
                    <button className="appointments__headerButton" type="submit">Search</button>
                
                </div>
            </div>
            <div className="appointments__doctorsList">
                <div className="appointments__doctorsListCards">
                    <div className="cards__info">
                    <img className="cards__image" src="https://justdental.in/wp-content/uploads/2018/04/dental-4_647_051316081704.jpg"/>
                    <div className="cards__name">
                        <p>Dentist</p>
                    </div>
                    <div className="cards__button">
                        <button>Search Doctors</button>
                    </div>
                    </div>
                </div>
                  <div className="appointments__doctorsListCards">
                    <div className="cards__info">
                    <img className="cards__image" src="https://www.compareinsurance.ae/static/img/guides/physiotherapy.jpg"/>
                    <div className="cards__name">
                        <p>Gynecologist</p>
                    </div>
                    <div className="cards__button">
                        <button>Search Doctors</button>
                    </div>
                    </div>
                </div>  
                <div className="appointments__doctorsListCards">
                    <div className="cards__info">
                    <img className="cards__image" src="https://loyolamedicine.org/sites/default/files/styles/blog_news_basic_page_image/public/news/kidney_release_0.jpg?itok=TWezs2NF"/>
                    <div className="cards__name">
                        <p>Dietician</p>
                    </div>
                    <div className="cards__button">
                        <button>Search Doctors</button>
                    </div>
                    </div>
                </div>
                  <div className="appointments__doctorsListCards">
                    <div className="cards__info">
                    <img className="cards__image" src="https://www.compareinsurance.ae/static/img/guides/physiotherapy.jpg"/>
                    <div className="cards__name">
                        <p>Physiotherapist</p>
                    </div>
                    <div className="cards__button">
                        <button>Search Doctors</button>
                    </div>
                    </div>
                </div>
                </div>
                    <div className="appointments__doctorsList">
                  <div className="appointments__doctorsListCards">
                    <div className="cards__info">
                    <img className="cards__image" src="https://lankainformation.lk/media/com_mtree/images/listings/m/33720.jpg"/>
                    <div className="cards__name">
                        <p>Surgeon</p>
                    </div>
                    <div className="cards__button">
                        <button>Search Doctors</button>
                    </div>
                    </div>
                </div>
                <div className="appointments__doctorsListCards">
                    <div className="cards__info">
                    <img className="cards__image" src="https://ccoe.us/wp-content/uploads/2019/08/iStock-532399564-1.jpg"/>
                    <div className="cards__name">
                        <p>Orthropedist</p>
                    </div>
                    <div className="cards__button">
                        <button>Search Doctors</button>
                    </div>
                    </div>
                </div>
                <div className="appointments__doctorsListCards">
                    <div className="cards__info">
                    <img className="cards__image" src="https://www.starhospitalpune.com/wp-content/uploads/2019/06/general-medicine.jpg"/>
                    <div className="cards__name">
                        <p>General Physician</p>
                    </div>
                    <div className="cards__button">
                        <button>Search Doctors</button>
                    </div>
                    </div>
                </div>
                <div className="appointments__doctorsListCards">
                    <div className="cards__info">
                    <img className="cards__image" src="https://www.sheknows.com/wp-content/uploads/2018/08/woman-and-baby-at-an-appointment-with-pediatrician_bbckvh.jpeg"/>
                    <div className="cards__name">
                        <p>Pediatrician</p>
                    </div>
                    <div className="cards__button">
                        <button>Search Doctors</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appointments;
