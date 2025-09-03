import React from "react";
import { Button, Space } from "antd";

const AnswerOptions = ({ options, onSelect }) => {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      {options.map((option, idx) => (
        <Button
          key={idx}
          block
          onClick={() => onSelect(option)}
        >
          {option}
        </Button>
      ))}
    </Space>
  );
};

export default AnswerOptions;
