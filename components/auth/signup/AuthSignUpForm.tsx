// import { Route } from '@listic/feature/route';
// import { Button } from '@listic/ui/button';
// import { FormControl, FormErrorMessage, FormLabel } from '@listic/ui/form';
// import { Input } from '@listic/ui/input';
import Link from 'next/link';
import toast from 'react-hot-toast';
// import { AuthContainer } from '../container/AuthContainer';
import { useSignUpForm } from './useSignUpForm';
import { useRouter } from 'next/router';
import { FormStyled } from './AuthSignUpForm.styled';

export const AuthSignUpForm: React.FC = () => {
  const router = useRouter();
  const {
    isPending,
    register,
    handleSubmit,
    formState: { errors },
  } = useSignUpForm({
    onSuccess: () => {
      toast.success('Pomyślnie utworzono nowe konto');
      router.push('/');
    },
    onError: () => {
      toast.error('Podczas tworzenia konta wystąpił błąd. Spróbuj ponownie!');
    },
  });

  return (
    <>
      <FormStyled.Header>
        <h2 className="font-bold text-3xl">Utwórz konto</h2>
        <p className="leading-relaxed">
          Wypełnij poniższy formularz i zacznij korzystać z Online Marketplace w
          pełni już dziś!
        </p>
      </FormStyled.Header>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-0">
          {/* <FormControl
            isRequired
            isInvalid={!!errors.name}
            className="lg:w-1/2 lg:pr-2"
          >
            <FormLabel>Imię</FormLabel> */}
          <input
            placeholder="Podaj swoje imię"
            autoComplete="given-name"
            {...register('name')}
          />
          {/* <FormErrorMessage>Pole jest wymagane</FormErrorMessage>
          </FormControl> */}
          {/* <FormControl
            isRequired
            isInvalid={!!errors.surname}
            className="lg:w-1/2 lg:pl-2"
          >
            <FormLabel>Nazwisko</FormLabel> */}
          <input
            placeholder="Podaj swoje nazwisko"
            autoComplete="family-name"
            {...register('surname')}
          />
          {/* <FormErrorMessage>Pole jest wymagane</FormErrorMessage>
          </FormControl> */}
        </div>
        {/* <FormControl isRequired isInvalid={!!errors.email}>
          <FormLabel>Adres email</FormLabel> */}
        <input
          type="email"
          autoComplete="email"
          placeholder="Podaj swój adres email"
          {...register('email')}
        />
        {/* <FormErrorMessage>Podaj poprawny adres email</FormErrorMessage>
        </FormControl> */}
        {/* <FormControl isRequired isInvalid={!!errors.password}>
          <FormLabel>Hasło</FormLabel> */}
        <input
          type="password"
          autoComplete="new-password"
          placeholder="Ustaw hasło do konta"
          {...register('password')}
        />
        {/* <FormErrorMessage>Hasło musi mieć minimum 6 znaków</FormErrorMessage>
        </FormControl> */}
        {/* <FormControl isRequired isInvalid={!!errors.phone}>
          <FormLabel>Numer telefonu</FormLabel> */}
        <input
          type="tel"
          autoComplete="tel"
          placeholder="Podaj numer telefonu"
          {...register('phone')}
        />
        {/* </FormControl> */}
        <button type="submit" className="h-12 mt-4">
          Utwórz konto
        </button>
      </form>
      <div className="text-center mt-10 pb-4">
        Masz już konto?{' '}
        <Link legacyBehavior passHref href={'/'}>
          <a className="font-bold hover:underline">Zaloguj się</a>
        </Link>
      </div>
    </>
  );
};
