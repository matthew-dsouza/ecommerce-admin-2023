import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <SignIn />
    <div>
      <p>Test Username: jane+clerk_test@example.com</p>
      <p>Test Password: jane+clerk_test@example.com</p>
      <p>Confirmation Code: 424242</p>

    </div>
    </>
  );
}
