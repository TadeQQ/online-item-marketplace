import { useForm } from 'react-hook-form';
import { SignUpData, SignUpSchema } from '../../../schemas';
import { superstructResolver } from '@hookform/resolvers/superstruct';
import { useCallback, useMemo, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';

interface UseSignInFormProps {
  onSuccess?(): void;
  onError?(error: Error): void;
}

export const useSignUpForm = ({
  onSuccess,
  onError,
}: UseSignInFormProps = {}) => {
  const [isPending, setPending] = useState(false);
  const { createUser } = useAuth();
  const { handleSubmit, ...form } = useForm<SignUpData>({
    resolver: superstructResolver(SignUpSchema),
  });

  const handleUserCreation = useCallback(
    async (data: SignUpData) => {
      try {
        setPending(true);
        await createUser(data);
        onSuccess?.();
      } catch (error) {
        console.error(error);
        onError?.(error as Error);
      } finally {
        setPending(false);
      }
    },
    [createUser, onError, onSuccess]
  );

  const handler = useMemo(
    () => handleSubmit(handleUserCreation),
    [handleSubmit, handleUserCreation]
  );

  return { isPending, handleSubmit: handler, ...form };
};
