import { icons } from '@/assets/icons';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isLoading?: boolean;
  color?: string;
  iconName?: keyof typeof icons;
}
