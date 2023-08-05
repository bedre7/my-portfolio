import React, { FC } from "react";

const Modal: FC<{ src: string; title: string }> = ({ src, title }) => {
  return (
    <div>
      <img src={src} alt={title} />
    </div>
  );
};

export default Modal;
