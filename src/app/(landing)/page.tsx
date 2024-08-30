import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-between h-16 bg-white/90 backdrop-blur-lg border-b border-gray-200 px-4 py-8 shadow-md md:px-16">
        <h1 className="text-center text-4xl font-bold text-gray-900">
          Accur<span className="text-teal-600">8</span>
        </h1>
        <div>
          <nav>
            <ul className="flex items-center justify-center gap-4 text-sm font-medium text-gray-500">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Home</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
