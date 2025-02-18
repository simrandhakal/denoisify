function Footer() {
  return (
    <footer className="bg-[#1d1d29] text-white py-6 text-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Logo Section */}
        <img src="/logo.svg" alt="Logo" className="h-12 mb-1" />

        {/* Copyright Text */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Denoisify. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;


