import React, { useEffect, useState } from 'react';
import { Image } from 'antd';
import Banner from './banner';
import WhyBinawan from './whyBinawan';
import OurSector from './ourSector';
import OurProgram from './ourProgram';
import WorkersPlacement from './workersPlacement';
import CTA from './cta';
import News from './news';
import WhatsappIcon from '../../assets/img/wa-icon.png';

function Home() {
  const [active, setActive] = useState('1');
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const handleMenuSector = (e) => {
    setActive(e)
  }

  const initialProps = {
    active: active,
    handleMenuSector: handleMenuSector
  }

  return (
    <React.Fragment>
      <Image
        className='floating-whatsapp'
        width={'100%'}
        src={WhatsappIcon}
        preview={false}
        style={{ objectFit: 'contain', cursor: 'pointer' }}
      />
      <Banner />
      <WhyBinawan/>
      <OurSector {...initialProps} />
      <OurProgram/>
      <WorkersPlacement/>
      <CTA/>
      <News/>
    </React.Fragment>
  )
}

export default Home