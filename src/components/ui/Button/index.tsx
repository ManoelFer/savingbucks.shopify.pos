import { IButtonProps } from './types';

export function Button({ label = 'Submit', isLoading = false, variant = 'primary', ...rest }: IButtonProps) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className={
        (variant === 'primary' &&
          'inline-block rounded-md border border-blue-600 p-2 text-blue-600 duration-150 ease-in-out hover:bg-blue-600 hover:text-white') ||
        ''
      }
      {...rest}
    >
      {label}
    </button>
  );
}
