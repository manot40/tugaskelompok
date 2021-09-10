const TheTeam = () => {
  function scrollCard(e) {
    e.preventDefault();
    const delta = Math.max(-1, Math.min(1, (e.nativeEvent.wheelDelta || -e.nativeEvent.detail)))
    e.currentTarget.scrollLeft -= (delta * 50)
  }
  
  return (
    <div
      className="overflow-x-auto flex flex-nowrap"
      id="cards-parent"
      onWheel={(e) => scrollCard(e)}
    >
      <div className="card bordered shadow-md m-4 min-w-min">
        <div className="flex-row items-center space-x-4 card-body">
          <div className="avatar">
            <div className="rounded-full w-14 h-14 shadow">
              <img
                src="https://ol.binus.ac.id/UserControl/ImageThumb.ashx?id=2201860355"
                alt=""
              />
            </div>
          </div>
          <div>
            <h2 className="card-title">Kevin Sandiho</h2>
            <p>2201860355</p>
          </div>
        </div>
      </div>
      <div className="card bordered shadow-md m-4 min-w-min">
        <div className="flex-row items-center space-x-4 card-body">
          <div className="avatar">
            <div className="rounded-full w-14 h-14 shadow">
              <img
                src="https://ol.binus.ac.id/UserControl/ImageThumb.ashx?id=2201862650"
                alt=""
              />
            </div>
          </div>
          <div>
            <h2 className="card-title">Celvin Swan</h2>
            <p>2201862650</p>
          </div>
        </div>
      </div>
      <div className="card bordered shadow-md m-4 min-w-min">
        <div className="flex-row items-center space-x-4 card-body">
          <div className="avatar">
            <div className="rounded-full w-14 h-14 shadow">
              <img
                src="https://ol.binus.ac.id/UserControl/ImageThumb.ashx?id=2201860310"
                alt=""
              />
            </div>
          </div>
          <div>
            <h2 className="card-title">Ditiofernal Putra</h2>
            <p>2201860310</p>
          </div>
        </div>
      </div>
      <div className="card bordered shadow-md m-4 min-w-min">
        <div className="flex-row items-center space-x-4 card-body">
          <div className="avatar">
            <div className="rounded-full w-14 h-14 shadow">
              <img
                src="https://ol.binus.ac.id/UserControl/ImageThumb.ashx?id=2201862745"
                alt=""
              />
            </div>
          </div>
          <div>
            <h2 className="card-title">Fericho Bramasta</h2>
            <p>2201862745</p>
          </div>
        </div>
      </div>
      <div className="card bordered shadow-md m-4 min-w-min">
        <div className="flex-row items-center space-x-4 card-body">
          <div className="avatar">
            <div className="rounded-full w-14 h-14 shadow">
              <img
                src="https://ol.binus.ac.id/UserControl/ImageThumb.ashx?id=2201860613"
                alt=""
              />
            </div>
          </div>
          <div>
            <h2 className="card-title">Tito Maulana</h2>
            <p>2201860613</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheTeam;
