import React from "react";
import { Modal } from "antd";

const ResultModal = ({ visible, correct, onNext }) => {
  return (
    <Modal
      title={correct ? "¡Correcto! 🎉" : "Incorrecto 😢"}
      open={visible}
      onOk={onNext}
      onCancel={onNext}
      okText="Siguiente"
    >
      <p>{correct ? "¡Bien hecho!" : "Inténtalo de nuevo."}</p>
    </Modal>
  );
};

export default ResultModal;
