import React from "react";
import { Card, Typography } from "antd";
const { Title } = Typography;

const KanjiCard = ({ kanji, example }) => {
  return (
    <Card style={{ textAlign: "center", marginBottom: 16 }}>
      <Title level={1}>{kanji}</Title>
      <Typography.Text type="secondary">{example}</Typography.Text>
    </Card>
  );
};

export default KanjiCard;
