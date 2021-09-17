import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { useEffect, useState } from "react";

const FilmDisplay = ({}) => {
  const router = useRouter();
  const { id } = router.query;

  const [film, setFilm] = useState({});
  useEffect(() => {
    const localItems = JSON.parse(localStorage.getItem("listFilm"));
    setFilm({ ...localItems[id] });
  }, [id]);

  if(Object.keys(film).length === 0) return <ErrorPage statusCode={404}/>;
  return (
    <div className="page-wrap min-h-screen font-display">
      <div className="media">
        <div className="header-wrapper relative z-0 mb-12">
          <div
            className="header-hero bg-cover bg-center bg-no-repeat sm:h-44 h-64"
            style={{ backgroundImage: "url('" + film.coverImage + "')" }}
          >
            <div className="backdrop-filter backdrop-blur-md w-full h-full">
              <div
                className="w-full h-full opacity-40"
                style={{ backgroundColor: "black" }}
              />
            </div>
          </div>
          <div className="header-content relative">
            <div className="container mx-auto sm:block grid grid-flow-col auto-cols-max px-4">
              <div className="-mt-32 relative mr-8">
                <div className="static min-w-[12.99rem] max-w-[12.99rem] sm:min-w-[7.99rem] sm:max-w-[7.99rem]">
                  <img
                    src={film.coverImage}
                    className="rounded-md w-full mt-4"
                  ></img>
                </div>
              </div>
              <div className="mt-4 inline-grid md:max-w-md lg:max-w-2xl max-w-5xl">
                <h1 className="text-4xl text-white sm:text-current font-bold mb-4 sm:-mt-0 -mt-28 max-w-md">
                  {film.name}
                </h1>
                <h6 className="text-xl font-bold">Synopsys</h6>
                <hr className="mt-2 mb-4" />
                <p className="text-sm max-w-full">
                  {film.synopsis}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 grid grid-flow-col auto-cols-max">
          <div className="sm:w-0 w-60"></div>
          <div className="content sm:max-w-[90vw] md:max-w-[32rem] lg:max-w-[46rem] w-[64rem]">
            <h1 className="text-xl font-bold">Video Trailer</h1>
            <hr className="mt-2 mb-4" />
            <div className="relative h-0 pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                width="560"
                height="315"
                src={film.videoLink}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmDisplay;
