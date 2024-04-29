import { getProviders, signIn } from 'next-auth/react';
import { InferGetServerSidePropsType } from 'next';
import Image from 'next/image';

const login = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='mb-8'>
        <Image
          src='/images/github-icon.png'
          alt='github-icon'
          width={150}
          height={150}
        />
      </div>
      {providers &&
        Object.values(providers).map((provider) => {
          return (
            <div key={provider.name} className='mb-4'>
              <button
                className='px-6 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition-colors'
                onClick={() =>
                  signIn(provider.id, {
                    callbackUrl: '/',
                  })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default login;

export const getServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};
