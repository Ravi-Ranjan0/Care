import React from 'react';
import Link from "next/link"
const TeamMember = ({ name, designation, imageSrc, socialLinks }) => (
  <div className="col-lg-3 col-md-6 col-sm-12 team-block">
    <div className="team-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
      <div className="inner-box">
        <figure className="image-box">
          <img src={imageSrc} alt={name} />
        </figure>
        <div className="lower-content">
          <h3><Link href="team-details">{name}</Link></h3>
          <span className="designation">{designation}</span>
          <ul className="social-links clearfix">
            {socialLinks.map((link, index) => (
              <li key={index}><Link href={link.url}><i className={link.iconClass}></i></Link></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default function Team() {
  <section className="team-section sec-pad centred">
    <div className="shape">
        <div className="shape-1 float-bob-y" style={{ backgroundImage: 'url(assets/images/shape/shape-15.png)' }}></div>
        <div className="shape-2"></div>
        <div className="shape-3 float-bob-x" style={{ backgroundImage: 'url(assets/images/shape/shape-16.png)' }}></div>
      </div>
      <div className="auto-container">
        <div className="sec-title mb_50">
          <span className="sub-title">Our Team</span>
          <h2>Meet our experienced doctors <br />for the best treatment</h2>
        </div>
    <div className="row clearfix">
      <TeamMember
        name="Black Marvin"
        designation="Medical Assistant"
        imageSrc="assets/images/team/team-5.jpg"
        socialLinks={[
          { url: '/', iconClass: 'icon-7' },
          { url: '/', iconClass: 'icon-4' },
          { url: '/', iconClass: 'icon-5' },
          { url: '/', iconClass: 'icon-6' },
        ]}
      />
      <TeamMember
        name="Eleanor Pena"
        designation="Doctor"
        imageSrc="assets/images/team/team-6.jpg"
        socialLinks={[
          { url: '/', iconClass: 'icon-7' },
          { url: '/', iconClass: 'icon-4' },
          { url: '/', iconClass: 'icon-5' },
          { url: '/', iconClass: 'icon-6' },
        ]}
      />
      <TeamMember
        name="Arlene Maccy"
        designation="Nursing Assistant"
        imageSrc="assets/images/team/team-7.jpg"
        socialLinks={[
          { url: '/', iconClass: 'icon-7' },
          { url: '/', iconClass: 'icon-4' },
          { url: '/', iconClass: 'icon-5' },
          { url: '/', iconClass: 'icon-6' },
        ]}
      />
      <TeamMember
        name="Jenny Wilson"
        designation="Senior Doctor"
        imageSrc="assets/images/team/team-8.jpg"
        socialLinks={[
          { url: '/', iconClass: 'icon-7' },
          { url: '/', iconClass: 'icon-4' },
          { url: '/', iconClass: 'icon-5' },
          { url: '/', iconClass: 'icon-6' },
        ]}
      />
    </div>
    </div>
    {/* ... (Other existing code remains unchanged) */}
  </section>
};

