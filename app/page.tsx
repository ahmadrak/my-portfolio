import {user} from '../lid/user'


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Hi, I’m {user.name} 👋</h1>
      <p className="text-lg mt-4 text-center max-w-xl">
        {user.objective}
        
      </p>
    </main>
  );
}
