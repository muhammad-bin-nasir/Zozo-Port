export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-8 mt-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} Aiza Shafqat. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="mailto:aizashafqat44@gmail.com" className="hover:text-yellow-400 transition">Email</a>
          <a href="https://github.com/Aizashafqat" target="_blank" className="hover:text-yellow-400 transition">GitHub</a>
          <a href="https://linkedin.com/in/aiza-shafqat" target="_blank" className="hover:text-yellow-400 transition">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
