import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      
      <main id="home" className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4 bg-white">
        <div className="text-center">
          <img
            src="/rai.jpg" // Pastikan gambar ini ada di folder public
            alt="Foto raii"
            width={256}
            height={256}
            className="rounded-full object-cover mx-auto mb-4"
          />
          
          <h1 className="text-4xl font-bold text-black mb-2">I&apos;am raraiii</h1>
          <p className="font marker: text-lg text-gray-700 mb-4">
            Halo, perkenalkan nama saya Raisyah Devita Anggraini. Saya merupakan seorang pelajar di SMK Negeri 21 Jakarta yang sangat antusias dalam mengembangkan diri di berbagai bidang. Di waktu luang, saya memiliki ketertarikan yang kuat terhadap mencoba hal-hal baru, baik untuk mengasah keterampilan maupun memperluas wawasan. Selain itu, saya juga menikmati bersepeda sebagai sarana relaksasi dan eksplorasi lingkungan sekitar. Ketika suasana hati sedang mendukung, saya senang menuangkan kreativitas melalui sketsa, yang menjadi salah satu cara saya untuk berekspresi dan mengisi waktu dengan hal-hal yang positif.
          </p>
          <a href="#about"
            className="px-6 py-2 text-white bg-violet-900 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-blue-300"
          >
            Learn More About Me
          </a>
        </div>
      </main>
      
      
    </div>
  );
};

export default Home;
