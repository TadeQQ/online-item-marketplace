import { useForm } from 'react-hook-form';
import { SignInData, SignInSchema } from '../../../schemas';
import { superstructResolver } from '@hookform/resolvers/superstruct';
import { useCallback, useMemo, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';

interface UseSignInFormProps {
  onSuccess?(): void;
  onError?(error: Error): void;
}

export const useSignInForm = ({
  onSuccess,
  onError,
}: UseSignInFormProps = {}) => {
  const [isPending, setPending] = useState(false);
  const { signIn } = useAuth();
  const { handleSubmit, ...form } = useForm<SignInData>({
    resolver: superstructResolver(SignInSchema),
  });

  const handleUserLogin = useCallback(
    async (data: SignInData) => {
      try {
        setPending(true);
        await signIn(data);
        onSuccess?.();
      } catch (error) {
        console.error(error);
        onError?.(error as Error);
      } finally {
        setPending(false);
      }
    },
    [signIn, onError, onSuccess]
  );

  const handler = useMemo(
    () => handleSubmit(handleUserLogin),
    [handleSubmit, handleUserLogin]
  );

  return { isPending, handleSubmit: handler, ...form };
};
