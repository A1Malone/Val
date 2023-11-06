import Link from "next/link";
export default function Grid(props) {
  return (
    <>
      <Link href={props.link}>
        <div className="imgContainer">
          {
            (props.img.slice(props.img.length - 4) == ".mp4") ? 

            <video
              autoPlay
              loop
              muted
              playsInline
              className="gridimg"
            >
              <source
                src={`/assets/portfolio/${props.name}/${props.img}`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video> :
          <img
            className="gridimg"
            src={`/assets/portfolio/${props.name}/${props.img}`}
          />
            
          }
          <div className="imgDescription">
            <p className="gridText">{props.name}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
