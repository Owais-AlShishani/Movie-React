import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  onClose: () => void// add this to let the parent component to manage the button functionality when clicking on it
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible fade show" role="alert">
      {children}
      <button type="button" onClick={onClose} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
};

export default Alert;
