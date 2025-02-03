import { Element } from "react-scroll";
import { axiosUrl, links, APIKEY, urlAPIBE } from "../constants/index.jsx";
import { Marker } from "../components/Marker.jsx";
import axios from "axios";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import ReactPlayer from 'react-player/youtube';

const Gallery = () => {
  const [videos, setVideos] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(links[0]?.title);

  useEffect(() => {
    fetchImages(links[0]?.title);
  }, []);

  const fetchImages = async (category_name) => {
    setVideos([]);
    setPhotos([]);
    try {
      const response = await axios.get(`${axiosUrl}/galleries?category_name=${category_name}`, {
        headers: {
          "X-API-KEY": APIKEY,
        },
      });

      const res = response.data;
      if (res.success && res.count > 0) {
        const videoList = res.data.filter((item) => item.type === "Video");
        const photoList = res.data.filter((item) => item.type === "Foto");

        setVideos(videoList);
        setPhotos(photoList);
        setSelectedCategory(category_name);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const photoSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="mt-2">
      <Element name="gallery" className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16">
        <div className="container">
          <div className="flex items-center">
            <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex256 max-md:flex-100">
              <div className="mb-10">
                <p className="caption mb-5 max-md:mb-6">Gallery Asrama Kami</p>
              </div>

              <p className="body-1 mb-10 max-w-md">
                Berikut kumpulan dokumentasi dari aktivitas kami selama di asrama dan juga beberapa foto dari fasilitas yang ada di asrama.
              </p>

              <ul className="flex flex-wrap items-center gap-[80px]">
                {links.map(({ id, title, url, icon }) => (
                  <li key={id} className="download_tech-link ">
                    <button
                      onClick={() => fetchImages(title)} 
                      className="size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500"
                    >
                      <span className="absolute -top-2 rotate-90">
                        <Marker fill={"#C4CBF5"} />
                      </span>
                      <img src={"/images/lines.svg"} alt="lines" className="absolute size-13/20 object-contain" />
                      <span className="download_tech-icon">{icon}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {photos.length > 0 && (
            <div className="my-10 w-full">
              <h3 className="font-semibold text-xl mb-4">Photos - {selectedCategory}</h3>
              <Slider {...photoSliderSettings}>
                {photos.slice(0, 6).map((photo) => (
                  <div key={photo.id} className="photo-card">
                    <h4 className="italic font-bold text-s2">{photo.title}</h4>
                    {photo.file && (
                      <img
                        src={urlAPIBE + photo.file}
                        alt={photo.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    )}
                  </div>
                ))}
              </Slider>
            </div>
          )}

          {videos.length > 0 && (
            <div className="my-10 w-full">
              <h3 className="font-semibold text-xl mb-4">Videos - {selectedCategory}</h3>
              <div className="flex flex-wrap gap-2">
                {videos.slice(0, 6).map((video) => (
                  <div key={video.id} className="video-card mr-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
                    <h4 className="italic font-bold text-s2">{video.title}</h4>
                    {video.url && (
                      <ReactPlayer
                        url={video.url}
                        width="100%"
                        height="315px"
                        controls={true}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Element>
    </section>
  );
};

export default Gallery;