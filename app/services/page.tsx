import React from "react";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex container mx-auto p-4 flex-col gap-4 mt-8">
        {/* <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg">
          We offer a wide range of trading services to meet your needs
        </p> */}

        <section
          id="construction"
          className="w-full h-screen bg-cyan-700 py-4 rounded-lg"
        >
          <h2 className="text-gray-300 text-3xl px-4 py-2">construction</h2>
          <p className="px-4 py-2 text-white text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            repellendus autem, officiis aspernatur, libero laudantium facilis
            tempora at perferendis quam velit facere fugiat provident quibusdam
            a doloribus explicabo pariatur ex?
          </p>
        </section>
        <section
          id="transportation"
          className="w-full h-screen bg-cyan-800 py-4 rounded-lg"
        >
          <h2 className="text-gray-300 text-3xl px-4 py-2">transportation</h2>
          <p className="px-4 py-2 text-white text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            repellendus autem, officiis aspernatur, libero laudantium facilis
            tempora at perferendis quam velit facere fugiat provident quibusdam
            a doloribus explicabo pariatur ex?
          </p>
        </section>
        <section
          id="water"
          className="w-full h-screen bg-cyan-900 py-4 rounded-lg"
        >
          <h2 className="text-gray-300 text-3xl px-4 py-2">water Drilling</h2>
          <p className="px-4 py-2 text-white text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            repellendus autem, officiis aspernatur, libero laudantium facilis
            tempora at perferendis quam velit facere fugiat provident quibusdam
            a doloribus explicabo pariatur ex?
          </p>
        </section>
        <section
          id="agriculture"
          className="w-full h-screen bg-cyan-950 py-4 rounded-lg"
        >
          <h2 className="text-gray-300 text-3xl px-4 py-2">Agriculture</h2>
          <p className="px-4 py-2 text-white text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta
            earum maiores consectetur doloremque quasi nam eos impedit eius,
            cupiditate nulla est, odio architecto cum! Veniam laudantium
            molestias consequatur doloribus!
          </p>
        </section>
      </main>
    </div>
  );
}
