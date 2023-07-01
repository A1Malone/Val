export default function Grid(props) {
  return (
    <>
          <div className="imgContainer">
            <img className="gridimg" src={`/assets/portfolio/${props.img}`} />
            <div className="imgDescription">
              <p className="gridText">{props.name}</p>
            </div>
          </div>
    </>
  );
}
