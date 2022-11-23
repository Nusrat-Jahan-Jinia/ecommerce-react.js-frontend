import React from "react";

const Product = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-8">
        <div>
          <span className="inline-block h-1 w-12 bg-red-700"></span>
          <h2 className="mt-1 text-2xl font-extrabold uppercase tracking-wide lg:text-3xl">
            Trainers
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
          <a href="#" className="block">
            <div className="flex justify-center">
              <strong className="relative h-6 bg-black px-4 text-xs uppercase leading-6 text-white">
                New
              </strong>
            </div>

            <img
              alt="Trainer"
              src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              className="-mt-3 h-96 w-full object-cover"
            />

            <h3 className="mt-4 text-sm text-black/90">
              Limited Edition Sports Trainer
            </h3>

            <div className="mt-4 flex items-center justify-between font-bold">
              <p className="text-lg">$189.99</p>

              <p className="text-xs uppercase tracking-wide">6 Colors</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
