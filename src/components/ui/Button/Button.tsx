import { FunctionComponent } from 'react';

type ButtonProps = {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
};

const Button: FunctionComponent<ButtonProps> = ({
  children,
  type = 'button',
}) => {
  return <button type={type}>{children}</button>;
};

export default Button;
