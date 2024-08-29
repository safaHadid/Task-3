import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import FeatureItem from '../../components/FeaturedItem/FeaturedItem';
import "./PropertyDetails.css"
import FeaturedAccordion from '../../components/FeaturedAccordion/FeaturedAccordion';
import BestDeal from '../../components/BestDeal/BestDeal';
import Footer from '../../components/Footer/Footer';

const PropertyDetails = () => {
  return (
    <div className='single-property'>
      <PageHeader title="HOME / SINGLE PROPERTY" text="SINGLE PROPERTY" />
      <div className='single-property-container'>
        <div className="left-single-property">
          <img src="/assets/single-property.jpg" alt="Property" />
          <p className='type'>Luxury Villa</p>
          <h2>24 New Street Miami, OR 24560</h2>
          <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam obcaecati illo nisi laborum vel reprehenderit eveniet expedita, magni, fuga quaerat voluptate id incidunt ipsum numquam quo porro similique a debitis neque quis asperiores magnam molestiae explicabo autem. Expedita ipsum explicabo nam. Sapiente, consequatur mollitia. Asperiores impedit blanditiis, earum eaque nobis autem ut rerum, sunt unde tenetur reprehenderit cupiditate. Tempore, id?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam obcaecati illo nisi laborum vel reprehenderit eveniet expedita, magni, fuga quaerat voluptate id incidunt ipsum numquam quo porro similique a debitis neque quis asperiores magnam molestiae explicabo autem. Expedita ipsum explicabo nam. Sapiente, consequatur mollitia. Asperiores impedit blanditiis, earum eaque nobis autem ut rerum, sunt unde tenetur reprehenderit cupiditate. Tempore, id?
          </p>
          <FeaturedAccordion className="featuredAccordion" />
        </div>
        <div className="right-single-property">
          <FeatureItem
            icon='/assets/info-icon-01.png'
            title="250 m2"
            description="Total Flat Space"
          />
          <hr />
          <FeatureItem
            icon='/assets/info-icon-02.png'
            title="Contract"
            description="Contract Ready"
          />
          <hr />
          <FeatureItem
            icon='/assets/info-icon-03.png'
            title="Payment"
            description="Payment Process"
          />
          <hr />
          <FeatureItem
            icon='/assets/info-icon-04.png'
            title="Safety"
            description="24/7 Under Control"
          />
        </div>
      </div>
      <BestDeal />
      <Footer />
    </div>
  );
}

export default PropertyDetails;
