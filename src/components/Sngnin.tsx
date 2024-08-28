import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main>
      <h1>Sign In</h1>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit minus quam
      possimus vitae, id ad veniam hic placeat, odio aliquam illum consequatur
      facere voluptas eligendi repudiandae inventore, animi quibusdam
      voluptates.
      <SignIn path="/admin" routing="path" signUpUrl="/sign-up" />
    </main>
  );
}
