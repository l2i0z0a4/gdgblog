import React, { useState } from "react";
import Navbar1 from "../components/Navbar1";
import femme from "../assets/femme.png";
import homme from "../assets/homme.png";

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Liste étendue des blogs
  const blogList = [
    { id: 1, title: "How to become a software engineer", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget lorem nec nisi tincidunt tincidunt.", creator: "John Doe", creatorImage: homme, date: "2022-10-10" },
    { id: 2, title: "The impact of technology on our lives", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget lorem nec nisi tincidunt tincidunt.", creator: "Jane Doe", creatorImage: femme, date: "2022-10-15" },
    { id: 3, title: "The future of software engineering", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget lorem nec nisi tincidunt tincidunt.", creator: "Michael Doe", creatorImage: homme, date: "2022-10-20" },
    { id: 4, title: "The importance of data science", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget lorem nec nisi tincidunt tincidunt.", creator: "Alice Smith", creatorImage: femme, date: "2022-10-25" },
    { id: 5, title: "How to become a software engineer", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget lorem nec nisi tincidunt tincidunt.", creator: "John Doe", creatorImage: homme, date: "2022-10-10" },
    { id: 6, title: "The impact of technology on our lives", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget lorem nec nisi tincidunt tincidunt.", creator: "Jane Doe", creatorImage: femme, date: "2022-10-15" },
    { id: 7, title: "The future of software engineering", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget lorem nec nisi tincidunt tincidunt.", creator: "Michael Doe", creatorImage: homme, date: "2022-10-20" },
    { id: 8, title: "The importance of data science", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget lorem nec nisi tincidunt tincidunttttttttttttttttttttttttttttttttttttttttttttttt.", creator: "Alice Smith", creatorImage: femme, date: "2022-10-25" },
  ];

  return (
    <div>
      <Navbar1 isLoggedIn={true} />

      <section className="pt-20 pb-10 bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-600 text-center mb-8">Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {blogList.map((blog) => (
              <div key={blog.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <img src={blog.creatorImage} alt={blog.creator} className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="text-sm font-bold">{blog.creator}</p>
                    <p className="text-xs text-gray-500">{blog.date}</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-blue-600 mb-4">{blog.title}</h3>

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

      {/* Section Ask Chatbot */}
      <section id ="chatbot" className="bg-white py-10 mt-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">Need More Help?</h2>
          <p className="text-gray-700 text-center mb-6">
            Didn't understand something in the blogs? Ask our chatbot below for assistance.
          </p>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <textarea
                className="w-full p-4 border border-gray-300 rounded-lg resize-none"
                rows="3"
                placeholder="Type your question here..."
              ></textarea>
              <button className="bg-green-500 hover:bg-green-600 text-white w-full py-2 mt-3 rounded-lg">
                Ask Chatbot
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
