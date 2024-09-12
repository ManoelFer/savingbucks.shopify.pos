import { IButtonProps } from './types';

export function Button({ label = 'Submit', isLoading = false, variant = 'primary', ...rest }: IButtonProps) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className={(variant === 'primary' && 'text-bold bg-primary rounded-2xl px-3 py-1 text-white') || ''}
      {...rest}
    >
      {label}
    </button>
  );
}
