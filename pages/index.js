import Link from 'next/link'
import TheTeam from "../components/TheTeam"

export default function Home() {
  return (
    <div className="mx-auto h-screen flex justify-center items-center -m-0">
      <div className="container">
        <div className="flex w-full justify-center font-display">
          <h1 className="text-4xl font-bold mb-8">Halo! 👋</h1>
        </div>
        <div className="flex w-full justify-center font-display mb-16">
          <h2 className="text-xl text-center">Web Application ReactJs untuk tugas kelompok Team 1 kelas MCCA</h2>
        </div>
        <div className="w-auto font-sans mb-12">
          <TheTeam />
        </div>
        <div className="flex justify-center w-full font-display">
          <div className="w-2/3 2xl:w-1/4 xl:w-1/4">
            <button className="w-full block btn btn-primary mb-4" href="/tk1"><Link href="/tk1">Project Form TK1</Link></button>
            <div data-tip="Work in progress!" className="tooltip block mb-4">
              <button className="w-full btn" disabled>Project Library Film TK2</button>
            </div>
            <div data-tip="Work in progress!" className="tooltip block mb-4">
              <button className="w-full btn" disabled>Project Form CRUD TK3</button>
            </div>
            <div data-tip="Work in progress!" className="tooltip block mb-4">
              <button className="w-full btn" disabled>Project Form TK4</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
