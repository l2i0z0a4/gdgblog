import React from "react";
import Navbar1 from "../components/Navbar1";

import femme from "../assets/femme.png";
import homme from "../assets/homme.png";

const AlumniPage = () => {
  // Données factices pour les alumni
  const alumniList = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "alumni", specialty: "software engineer", image: femme, lienlinkedin: "http://example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com", role: "alumni", specialty: "software engineer", image: homme, lienlinkedin: "http://example.com" },
    { id: 3, name: "Michael Doe", email: "michael@example.com", role: "alumni", specialty: "software engineer", image: homme, lienlinkedin: "http://example.com" },
    { id: 4, name: "Alice Smith", email: "alice@example.com", role: "alumni", specialty: "data scientist", image: femme, lienlinkedin: "http://example.com" },
    { id: 5, name: "Bob Johnson", email: "bob@example.com", role: "alumni", specialty: "web developer", image: femme, lienlinkedin: "http://example.com" },
    { id: 6, name: "Charlie Brown", email: "charlie@example.com", role: "alumni", specialty: "mobile developer", image: homme, lienlinkedin: "http://example.com" },
  ];

  return (
    <div>
      {/* Navbar */}
      <Navbar1 isLoggedIn={true} />

      {/* Section Alumni */}
      <section className="pt-20 pb-10 bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-600 text-center mb-8">Our Alumni</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {alumniList.map((alumnus) => (
              <div key={alumnus.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center">
                  <img 
                    src={alumnus.image} 
                    alt={alumnus.name} 
                    className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 transform hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-700 text-center mt-4">{alumnus.name}</h3>
                <p className="text-sm text-gray-500 text-center">{alumnus.specialty}</p>
                <div className="mt-4 text-center">
                  <a 
                    href={alumnus.lienlinkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-500 hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default AlumniPage;