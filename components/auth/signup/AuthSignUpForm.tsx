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
    <FormStyled.Container>
      <FormStyled.Content>
        <FormStyled.Header>
          <h2>Utwórz konto</h2>
          <p>
            Wypełnij poniższy formularz i zacznij korzystać z Online Marketplace
            w pełni już dziś!
          </p>
        </FormStyled.Header>
        <FormStyled.Form onSubmit={handleSubmit} noValidate>
          <FormStyled.Column>
            {/* <FormControl
            isRequired
            isInvalid={!!errors.name}
            className="lg:w-1/2 lg:pr-2"
  > */}
            <FormStyled.Label>Imię</FormStyled.Label>
            <FormStyled.FormContent
              placeholder="Podaj swoje imię"
              {...register('name')}
              required={true}
            />
            <FormStyled.FormBorder />
            {/* <FormErrorMessage>Pole jest wymagane</FormErrorMessage>
          </FormControl> */}
            {/* <FormControl
            isRequired
            isInvalid={!!errors.surname}
            className="lg:w-1/2 lg:pl-2"
          >
            <FormLabel>Nazwisko</FormLabel> */}
            <FormStyled.Label>Nazwisko</FormStyled.Label>
            <FormStyled.FormContent
              placeholder="Podaj swoje nazwisko"
              {...register('surname')}
              required={true}
            />
            <FormStyled.FormBorder />
            {/* <FormErrorMessage>Pole jest wymagane</FormErrorMessage>
          </FormControl> */}

            {/* <FormControl isRequired isInvalid={!!errors.email}>
          <FormLabel>Adres email</FormLabel> */}
            <FormStyled.Label>Adres email</FormStyled.Label>
            <FormStyled.FormContent
              type="email"
              placeholder="Podaj swój adres email"
              {...register('email')}
            />
            {errors.email?.message}
            <FormStyled.FormBorder />
            {/* <FormErrorMessage>Podaj poprawny adres email</FormErrorMessage>
        </FormControl> */}
            {/* <FormControl isRequired isInvalid={!!errors.password}>
          <FormLabel>Hasło</FormLabel> */}
            <FormStyled.Label>Hasło</FormStyled.Label>
            <FormStyled.FormContent
              type="password"
              placeholder="Ustaw hasło do konta"
              {...register('password')}
              required={true}
            />
            <FormStyled.FormBorder />
          </FormStyled.Column>

          {/* <FormErrorMessage>Hasło musi mieć minimum 6 znaków</FormErrorMessage>
        </FormControl> */}
          {/* <FormControl isRequired isInvalid={!!errors.phone}>
          <FormLabel>Numer telefonu</FormLabel> */}
          <FormStyled.Column>
            <FormStyled.Label>Numer telefonu</FormStyled.Label>
            <FormStyled.FormContent
              type="tel"
              placeholder="Podaj numer telefonu"
              {...register('phone')}
              required={true}
            />
            <FormStyled.FormBorder />

            <div style={{ paddingTop: '10px' }}>
              <FormStyled.FormContent type="checkbox" value="" required />
              <FormStyled.CheckboxLabel htmlFor="invalidCheck2">
                Agree to terms and conditions
              </FormStyled.CheckboxLabel>
            </div>
            {/* </FormControl> */}
            <FormStyled.SubmitButton type="submit">
              {isPending ? 'ładowanie...' : 'Stwórz konto'}
            </FormStyled.SubmitButton>
            <FormStyled.IsAccount>
              Masz już konto?{' '}
              <Link legacyBehavior passHref href={'/SignIn'}>
                <a>Zaloguj się</a>
              </Link>
            </FormStyled.IsAccount>
          </FormStyled.Column>
        </FormStyled.Form>
      </FormStyled.Content>
    </FormStyled.Container>
  );
};
