/** @type {import('next').NextConfig} */

module.exports = {
    basePath: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH : "",
    reactStrictMode: false,
    swcMinify: true,
	env: {
	  TITLE: process.env.TITLE,
	  PHONE: process.env.PHONE,
	  PHONE_VISUAL: process.env.PHONE_VISUAL,
	  EMAIL: process.env.EMAIL,
	},
  };