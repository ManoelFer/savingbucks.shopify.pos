import { TButtonVariants } from '../../ui/Button/types';

export interface ISubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: TButtonVariants;
}
