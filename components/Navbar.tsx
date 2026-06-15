const telegramLink = "https://t.me/somaeducationgroup";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <a href="/" className="flex items-center">
          <img
            src="/images/soma-logo.png"
            alt="SOMA Education Group Logo"
            style={{
            width: "250px",
            height: "auto",
            display: "block",
            }}
          />
        </a>

        <a
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-blue-900 px-5 py-2 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-950"
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
}