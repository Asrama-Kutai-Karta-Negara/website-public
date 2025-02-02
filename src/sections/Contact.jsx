import { Element } from "react-scroll";
import { contacts } from "../constants";

const Contact = () => {
  return (
    <section className="pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 bg-section-contact text-white">
      <Element name="contact">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-6">
          {/* Kiri: Info Kontak */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold uppercase">KONTAK KAMI</h2>
            <p className="text-gray-300">
              Cari tahu lokasi asrama serta lokasi tempat terdekat.
            </p>

            <div className="space-y-4">
              {contacts.map(({ id, icon, title, text }) => (
                <div className="flex items-center gap-4" key={id}>
                  <div className="bg-yellow-500 p-3 rounded-full">
                    <img
                      src={icon}
                      alt={title}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="text-gray-300 text-sm">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kanan: Peta */}
          <div className="lg:w-1/2">
            <div className="border-4 border-yellow-500 rounded-xl overflow-hidden shadow-lg">
              <iframe
                title="Asrama Location"
                className="w-full h-64 lg:h-80"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.1831456217906!2d110.36611327319436!3d-7.770394677075214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5848cdb3a705%3A0xdb7e19930d021861!2sAsrama%20Putra%20Kutai%20Kartanegara!5e0!3m2!1sid!2sid!4v1738515502324!5m2!1sid!2sid" 
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Contact;
