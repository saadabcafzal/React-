import React, { useState } from 'react';
import ServicesDropDown from './ServicesDropDown';
import CaseStudyDropDown from './CaseStudyDropDown';
import IndustriesDropDown from './IndustriesDropDown';
import BrandingDropDown from './BrandingDropDown';


const Header = ({ children }) => {
  const [servicesHovered, setServicesHovered] = useState(false);
  const [caseStudyHovered, setCaseStudyHovered] = useState(false);
  const [industriesHovered, setIndustriesHovered] = useState(false);
  const [brandingHovered, setBrandingHovered] = useState(false);

  const handleServicesMouseEnter = () => {
    setServicesHovered(true);
  };

  const handleServicesMouseLeave = () => {
    setServicesHovered(false);
  };

  const handleCaseStudyMouseEnter = () => {
    setCaseStudyHovered(true);
  };

  const handleCaseStudyMouseLeave = () => {
    setCaseStudyHovered(false);
  };

  const handleIndustriesMouseEnter = () => {
    setIndustriesHovered(true);
  };

  const handleIndustriesMouseLeave = () => {
    setIndustriesHovered(false);
  };

  const handleBrandingMouseEnter = () => {
    setBrandingHovered(true);
  };

  const handleBrandingMouseLeave = () => {
    setBrandingHovered(false);
  };

  return (
    <>
      <div className="flex">
        <img
          className="px-8"
          src="https://ik.imagekit.io/s73rwtf12h/app/uploads/2021/10/Website-logo-01.png"
          width={280}
          height={100}
        />
        <div>{/* social media icons */}</div>
      </div>
      <hr />
      <div className="text-bold  flex justify-between ">
        <div>
          <ul className="ml-5 mt-3 flex gap-x-5 w-full">
            <li
              className={`hover ${servicesHovered ? 'active' : ''}`}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              Services
              {servicesHovered && <ServicesDropDown />}
            </li>
            <li
              className={`hover ${caseStudyHovered ? 'active' : ''}`}
              onMouseEnter={handleCaseStudyMouseEnter}
              onMouseLeave={handleCaseStudyMouseLeave}
            >
              CaseStudy
              {caseStudyHovered && <CaseStudyDropDown />}
            </li>
            <li
              className={`hover ${industriesHovered ? 'active' : ''}`}
              onMouseEnter={handleIndustriesMouseEnter}
              onMouseLeave={handleIndustriesMouseLeave}
            >
              Industries
              {industriesHovered && <IndustriesDropDown />}
            </li>
            <li
              className={`hover ${brandingHovered ? 'active' : ''}`}
              onMouseEnter={handleBrandingMouseEnter}
              onMouseLeave={handleBrandingMouseLeave}
            >
              Branding
              {brandingHovered && <BrandingDropDown />}
            </li>
          </ul>
        </div>
        <div className="flex">
          <ul className="mr-5 mt-3 flex gap-x-5">
            <li>Home</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <hr className="mt-5 " />
    </>
  );
};

export default Header;