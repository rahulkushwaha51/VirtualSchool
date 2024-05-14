import React from 'react';
import './Construction.css'
import residential from '../../../assets/residential.jpeg'
import commercial from '../../../assets/commercial.jpg'
import industrial from '../../../assets/industrial.jpeg'
const Construction = () => {
    return (
        <div className='construction'>
            <h1>Construction Services</h1>
            <div className="services">
                <h2>Our Services</h2>
                <div className="service">
                    <h3>Residential Construction</h3>
                    <div><img src={residential} alt="residential" /></div>
                    <p>Our residential construction services are tailored to meet the unique needs of homeowners. From custom home builds to renovations and additions, we work closely with clients to bring their vision to life. Our experienced team ensures attention to detail, quality craftsmanship, and timely completion, making your dream home a reality.</p>
                </div>
                <div className="service">
                    <h3>Commercial Construction</h3>
                    <div><img src={commercial} alt="commercial" /></div>
                    <p>For commercial construction projects, including office buildings, retail spaces, and hospitality venues, we provide comprehensive solutions to meet your business needs. Our expertise spans from ground-up construction to tenant improvements and interior fit-outs. With a focus on efficiency and functionality, we deliver commercial spaces that enhance your brand and support your business objectives.</p>
                </div>
                <div className="service">
                    <h3>Industrial Construction</h3>
                    <div><img src={industrial} alt="industrial" /></div>
                    <p>Our industrial construction services cater to the unique requirements of manufacturing facilities, warehouses, and distribution centers. We specialize in designing and building efficient, cost-effective spaces that optimize workflow and productivity. With expertise in complex systems and regulatory compliance, we ensure that your industrial facility meets industry standards and enhances operational efficiency.</p>
                </div>
            </div>

            <div className="features">
                <h2>Key Features</h2>
                <ul>
                    <li><b>✓</b>Experienced and skilled workforce</li>
                    <li><b>✓</b>Attention to detail and quality craftsmanship</li>
                    <li><b>✓</b>Adherence to safety standards and regulations</li>
                    <li><b>✓</b>Transparent communication and project updates</li>
                    <li><b>✓</b>On-time completion and within budget</li>
                </ul>
            </div>
        </div>
    );
};

export default Construction;
