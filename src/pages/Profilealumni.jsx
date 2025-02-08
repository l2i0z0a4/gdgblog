import React, { useState } from "react";
import Navbar3 from "../components/Navbar3";
import femme from "../assets/femme.png";

const Profilealumni = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogList = [
    {
      id: 1,
      title: "How to become a software engineer",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt.",
      creator: "John Doe",
      creatorImage: femme,
      date: "2022-10-10",
    },
    {
      id: 2,
      title: "The impact of technology on our lives",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      creator: "Jane Doe",
      creatorImage: femme,
      date: "2022-10-15",
    },
  ];

  const userInfo = {
    name: "John Doe",
    email: "johndoe@example.com",
    linkedin: "https://www.linkedin.com/in/johndoe",
  };

  const handleAddBlog = () => {
    // Add blog logic here
    console.log("Adding new blog");
  };

  const handleUpdateBlog = (blogId) => {
    // Update blog logic here
    console.log(`Updating blog with id: ${blogId}`);
  };

  const handleDeleteBlog = (blogId) => {
    // Delete blog logic here
    console.log(`Deleting blog with id: ${blogId}`);
  };

  return (
    <div>
      <Navbar3 isLoggedIn={true} />

      {/* User Info Section */}
      <section className="bg-white py-10 mt-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-red-600">Welcome, {userInfo.name}!</h1>
          <p className="text-gray-700 mt-2">
            <strong>Email:</strong> {userInfo.email} &nbsp; | &nbsp;
            <a
              href={userInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn Profile
            </a>
          </p>
        </div>
      </section>
       
      {/* Blogs Section */}
      <section id="myblogs" className="py-8 bg-gray-50">
      <button
                    onClick={handleAddBlog}
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                  >
                    Add
                  </button>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-600 text-center mb-8">My Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {blogList.map((blog) => (
              <div
                key={blog.id}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={blog.creatorImage}
                    alt={blog.creator}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-bold">{blog.creator}</p>
                    <p className="text-xs text-gray-500">{blog.date}</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-blue-600 mb-4">{blog.title}</h3>
                <p className="text-gray-700">
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
                  ) : (
                    blog.content
                  )}
                </p>

                {/* Update, Delete Buttons */}
                <div className="flex justify-between mt-4">

                  <button
                    onClick={() => handleUpdateBlog(blog.id)}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDeleteBlog(blog.id)}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Detail Popup */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
            >
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
    </div>
  );
};

export default Profilealumni;
