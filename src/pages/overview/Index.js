import React from "react";

import AuthLayout from "layouts/Auth";
import { Col, Row, Space } from "antd";
import BrannLink from "components/ui/typo/Link";
import BrannTitle from "components/ui/typo/Title";
import { calc } from "antd/es/theme/internal";
import BrannText from "components/ui/typo/Text";

export default function Overview({ title }) {


  return (
    // <AuthLayout>
    <>
      <Row justify={'center'} gutter={0} className="body">
        <Col span={24} style={{ textAlign: 'center' }}>
          <Space wrap={50}>
            <BrannLink href={'t.me/greencandles521'} children={'telegram'} style={{ padding: '30px', fontSize: '2rem' }} target="_blank" />
            <BrannLink href={'https://x.com/greenfrogmeme'} children={'x.com'} style={{ padding: '30px', fontSize: '2rem' }} target="_blank" />
            <BrannLink href={'/'} children={'Join our army'} style={{ padding: '30px', fontSize: '2rem' }} target="_blank" />
            <BrannLink href={'#about_us'} children={'About us'} style={{ padding: '30px', fontSize: '2rem' }} />

          </Space>
        </Col>
      </Row>
      <Row style={{ width: '100vw' }}>
        <Col style={{ width: '600px' }}>
          <div id="about_us" className="screen__background__shape3" style={{ width: '100vw' }}>
            <div className="screen__background__shape2"></div>
          </div>
        </Col>
        <Col style={{ width: 'calc(100vw - 600px)', paddingTop: '6rem' }}>
          <BrannTitle text={'About us'} style={{ color: 'white' }} />
          <BrannText
            text={"In the wild world of crypto, there's a legend about Green Pepe, the meme-making frog who sparked the bull market frenzy."}
            color={'white'}
          />
          <BrannText
            text={" With his hypnotic memes and infectious charm, this rare amphibian sent investors into a frenzy, riding the digital waves to prosperity. "}
            color={'white'}
          />
          <BrannText
            text={"Green Pepe's legacy? A trail of rare pepes and green candles, forever etched in internet lore."}
            color={'white'}
          />
        </Col>
      </Row>
      <div className="screen__background__shape screen__background__shape1">
        <BrannTitle text={"Join the Pepe Army who started the bull run."} style={{ color: 'white', fontSize: '4rem' }} />
      </div>


    </>
    // </AuthLayout>

  );
}
