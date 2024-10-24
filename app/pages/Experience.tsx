"use client"; // Tambahkan ini di bagian paling atas file
import { useState } from "react";

const experiences = [
  {
    title: "Marching Band Competition (SD)",
    description:
      "Saat masih duduk di bangku sekolah dasar, saya pernah mendapatkan kesempatan yang sangat berharga dengan mengikuti lomba marching band. Pengalaman ini mengajarkan saya tentang disiplin, kerjasama tim, dan pentingnya ketepatan waktu. Tidak hanya tentang musik dan formasi, tetapi juga bagaimana bekerja sama dengan banyak orang untuk mencapai tujuan yang sama. Ini adalah pengalaman pertama saya merasakan semangat kompetisi dan bagaimana bekerja keras untuk mendapatkan hasil yang memuaskan.",
  },
  {
    title: "Perkemahan Jumat Sabtu (Pramuka)",
    description:
      "Saya juga pernah mengikuti kegiatan perkemahan Pramuka di sekolah, yang dikenal dengan sebutan Perkemahan Jumat Sabtu. Kegiatan ini benar-benar menantang dan penuh petualangan, di mana saya belajar banyak hal, mulai dari keterampilan bertahan hidup di alam, berlatih kemandirian, hingga mempererat solidaritas dengan teman-teman sekelas. Perkemahan ini mengajarkan saya arti pentingnya kerja sama dan gotong royong dalam menghadapi berbagai tantangan yang ada di alam bebas.",
  },
  {
    title: "Kegiatan Bantara",
    description:
      "Sebagai anggota pramuka, saya turut serta dalam kegiatan Bantara. Pengalaman ini melibatkan berbagai pelatihan keterampilan kepemimpinan, pertolongan pertama, dan kemampuan beradaptasi di berbagai situasi. Kegiatan ini membentuk karakter dan membangun rasa percaya diri untuk menghadapi tantangan di masa depan.",
  },
  
];

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="container mx-auto p-4 flex flex-col items-center" id="experience">
      <h1 className="text-5xl font-bold text-black mb-10">Experiences</h1>

      <div className="relative w-full max-w-4xl flex items-center">
        <button onClick={handlePrev} className="absolute left-0 p-2 bg-gray-300 rounded-full">
          &#9664;
        </button>

        <div className="mx-10 bg-purple-300 p-6 rounded-lg shadow-lg text-center w-full">
          <h2 className="text-2xl font-bold text-purple-950">{experiences[currentIndex].title}</h2>
          <p className="text-lg text-gray-700">{experiences[currentIndex].description}</p>
        </div>

        <button onClick={handleNext} className="absolute right-0 p-2 bg-gray-300 rounded-full">
          &#9654;
        </button>
      </div>

      {/* Indicator */}
      <div className="flex justify-center mt-4">
        {experiences.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentIndex ? "bg-purple-950" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
