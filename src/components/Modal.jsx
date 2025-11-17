import React from "react";

const Modal = ({ open, onClose, title, children, category = "modal" }) => {
  if (!open) return null;
  const styles = {
    filter: {
      wrapper: "fixed bottom-0 right-0 z-99 p-10 w-30",
      box: "b-shadow bg-white h-500 rounded-5 overflow-hidden",
      body: "h-450 overflow-auto p-10",
    },
    modal: {
      wrapper: "fixed bottom-0 right-0 z-99 p-10 w-25",
      box: "b-shadow bg-white h-500 rounded-5 overflow-hidden",
      body: "h-450 overflow-auto p-10",
    },
  };

  const { wrapper, box, body } = styles[category] || styles.modal;

  return (
    <div className={wrapper}>
      <div className={box}>
        <div className="bg-primary py-8 px-10 flex items-center justify-between">
          {title && <h4 className="title-text font-500 text-white">{title}</h4>}
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="flex text-white cursor-pointer"
            onClick={onClose}
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <div className={body}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
