import React from "react";

const Gallery = () => {
  return (
    <div>
      <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
        <h2 className="text-center text-gray-700 p-4">Gallery</h2>
        <div className="grid sm:grid-cols-5 gap-4">
          <div className="sm:col-span-3 col-span-2 row-span-2">
            <img
              src="https://images.unsplash.com/photo-1519323556622-75c4531c6993?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="/"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1564469780933-37609ec45780?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="/"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="/"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1504823956878-c6b5df020d49?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="/"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1543832923-44667a44c804?q=80&w=1488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="/"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
