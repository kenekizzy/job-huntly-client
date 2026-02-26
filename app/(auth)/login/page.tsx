import SignIn from "@/features/Auth/SignIn";
import { connection } from 'next/server'


export default async function LoginPage() {
  await connection()

  return (
    <>
      <SignIn />
    </>
  );
}
