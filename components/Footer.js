const Footer = ({ }) => {
  return (
    <footer className="relative bottom-0 right-0 w-full p-3 bg-base-300 mt-4">
      <div className="flex justify-between">
        <div className="flex">
          <label className="cursor-pointer label text-sm">Team 1 MCCA</label>
        </div>
        <div className="flex">
          <label className="label mr-2">
            <span className="label-text">Tema</span>
          </label>
          <select
            className="select select-bordered select-sm w-48"
            data-choose-theme
          >
            <option value="">Ikuti Sistem</option>
            <option value="light">Terang</option>
            <option value="dark">Gelap</option>
          </select>
        </div>
      </div>
    </footer>
  )
}

export default Footer;