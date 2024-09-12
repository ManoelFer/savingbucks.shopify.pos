'use client';

import { useFormStatus } from 'react-dom';

import { Button } from '../../ui';

import { ISubmitButtonProps } from './types';

export function SubmitButton({ label = 'Submit', variant, ...rest }: ISubmitButtonProps) {
  //TODO: RETURNS THE STATE OF THE <form>... parent element.
  const { pending } = useFormStatus();

  return <Button type="submit" label={label} isLoading={pending} variant={variant} {...rest} />;
}
