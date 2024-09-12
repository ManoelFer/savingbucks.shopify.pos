import { Icons } from '@/assets/icons';

import { IButtonProps } from './types';

export function SocialButton({
  label = 'Submit',
  isLoading = false,
  color = '#3b5998',
  iconName,
  ...rest
}: IButtonProps) {
  return (
    <>
      <button
        type="button"
        className={`mb-2 me-2 flex flex-row items-center gap-2 rounded-lg bg-[${color}] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[${color}]/90 focus:outline-none focus:ring-4 focus:ring-[${color}]/50 dark:focus:ring-[${color}]/55`}
        style={{
          backgroundColor: color,
        }}
        disabled={isLoading}
        {...rest}
      >
        {!!iconName && <Icons name={iconName} style={{ color: 'white' }} size={20} />}
        {label}
      </button>
    </>
  );
}
