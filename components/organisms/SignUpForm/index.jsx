import Link from "next/link";
import React from "react";

export default function SignUpForm() {
  return (
    <>
      <h2 class="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
      <p class="text-lg color-palette-1 m-0">
        Daftar dan bergabung dengan kami
      </p>
      <div class="pt-50">
        <label
          for="name"
          class="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Full Name
        </label>
        <input
          type="text"
          class="form-control rounded-pill text-lg"
          id="name"
          name="name"
          aria-describedby="name"
          placeholder="Enter your name"
        />
      </div>
      <div class="pt-30">
        <label
          for="email"
          class="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Email Address
        </label>
        <input
          type="email"
          class="form-control rounded-pill text-lg"
          id="email"
          name="email"
          aria-describedby="email"
          placeholder="Enter your email address"
        />
      </div>
      <div class="pt-30">
        <label
          for="password"
          class="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Password
        </label>
        <input
          type="password"
          class="form-control rounded-pill text-lg"
          id="password"
          name="password"
          aria-describedby="password"
          placeholder="Your password"
        />
      </div>
      <div class="button-group d-flex flex-column mx-auto pt-50">
        <Link
          class="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
          href="/sign-up-photo"
          role="button"
        >
          Continue
        </Link>

        <Link
          class="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
          href="/sign-in"
          role="button"
        >
          Sign In
        </Link>
      </div>
    </>
  );
}
