import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <Link
        href='/auth/login'
        role='button'
        className='flex bg-slate-200 border-2 rounded-md border-black w-24 h-12 items-center justify-center'
      >
        <span>認証</span>
      </Link>
    </main>
  );
}
