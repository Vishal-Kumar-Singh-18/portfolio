import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_c2u1fvd",
        "template_q7798w4",
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setStatus("Message sent successfully! 🎉");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          setStatus("Failed to send message. Please try again. 😔");
        }
      );
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          Get in Touch 📬
        </h2>
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm sm:text-base"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 sm:p-2 border rounded text-sm sm:text-base"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm sm:text-base"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 sm:p-2 border rounded text-sm sm:text-base"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm sm:text-base"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 sm:p-2 border rounded text-sm sm:text-base"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 sm:py-2 rounded hover:bg-blue-700 w-full sm:w-auto"
            >
              Send Message 📤
            </button>
          </form>
          {status && (
            <p
              className={`mt-4 text-center text-sm sm:text-base ${
                status.includes("success") ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;