import LoginPageGuard from '@/components/LoginPageGuard';

export default function Dashboard() {
  return (
    <LoginPageGuard>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
         Welcome to the Dashboard Page
      </div>
    </LoginPageGuard>
  );
}
