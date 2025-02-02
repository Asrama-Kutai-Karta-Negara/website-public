import { Element } from "react-scroll";
import Button from "../components/Button.jsx";
import { panduan } from "../constants/index.jsx";

const Daftar = () => {
  return (
    <section>
      <Element name="panduan pendaftaran">
        <div className="container">
          <div 
            className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3"
          >
            <div
              className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl flex-1"
            >
              <div className="w-full flex justify-start items-start">
                <div className="-ml-3 mb-12 flex items-center justify-center flex-col">
                  <div className="w-0.5 h-16 bg-s3" />
                    <img
                      src="/images/pendaftaran.png"
                      className="object-contain"
                      alt="pendaftaran"
                    />
                </div>
              </div>

              <p className="caption mb-5 max-md:mb-6">
                Panduan Pendaftaran
              </p>
              <h2 className="mb-7 h3 text-p4 max-md:mb-6 max-md:h5">
                Bagaimana cara saya mendaftar?
              </h2>
              <p className="mb-11 body-1 max-md:mb-8 max-md:body-3">
                Dengan mengikuti tahapan ini, Anda akan resmi menjadi bagian dari Asrama Pelajar & Mahasiswa Kutai Kartanegara di Yogyakarta. Segera daftar dan pastikan ketersediaan tempat Anda!
              </p>
            </div>
            <ul className="relative flex justify-around flex-grow px-[5%] border-2 border-s3 rounded-7xl max-md:hidden">
              <div className="absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />

              {panduan.map(({ id, icon, title, description, isButton, buttonData }) => (
                <li key={id} className="relative pt-16 px-4 pb-14">
                  <div className="absolute top-8 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10" />

                  <div className="flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-20">
                    <img
                      src={icon}
                      alt={title}
                      className="size-17/20 object-contain z-20"
                    />
                  </div>

                  <h3 className="relative z-2 max-w-36 mx-auto my-0 base-small text-center uppercase">
                    {title}
                  </h3>
                  <h3 className="relative mt-2 max-w-40 mx-auto my-0 small-1 text-center">
                    {description}
                  </h3>
                  {
                    isButton && buttonData && (
                      <Button icon={buttonData.icon} href={buttonData.href} textFont={'text-white'} containerClassName="mt-4 ">{buttonData.text}</Button>
                    )
                  }
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  );
};
export default Daftar;
