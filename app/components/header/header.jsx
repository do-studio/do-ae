"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import dynamic from 'next/dynamic';
const AnimatedButton = dynamic(() => import('../ui/animatedButton'), { ssr: false });
import { FaArrowRightLong } from "react-icons/fa6";
import { CgMenuLeft } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowLeft } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import {DoLogo} from '../../../public'
import Image from "next/image";


const menus = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  {
    label: "Our Works",
    href: "#",
    submenu: [
      { label: "branding", href: "#" },
      { label: "creative", href: "#" },
      { label: "web design", href: "#" },
      { label: "package design", href: "#" },
      { label: "print design", href: "#" },
      { label: "production", href: "#" },
    ],
  },
  { label: "Blog", href: "/blog" },
];

const overlayVariants = {
  hidden: {
    opacity: 0,
    pointerEvents: "none",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    pointerEvents: "auto",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const modalVariants = {
  hidden: { scale: 1, opacity: 0, transition: { duration: 0.2 } },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.2 } },
  exit: { scale: 1, opacity: 0, transition: { duration: 0 } },
};

const submenuVariants = {
  hidden: { scale: 1, opacity: 0, transition: { duration: 0 } },
  visible: { scale: 1, opacity: 1, transition: { duration: 0 } },
  exit: { scale: 1, opacity: 0, transition: { duration: 0 } },
};

// Variants for spring animation on each menu item with delay
const menuItemVariants = {
  hidden: { opacity: 0, y: 10 }, // reduced initial x offset for quicker travel
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0, // no bounce for snappier stop
      delay: i * 0.02, // faster stagger
      stiffness: 600, // higher stiffness for quicker snap
      damping: 30, // higher damping to stop oscillation quickly
    },
  }),
};

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [submenuOpenIdx, setSubmenuOpenIdx] = useState(null);

  const openSubmenu = (idx) => {
    setSubmenuOpenIdx(idx);
  };

  const closeSubmenu = () => {
    setSubmenuOpenIdx(null);
  };

  return (
    <div className="w-full flex justify-center px-2 py-4 fixed top-0 z-50 gap-3 bg-transparent">
      <div className="w-full max-w-11/12 rounded-full bg-white shadow flex items-center px-3 md:px-6 py-2 md:py-2">
        {/* Left */}
        <div className="flex-1 md:text-lg font-medium text-black uppercase">
          <Link href="/">
           <Image className="w-28 xl:w-40 object-contain" src={DoLogo} alt=""/>
          </Link>
        </div>

        {/* Center menus for md+ */}
        <nav className="hidden md:flex space-x-8 relative">
          {menus.map((menu, idx) => {
            const hasSubmenu = !!menu.submenu;
            return (
              <div
                key={idx}
                className="relative group"
                onMouseEnter={() => setOpenMenu(idx)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={menu.href}
                  className="text-gray-600 uppercase hover:text-black transition cursor-pointer flex items-center"
                >
                  {menu.label}
                  {hasSubmenu && <FiChevronDown className="ml-1 w-4 h-4" />}
                </Link>

                {/* Submenu */}
                {hasSubmenu && (
                  <div
                    className={`
                      absolute left-1/2 top-full
                      -translate-x-1/2
                      min-w-[250px] w-fit
                      rounded-2xl
                      bg-black/10
                      backdrop-blur-[6px]
                      border border-white/50
                      shadow-xl
                      opacity-0 group-hover:opacity-100
                      invisible group-hover:visible
                      transition-all duration-300 z-20
                      translate-y-4 group-hover:translate-y-0
                      overflow-hidden
                    `}
                    style={{
                      pointerEvents: openMenu === idx ? "auto" : "none",
                    }}
                  >
                    <ul className="py-2">
                      {menu.submenu.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <Link
                            href={sub.href}
                            className="text-white uppercase
                              block py-2 px-7 mx-1
                              text-nowrap
                              font-medium
                              rounded-lg
                              hover:bg-[#AEFE00] hover:text-black
                              transition
                              text-left
                              cursor-pointer"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right */}
        <div className="flex-1 flex justify-end">
          <AnimatedButton
            href="/contact"
            label="CONTACT"
            textColor="#000"
            hoverTextColor="#000"
            iconColor="#000"
            hoverIconColor="#000"
            circleColor="#AEFE00"
            IconComponent={FaArrowRightLong}
          />
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden grid text-white text-4xl place-items-center rounded-full">
        <CgMenuLeft
          onClick={() => setModalOpen(true)}
          aria-label="Open menu"
          className="cursor-pointer"
        />
      </div>

      {/* Modal overlay menu */}
      <AnimatePresence>
        {modalOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => {
                setModalOpen(false);
                setSubmenuOpenIdx(null);
              }}
            />

            {/* Main Menu Modal */}
            <AnimatePresence initial={false} mode="wait">
              {submenuOpenIdx === null ? (
                <motion.div
                  key="main-menu"
                  className="fixed top-1/2 left-1/2 max-w-md w-[90vw] overflow-hidden border border-gray-500 bg-white/20 backdrop-blur-xl rounded-3xl shadow-xl p-6 z-50 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6"
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {/* Close button */}
                  <button
                    onClick={() => setModalOpen(false)}
                    className="self-end text-white font-bold leading-none focus:outline-none"
                    aria-label="Close menu"
                  >
                    <IoIosClose className="text-2xl" />
                  </button>

                  {/* Modal Nav Items */}
                  <nav className="flex flex-col gap-5">
                    {menus.map((menu, idx) => {
                      const hasSubmenu = !!menu.submenu;
                      return (
                        <motion.div
                          key={idx}
                          className="capitalize font-semibold text-3xl flex flex-col gap-1"
                          variants={menuItemVariants}
                          initial="hidden"
                          animate="visible"
                          custom={idx}
                        >
                          {hasSubmenu ? (
                            <button
                              onClick={() => openSubmenu(idx)}
                              className="text-white flex items-center justify-between w-full cursor-pointer focus:outline-none"
                              aria-haspopup="true"
                              aria-expanded={submenuOpenIdx === idx}
                            >
                              <span className="capitalize">{menu.label}</span>
                              <AiOutlinePlus className="w-5 h-5 ml-2" />
                            </button>
                          ) : (
                            <Link
                              href={menu.href}
                              onClick={() => setModalOpen(false)}
                              className="text-white"
                            >
                              {menu.label}
                            </Link>
                          )}
                        </motion.div>
                      );
                    })}
                  </nav>
                </motion.div>
              ) : (
                // Submenu overlay panel
                <motion.div
                  key="submenu"
                  className="fixed top-1/2 left-1/2 max-w-md w-[90vw] border border-gray-500 bg-white/20 backdrop-blur-xl rounded-3xl shadow-xl p-6 z-50 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6"
                  variants={submenuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {/* Back button */}
                  <button
                    onClick={closeSubmenu}
                    className="flex items-center capitalize space-x-2 text-white font-semibold focus:outline-none"
                    aria-label="Back to main menu"
                  >
                    <BsArrowLeft />{" "}
                    <span className="text-xs uppercase">main menu</span>
                  </button>

                  {/* Submenu items */}
                  <nav className="flex flex-col gap-5">
                    {menus[submenuOpenIdx].submenu.map((sub, subIdx) => (
                      <motion.div
                        key={subIdx}
                        variants={menuItemVariants}
                        initial="hidden"
                        animate="visible"
                        custom={subIdx}
                      >
                        <Link
                          href={sub.href}
                          onClick={() => setModalOpen(false)}
                          className="text-white capitalize font-semibold text-3xl transition"
                        >
                          {sub.label}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
