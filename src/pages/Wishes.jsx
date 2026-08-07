import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FaCrown, FaGift, FaPaperPlane } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import { db } from "../firebase/firebase";

import { blessings } from "../data/data";

import Wishlist from "./Wishlist";

export default function Wishes() {
  // =====================================================
  // MAHABALI BLESSING
  // =====================================================

  const [message, setMessage] = useState("");

  const receiveBlessing = () => {
    const random = blessings[Math.floor(Math.random() * blessings.length)];

    setMessage(random);
  };

  // =====================================================
  // USER WISH FORM
  // =====================================================

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [wish, setWish] = useState("");

  const [submitting, setSubmitting] = useState(false);

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // =====================================================
  // SUBMIT WISH
  // =====================================================

  const handleWishSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    // -------------------------------
    // Validation
    // -------------------------------

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!wish.trim()) {
      setError("Please write your Onam wish.");
      return;
    }

    // -------------------------------
    // Email validation
    // -------------------------------

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    // -------------------------------
    // Submit to Firebase
    // -------------------------------

    try {
      setSubmitting(true);

      await addDoc(collection(db, "wishes"), {
        name: name.trim(),
        email: email.trim(),
        message: wish.trim(),

        // Important:
        // New wishes are NOT immediately
        // displayed on the website.
        status: "pending",

        createdAt: serverTimestamp(),
      });

      // -------------------------------
      // Clear form
      // -------------------------------

      setName("");
      setEmail("");
      setWish("");

      setSuccess("Your Onam wish has been submitted! 🌸");
    } catch (firebaseError) {
      console.error("Error submitting wish:", firebaseError);

      setError("Unable to submit your wish. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // =====================================================
  // UI
  // =====================================================

  return (
    <section
      id="wishes"
      className="py-24 px-6 bg-gradient-to-b from-[#FFFDF7] via-[#F8E8B5] to-[#E8C76A]"
    >
      <div className="max-w-6xl mx-auto">
        {/* ================================================= */}
        {/* MAHABALI BLESSING */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center"
        >
          <span className="uppercase tracking-[5px] text-amber-600 font-semibold">
            Blessings From Mahabali
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mt-4">
            Receive an Onam Blessing
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-8">
            According to tradition, King Mahabali visits Kerala during Onam.
            Receive a special blessing and celebrate the spirit of the festival.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* CROWN */}
        {/* ================================================= */}

        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
          }}
          className="mt-14 flex justify-center"
        >
          <div className="w-36 h-36 rounded-full bg-amber-100 flex items-center justify-center shadow-2xl">
            <FaCrown className="text-6xl text-amber-500" />
          </div>
        </motion.div>

        {/* ================================================= */}
        {/* RECEIVE BLESSING BUTTON */}
        {/* ================================================= */}

        <div className="text-center">
          <button
            onClick={receiveBlessing}
            className="mt-12 inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 transition text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:scale-105"
          >
            <FaGift />
            Receive Blessing
          </button>
        </div>

        {/* ================================================= */}
        {/* MAHABALI BLESSING RESULT */}
        {/* ================================================= */}

        <AnimatePresence>
          {message && (
            <motion.div
              key={message}
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
              }}
              className="mt-14 bg-white rounded-3xl border border-amber-200 shadow-xl p-8"
            >
              <HiSparkles className="text-amber-500 text-3xl mx-auto mb-4" />

              <div className="relative">
                <span className="absolute -top-4 left-0 text-6xl text-amber-300 opacity-60 font-serif">
                  “
                </span>

                <p className="text-xl md:text-2xl leading-10 text-gray-800 font-medium italic px-8 text-center">
                  {message}
                </p>

                <span className="absolute -bottom-8 right-0 text-6xl text-amber-300 opacity-60 font-serif">
                  ”
                </span>
              </div>

              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="h-px w-16 bg-amber-300"></div>

                <span className="text-amber-600 font-semibold tracking-widest uppercase text-sm">
                  Blessings from Mahabali
                </span>

                <div className="h-px w-16 bg-amber-300"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================================================= */}
        {/* USER WISH FORM */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-28"
        >
          {/* Heading */}

          <div className="text-center">
            <span className="uppercase tracking-[5px] text-amber-600 font-semibold">
              Share Your Joy
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
              Share Your Onam Wish
            </h2>

            <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
              Leave a beautiful wish for everyone celebrating the spirit of
              Onam.
            </p>
          </div>

          {/* ================================================= */}
          {/* FORM */}
          {/* ================================================= */}

          <form
            onSubmit={handleWishSubmit}
            className="mt-12 bg-white/90 backdrop-blur-md rounded-[30px] shadow-2xl border border-amber-100 p-6 md:p-10"
          >
            {/* Name + Email */}

            <div className="grid md:grid-cols-2 gap-6">
              {/* NAME */}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  maxLength={50}
                  className="w-full px-5 py-4 rounded-2xl border border-amber-200 bg-white outline-none focus:ring-4 focus:ring-amber-100 focus:border-amber-400 transition"
                />
              </div>

              {/* EMAIL */}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  maxLength={100}
                  className="w-full px-5 py-4 rounded-2xl border border-amber-200 bg-white outline-none focus:ring-4 focus:ring-amber-100 focus:border-amber-400 transition"
                />
              </div>
            </div>

            {/* WISH */}

            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Onam Wish
              </label>

              <textarea
                value={wish}
                onChange={(e) => setWish(e.target.value)}
                placeholder="Write your Onam wish..."
                rows="5"
                maxLength={500}
                className="w-full px-5 py-4 rounded-2xl border border-amber-200 bg-white outline-none resize-none focus:ring-4 focus:ring-amber-100 focus:border-amber-400 transition"
              />

              <p className="text-right text-xs text-gray-400 mt-2">
                {wish.length}/500
              </p>
            </div>

            {/* ERROR */}

            {error && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="mt-5 bg-red-50 border border-red-200 text-red-600 rounded-2xl px-5 py-4"
              >
                {error}
              </motion.div>
            )}

            {/* SUCCESS */}

            {success && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="mt-5 bg-green-50 border border-green-200 text-green-700 rounded-2xl px-5 py-4"
              >
                {success}
              </motion.div>
            )}

            {/* SUBMIT BUTTON */}

            <div className="flex justify-center mt-8">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 disabled:cursor-not-allowed text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:scale-105 transition-all duration-300"
              >
                <FaPaperPlane />

                {submitting ? "Sending..." : "Send My Wish"}
              </button>
            </div>

            {/* INFO */}

            {/* <p className="text-center text-sm text-gray-400 mt-5">
              🌸 Your wish will be reviewed before appearing publicly.
            </p> */}
            <p className="text-center text-sm text-gray-400 mt-5">
              🌸 Share your heartfelt Onam wishes and spread the joy of
              togetherness. Your wish will appear after a quick review. ✨
            </p>
          </form>
        </motion.div>

        {/* ================================================= */}
        {/* APPROVED WISHES */}
        {/* ================================================= */}

        <Wishlist />
      </div>
    </section>
  );
}
