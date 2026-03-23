import AppLogo from "@/components/atoms/logo";
import LoginForm from "@/components/molecules/form/loginForm";
import { cn } from "@/lib/utils";

type LoginProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error?: string | null;
  isLoading?: boolean;
  className?: string;
};

function Login({
  onSubmit,
  error,
  isLoading,
  className,
}: LoginProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <AppLogo letter="A" size="md" />
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-[var(--text)]">
          Inicia sesión en tu cuenta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="rounded-lg bg-[var(--card-bg)] px-6 py-12 shadow-[var(--shadow)] sm:px-12">
          <LoginForm
            onSubmit={onSubmit}
            error={error}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
