"use client";

import AnimatedHeading from "@/components/AnimateHeading";
import Image from "next/image";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast, Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Button } from "@/styles/components/ui/button";

export default function ContactPage() {
  const [messageCount, setMessageCount] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "message") setMessageCount(value.length);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { firstName, email, message } = formData;
    if (!firstName || !email || !message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
      toast.success("Message sent successfully!");
      confetti({
        particleCount: 150,
        spread: 160,
        angle: 90,
        origin: { y: 0.6 },
        colors: ["#facc15", "#f43f5e", "#6366f1"],
      });
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
      setMessageCount(0);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white dark:bg-dark-mode text-black dark:text-modeText px-4 py-10 sm:px-8 md:px-20 lg:px-32">
      <Toaster />

      {/* Heading */}
      <AnimatedHeading text="CONTACT" />

      {/* Subheader */}
      <div className="flex justify-between text-sm uppercase mt-2 mb-10 tracking-wide text-gray-600 dark:text-gray-300 flex-wrap gap-2">
        <span>Got a project in mind?</span>
        <span>Don&apos;t hesitate to contact me</span>
        <span>Anytime</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="uppercase font-semibold mb-4 tracking-wide">
            Contact Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="firstName"
              placeholder="Your first name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border-0 border-b-2 border-dotted focus:outline-none bg-transparent py-2"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Your last name (optional)"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border-0 border-b-2 border-dotted text-sm focus:outline-none bg-transparent py-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-0 border-b-2 border-dotted focus:outline-none bg-transparent py-2"
              required
            />
            <div>
              <textarea
                name="message"
                rows={4}
                maxLength={300}
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border-0 border-b-2 border-dotted focus:outline-none bg-transparent py-2 resize-none"
                required
              />
              <div className="text-right text-xs text-gray-400 mt-1">
                {messageCount}/300
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="uppercase tracking-widest font-medium mt-4 hover:underline"
            >
              {loading ? "Sending..." : "Submit"}
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center text-center md:items-end md:text-right"
        >
          <Image
            src="/profile.png"
            alt="Aman"
            width={250}
            height={250}
            className="rounded-lg object-cover mb-4"
          />
          <h2 className="text-4xl font-signature text-yellow-main">
            Aman Raiswal
          </h2>

          <div className="mt-6 text-sm space-y-4">
            <div>
              <h4 className="font-semibold uppercase text-xs">
                Contact Details
              </h4>
              <p>business.aman.2003@gmail.com</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold uppercase text-xs">Socials</h4>
              <p>
                <a href="https://www.instagram.com/m.n_says/">
                  <Button
                    className="cursor-pointer text-[#f43f5e]"
                    variant="outline"
                    size="sm"
                  >
                    <FaInstagram />
                    Instagram
                  </Button>
                </a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/aman-raiswal/">
                  <Button
                    className="cursor-pointer text-[#0072B1]"
                    variant="outline"
                    size="sm"
                  >
                    <FaLinkedin />
                    LinkedIn
                  </Button>
                </a>
              </p>
            </div>
            <div>
              <h4 className="font-semibold uppercase text-xs">Location</h4>
              <p>New Delhi, India</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-16 flex justify-between text-xs text-gray-400 uppercase tracking-widest">
        <span>amanportfolio ©{new Date().getFullYear()}</span>
        <span>Privacy Policy</span>
      </div>
    </section>
  );
}
