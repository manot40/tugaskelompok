import Link from "next/link";
import TheTeam from "../components/TheTeam";

export default function Home() {
  return (
    <div className="mx-auto h-screen flex justify-center items-center -m-0">
      <div className="container">
        <div className="flex flex-col w-full justify-center">
          <h1 className="text-4xl text-center font-bold mb-8 font-display">
            Halo 👋
          </h1>
          <h2 className="text-xl text-center mb-8">
            WebApp ReactJs untuk tugas kelompok Team 1 kelas MCCA
          </h2>
        </div>
        <div className="team-cards w-auto font-sans mb-12">
          <TheTeam />
        </div>
        <div className="flex justify-center w-full font-display">
          <div className="w-2/3 2xl:w-1/4 xl:w-1/4">
            <Link href="/tk1">
              <button className="w-full block btn btn-primary mb-4">
                Project Form TK1
              </button>
            </Link>
            <div data-tip="Work in progress!" className="tooltip block mb-4">
              <Link href="/tk2">
                <button className="w-full block btn mb-4">
                  Project Library Film TK2
                </button>
              </Link>
            </div>
            <div data-tip="Work in progress!" className="tooltip block mb-4">
              <button className="w-full btn" disabled>
                Project Form CRUD TK3
              </button>
            </div>
            <div data-tip="Work in progress!" className="tooltip block mb-4">
              <button className="w-full btn" disabled>
                Project Form TK4
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
