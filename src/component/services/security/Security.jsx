import React from 'react';
import './Security.css'
import guard from '../../../assets/guard.jpg'
import alarm from '../../../assets/alarm.jpg'
import cctv from '../../../assets/cctv.jpg'
import fire from '../../../assets/fire.jpg'
import bouncer from '../../../assets/bouncer.jpg'
import mobile from '../../../assets/mobile.png'


const Security = () => {
    return (
        <div className='security'>
            <h1>Security Services</h1>
            <div className="services">
                <h2>Our Services</h2>
                <div className="service">
                    <h3>Security Guard Services</h3>
                    <img src={guard} />
                    <p>Our licensed and trained security guards provide round-the-clock protection for your premises. From access control to patrols, we ensure a safe and secure environment.</p>
                </div>
                <div className="service">
                    <h3>Alarm Monitoring</h3>
                    <img src={alarm} />
                    <p>Our state-of-the-art alarm monitoring systems detect any unauthorized access or security breaches, enabling a rapid response to mitigate risks and prevent incidents.</p>
                </div>
                <div className="service">
                    <h3>CCTV Surveillance</h3>
                    <img src={cctv} />
                    <p>We install and maintain CCTV surveillance systems to monitor your property 24/7. Our advanced cameras and monitoring technology help deter crime and provide valuable evidence in case of incidents.</p>
                </div>

                <div className="service">
                    <h3>Event Security</h3>
                    <img src={bouncer} />
                    <p>We provide comprehensive security services for events of all sizes, from corporate functions to concerts and festivals. Our trained security personnel ensure the safety of attendees and the smooth execution of your event.</p>
                </div>
                <div className="service">
                    <h3>Fire Watch Services</h3>
                    <img src={fire} />
                    <p>Our fire watch services ensure compliance with fire safety regulations by maintaining a vigilant presence during construction, renovation, or fire system maintenance. We monitor for potential fire hazards and provide immediate response in case of emergencies.</p>
                </div> 
                <div className="service">
                    <h3>Mobile Patrol Services</h3>
                    <img src={mobile} alt="mobile" />
                    <p>Our mobile patrol units conduct regular inspections of your property to deter criminal activity and ensure compliance with security protocols. With highly visible patrols, we provide a visible deterrent to potential threats.</p>
                </div>
            </div>
            <div className="features">
                <h2>Key Features</h2>
                <ul>
                    <li><b>✓</b>24/7 monitoring and support</li>
                    <li><b>✓</b>Customized security plans</li>
                    <li><b>✓</b>Rapid response to emergencies</li>
                    <li><b>✓</b>Advanced surveillance technology</li>
                    <li><b>✓</b>Trained and certified security personnel</li>
                </ul>
            </div>
            <div className="benefits">
                <h2>Benefits of Choosing Bhupika</h2>
                <ul>
                    <li><b>✓</b>Peace of mind knowing your property is protected</li>
                    <li><b>✓</b>Reduced risk of theft, vandalism, and unauthorized access</li>
                    <li><b>✓</b>Improved safety for employees, customers, and visitors</li>
                    <li><b>✓</b>Professional security solutions tailored to your needs</li>
                    <li><b>✓</b>Cost-effective security services</li>
                </ul>
            </div>
        </div>
    );
};

export default Security;
