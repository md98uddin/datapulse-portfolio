import React from "react";
import { Navbar } from "./shared/Navbar";

export const ContactUs = () => {
  return (
    <html lang="en">
      <body>
        <header>
          <div class="logo">Your Logo</div>
          <Navbar />
        </header>

        <main>
          <section id="consulting-form" class="form-section">
            <div class="form-container">
              <h2>IT Consulting Inquiry Form</h2>
              <form action="submit_form.php" method="post">
                <label for="name">Your Name:</label>
                <input type="text" id="name" name="name" required />

                <label for="company">Company Name:</label>
                <input type="text" id="company" name="company" required />

                <label for="email">Email Address:</label>
                <input type="email" id="email" name="email" required />

                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required />

                <label for="message">
                  Briefly Describe Your Consulting Needs:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>

                <button type="submit">Submit Inquiry</button>
              </form>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
};
