export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Bright Futures Orphan Care. All rights reserved.</p>
          <nav className="flex gap-6 text-sm text-gray-600">
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#donate" className="hover:text-gray-900">Donate</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
