import Link from 'next/link'
export default function Grid(props) {
  return (
    <>
    <Link href={props.link}>
          <div className="imgContainer">
            <img className="gridimg" src={`/assets/portfolio/${props.img}`} />
            <div className="imgDescription">
              <p className="gridText">{props.name}</p>
            </div>
          </div>
    </Link>
    </>
  );
}
