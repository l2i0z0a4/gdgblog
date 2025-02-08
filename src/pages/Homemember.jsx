import React, { useState, useEffect } from 'react';
import Navbar1 from '../components/Navbar1';
import femme from '../assets/femme.png';
import homme from '../assets/homme.png';
const Homemember = () => {
    const [memberList, setMemberList] = useState([]);
    const [blogList, setBlogList] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null);

    useEffect(() => {
        // Données factices pour la liste des membres et des blogs
        const memberList = [
            { id: 1, name: "John Doe", email: "john@example.com", role: "alumni", specialty: "software engineer", image: femme, lienlinkedin: "http://example.com" },
            { id: 2, name: "Jane Doe", email: "jane@example.com", role: "alumni", specialty: "software engineer", image: homme, lienlinkedin: "http://example.com" },
            { id: 3, name: "Michael Doe", email: "michael@example.com", role: "alumni", specialty: "software engineer", image: homme, lienlinkedin: "http://example.com" },
        ];
        const blogList = [
            { id: 1, title: "How to become a software engineer", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egettttttttttttttttttttttttttttttttttttttttttttttttttttttttt", creator: "John Doe", creatorImage:homme, date: "2022-10-10" },
            { id: 2, title: "The impact of technology on our lives", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget", creator: "Jane Doe", creatorImage: homme, date: "2022-10-15" },
            { id: 3, title: "The future of software engineering", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget", creator: "Michael Doe", creatorImage: femme, date: "2022-10-20" },
        ];

        setMemberList(memberList); // Mettre à jour la liste des membres
        setBlogList(blogList); // Mettre à jour la liste des blogs
    }, []);

    return (
        <div>
            <Navbar1 />

            {/* Section avec image de fond */}
            <section id="home" className="relative w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/teamgdg.png')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                       Welcome to GDG BLOG
                    </h1>

                </div>
            </section>

            {/* Section Why GDG BLOG */}
            <section id="why-gdg" className="w-full h-screen flex flex-col items-center justify-center bg-blue-100 text-center px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#4285F4] mb-4">Why GDG BLOG?</h2>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
                    Connecting alumni with new users creates a warm, supportive community where wisdom is shared, and everyone grows together, learning and inspiring each other along the way.
                </p>
            </section>

            {/* Section Blogs */}
            <section id="blogs" className="w-full h-screen bg-white flex flex-col justify-center">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-[#4285F4] text-center mb-8">Latest Blogs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {blogList.map((blog) => (
                            <div key={blog.id} className="bg-gray-100 p-6 rounded-lg shadow-lg h-80 flex flex-col justify-between">
                                <div className="flex items-center gap-3">
                                    <img src={blog.creatorImage} alt={blog.creator} className="w-10 h-10 rounded-full" />
                                    <div>
                                        <p className="text-sm font-bold">{blog.creator}</p>
                                        <p className="text-xs text-gray-500">{blog.date}</p>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-blue-600">{blog.title}</h3>
                                <p className="text-gray-700 overflow-hidden">
                                    {blog.content.length > 100 ? (
                                        <>
                                            {blog.content.substring(0, 100)}...
                                            <span 
                                                className="text-blue-500 text-sm ml-2 hover:underline cursor-pointer"
                                                onClick={() => setSelectedBlog(blog)}
                                            >
                                                Read more →
                                            </span>
                                        </>
                                    ) : blog.content}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="text-right mt-6">
                        <a href="/blogs" className="text-blue-500 text-sm hover:underline">See more</a>
                    </div>
                </div>
            </section>

            {selectedBlog && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
                        <button onClick={() => setSelectedBlog(null)} className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl">
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold mb-4">{selectedBlog.title}</h2>
                        <p className="text-gray-700 mb-4">{selectedBlog.content}</p>
                        <p className="text-sm text-gray-500">
                            Written by {selectedBlog.creator} on {selectedBlog.date}
                        </p>
                    </div>
                </div>
            )}
            {/* Section Alumni */}
            <section  id="alumni" className="w-full h-screen bg-gray-100 flex flex-col justify-center">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-[#4285F4] text-center mb-8">Our Alumnies </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {memberList.map((member) => (
                            <div key={member.id} className="bg-white p-6 rounded-lg shadow-lg h-80 flex flex-col items-center justify-center">
                                <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full mb-4" />
                                <h3 className="text-lg font-bold text-gray-700">{member.name}</h3>
                            </div>
                        ))}
                    </div>

                    <div className="text-right mt-6">
                        <a href="/blogs" className="text-blue-500 text-sm hover:underline">See more</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Homemember;