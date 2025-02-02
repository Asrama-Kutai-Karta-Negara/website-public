import { Element } from "react-scroll";
import { abouts } from "../constants";

const About = () => {
  return (
    <section>
      <Element name="tentang asrama">
        <div className="container space-y-2 mt-4">
          {abouts.map(({ id, title, description, icon, isItems, items }) => (
            <div 
              className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3"
              key={id}
            >
              <div
                className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl flex-1"
              >
                <div className="w-full flex justify-start items-start">
                  <div className="-ml-3 mb-12 flex items-center justify-center flex-col">
                    <div className="w-0.5 h-16 bg-s3" /> 
                    <img
                      src={icon}
                      className="size-20 object-contain"
                      alt={title}
                    />
                  </div>
                </div>

                <p className="caption mb-5 max-md:mb-6 uppercase">{title}</p>
                <p className="mb-11 body-1 max-md:mb-8 max-md:body-3">
                  {description}
                </p>
                {isItems && items && (
                  <div className="grid grid-cols-2 gap-4">
                    {items.map(({ id, icon, title, text }) => (
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
                )}

              </div>
            </div>
          ))}
        </div>
      </Element>
    </section>
  );
};
export default About;
