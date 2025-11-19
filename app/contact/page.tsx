import { user } from '@/lid/user'
import React from 'react'
import { Mail, Github, Linkedin, Phone, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const ContactPage = () => {
  return (
    <section className="max-w-3xl mx-auto py-20 px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
      <p className="text-gray-600 mb-12">
        I’d love to hear from you! Whether you have a question, want to collaborate, 
        or just want to say hi — feel free to reach out.
      </p>

      <div className="bg-white shadow-md rounded-2xl p-8 max-w-xl mx-auto space-y-6">
        {/* Email */}
        <div>
          <h3 className="text-lg font-semibold mb-2 flex justify-center items-center gap-2">
            <Mail className="w-5 h-5 text-gray-700" /> Email
          </h3>
          <Link
            href={`mailto:${user.email}`}
            className="text-blue-600 hover:underline text-lg"
          >
            {user.email}
          </Link>
        </div>

        {/* Phone */}
        <div>
          <h3 className="text-lg font-semibold mb-2 flex justify-center items-center gap-2">
            <Phone className="w-5 h-5 text-gray-700" /> Phone
          </h3>
          <p className="text-gray-800 text-lg">{user.phone}</p>
        </div>

        {/* WhatsApp */}
        <div>
          <h3 className="text-lg font-semibold mb-2 flex justify-center items-center gap-2">
            <MessageCircle className="w-5 h-5 text-green-600" /> WhatsApp
          </h3>
          <Link
            href={`https://wa.me/${user.whatsappNumber}`}
            target="_blank"
            className="text-green-600 hover:underline text-lg"
          >
            Chat on WhatsApp
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6">
          {user.social?.github && (
            <Link
              href={user.social.github}
              target="_blank"
              className="flex items-center gap-2 text-gray-700 hover:text-black transition"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </Link>
          )}

          {user.social?.linkedin && (
            <Link
              href={user.social.linkedin}
              target="_blank"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-700 transition"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </Link>
          )}
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-10">
        Or message me directly on social media ✨
      </p>
    </section>
  )
}

export default ContactPage
