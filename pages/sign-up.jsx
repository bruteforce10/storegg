import SignUpForm from "@/components/organisms/SignUpForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SignUp() {
  return (
    <section class="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
      <div class="container mx-auto">
        <form action="">
          <div class="pb-50">
            <Link class="navbar-brand" href="/">
              <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
            </Link>
          </div>
          <SignUpForm />
        </form>
      </div>
    </section>
  );
}
