function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-4 sm:py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm sm:text-base">
          © {new Date().getFullYear()} Vishal Kumar Singh. All rights reserved.
        </p>
        <p className="mt-2 text-sm sm:text-base">
          Built with React, Vite, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;
