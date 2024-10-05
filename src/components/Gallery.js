import React from "react";

const Gallery = () => {
  return (
    <div>
      <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
        <h2 className="text-center text-gray-700 p-4">Gallery</h2>
        <div className="grid sm:grid-cols-5 gap-4">
          <div className="sm:col-span-3 col-span-2 row-span-2">
            <img
              src="https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
              alt="/"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
              alt="/"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
              alt="/"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
              alt="/"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
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
