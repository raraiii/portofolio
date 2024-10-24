// pages/about.tsx

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400" id="about">
      <main className="container mx-auto p-8">
        <h1 className="text-5xl font-extrabold text-gray-800 text-center mt-10 mb-4 tracking-wider">
        all about raii
        </h1>

        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed mb-8">
          Halo! Saya Raisyah Devita Anggraini, seorang individu yang penuh semangat dan kreatif. Seni, khususnya bernyanyi dan menari, selalu menjadi bagian besar dalam hidup saya. Saya menikmati mengekspresikan diri melalui musik dan gerakan, tetapi saya juga selalu mencari tantangan baru untuk terus berkembang. Saya percaya bahwa belajar hal-hal baru adalah kunci pertumbuhan baik di kehidupan pribadi maupun profesional.
        </p>

        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
          My Hobbies
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none max-w-3xl mx-auto">
          <li className="flex items-center justify-center bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <span className="text-xl font-semibold text-gray-800">Menari</span>
          </li>
          <li className="flex items-center justify-center bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <span className="text-xl font-semibold text-gray-800">Mendengar Musik</span>
          </li>
          <li className="flex items-center justify-center bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <span className="text-xl font-semibold text-gray-800">Travelling</span>
          </li>
          <li className="flex items-center justify-center bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <span className="text-xl font-semibold text-gray-800">Menonton Film</span>
          </li>
        </ul>

        <p className="mt-8 text-lg text-gray-700 text-center max-w-2xl mx-auto">
          Ketertarikan terhadap sesuatu yang berbeda adalah kunci untuk terus berkembang.
        </p>
      </main>
    </div>
  );
};

export default AboutPage;
