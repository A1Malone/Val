export default function Grid() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="grid" data-masonry='{"percentPosition": true }'>
            <div className="grid-item"></div>
            <div className="grid-item grid-item--width2"></div>
            <div className="grid-item grid-item--width2"></div>
            <div className="grid-item"></div>
            <div className="grid-item grid-item--height2"></div>
            <div className="grid-item"></div>
            <div className="grid-item grid-item--height2"></div>
            <div className="grid-item grid-item--width2"></div>
            <div className="grid-item"></div>
            <div className="grid-item grid-item--height2"></div>
            <div className="grid-item grid-item--height2"></div>
            <div className="grid-item grid-item--width2"></div>
            ...
          </div>
        </div>
      </div>
    </>
  );
}
