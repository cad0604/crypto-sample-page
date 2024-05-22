import React from "react";

import AuthLayout from "layouts/Auth";
import { Col, Row, Space } from "antd";
import BrannLink from "components/ui/typo/Link";
import BrannTitle from "components/ui/typo/Title";

export default function Overview({ title }) {


  return (
    <AuthLayout>
      <Row justify={'center'} gutter={136} style={{ width: '100vw' }}>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Space wrap={50}>
            <BrannLink href={'t.me/greencandles521'} children={'telegram'} />
            <BrannLink href={'https://x.com/greenfrogmeme'} children={'x.com'} />
            <BrannLink href={'/'} children={'Join our army'} />
          </Space>
        </Col>
      </Row>
      <div className="screen__background__shape screen__background__shape1">
        <BrannTitle text={"Join the Pepe Army who started the bull run."} style={{ color: 'white' }} />
      </div>
      <div className="screen__background__shape screen__background__shape2">
        asdf
      </div>
    </AuthLayout>

  );
}
