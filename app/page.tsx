import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-5 bg-white shadow">
        <h1 className="text-xl font-bold">MyPortfolio</h1>
        <ul className="flex gap-6">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center p-10">
        <Image
          src="/profile.jpg" // put your image in public folder
          alt="Profile"
          width={150}
          height={150}
          className="rounded-full"
        />
        <h2 className="text-3xl font-bold mt-4">Hi, I'm Your Name 👋</h2>
        <p className="mt-2 text-gray-600">
          A passionate developer interested in AI/ML and Web Development.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="p-10 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="max-w-xl mx-auto text-gray-600">
          I am a computer science student who loves building projects using
          modern technologies like React, Next.js, and Machine Learning.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-10">
        <h2 className="text-2xl font-semibold text-center mb-6">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Project Card */}
          <div className="bg-white p-5 rounded shadow">
            <h3 className="font-bold text-lg">Project 1</h3>
            <p className="text-gray-600 mt-2">
              Short description of your project.
            </p>
          </div>

          <div className="bg-white p-5 rounded shadow">
            <h3 className="font-bold text-lg">Project 2</h3>
            <p className="text-gray-600 mt-2">
              Short description of your project.
            </p>
          </div>

          <div className="bg-white p-5 rounded shadow">
            <h3 className="font-bold text-lg">Project 3</h3>
            <p className="text-gray-600 mt-2">
              Short description of your project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-10 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email: your@email.com</p>
        <p>LinkedIn: linkedin.com/in/yourprofile</p>
      </section>

      {/* Footer */}
      <footer className="text-center p-5 bg-gray-200 mt-10">
        <p>© 2026 Your Name. All rights reserved.</p>
      </footer>

    </main>
  );
}