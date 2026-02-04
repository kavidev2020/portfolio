'use client';
import { motion, AnimatePresence } from 'framer-motion'
import { Home, User, Settings, X } from 'lucide-react'
import { Typography } from '../ui/typography';
import { INFO_DATA, NAV_DATA } from '@/lib/data';
import Link from 'next/link';

const SideMenu = ({ open, setOpen }: { open: boolean; setOpen: any }) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* 🔹 BACKDROP (FULL WIDTH BLUR) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-md"
          />

          {/* 🔹 SIDE MENU */}
          <motion.nav
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 25 }}
            className="fixed top-0 left-0 z-50 w-64  h-full bg-white shadow-xl flex flex-col gap-2"
          >
           <div className="bg-primary p-3 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="bg-secondary rounded-4xl p-1 w-8 text-center">
                  <Typography
                    variant={"h5"}
                    className="text-primary font-bold p-0"
                  >
                    K
                  </Typography>
                </div>
                <Typography
                  variant={"h4"}
                  className="text-white tracking-wider"
                >
                  {INFO_DATA?.name}
                </Typography>
              </div>
              <div onClick={() => setOpen(false)}>
               <X size={21} className='text-white'/>
              </div>
            </div>
            <div className="px-6 p-4 flex flex-col gap-4">
              {NAV_DATA?.map((nav, index: number) => (
                <div key={index}>
                  <Link
                    href={nav?.link}
                    className="text-sm font-light hover:underline hover:text-secondary"
                  >
                    {nav?.name}
                  </Link>
                </div>
              ))}
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  )
}

export default SideMenu
