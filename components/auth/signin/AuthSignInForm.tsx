import Link from 'next/link';
import toast from 'react-hot-toast';
import { useSignInForm } from './useSignInForm';
import { useRouter } from 'next/router';
import { FormStyled } from './AuthSignInForm.styled';

export const AuthSignInForm: React.FC = () => {
  const router = useRouter();
  const {
    isPending,
    register,
    handleSubmit,
    formState: { errors },
  } = useSignInForm({
    onSuccess: () => {
      toast.success('Pomyślnie zalogowano');
      router.push('/');
    },
    onError: () => {
      toast.error('Podczas logowania wystąpił błąd. Spróbuj ponownie!');
    },
  });

  return (
    <>
      <FormStyled.Header>
        <h2>Zaloguj się</h2>
        <p>
          Uzupełnij poniższy formularz danymi podanymi przy rejestacji i zacznij
          korzystać z Online Marketplace w pełni już dziś!
        </p>
      </FormStyled.Header>
      <form onSubmit={handleSubmit} noValidate>
        {/* <FormControl isRequired isInvalid={!!errors.email}>
          <FormLabel>Adres email</FormLabel> */}
        <input
          type="email"
          // autoComplete="email"
          placeholder="Podaj swój adres email"
          {...register('email')}
        />
        {/* <FormErrorMessage>Podaj poprawny adres email</FormErrorMessage>
        </FormControl> */}
        {/* <FormControl isRequired isInvalid={!!errors.password}>
          <FormLabel>Hasło</FormLabel> */}
        <input
          type="password"
          // autoComplete="new-password"
          placeholder="Wpisz hasło do konta"
          {...register('password')}
        />
        {/* <FormErrorMessage>Hasło musi mieć minimum 6 znaków</FormErrorMessage>
        </FormControl> */}
        {/* <FormControl isRequired isInvalid={!!errors.phone}>
          <FormLabel>Numer telefonu</FormLabel> */}
        <button type="submit">Zaloguj</button>
      </form>
    </>
  );
};
