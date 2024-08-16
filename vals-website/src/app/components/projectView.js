export default function Project(props) {
  const imageList = props.imgList;
  const custImgClass = props.customimgclass;
  return (
    <>
      <div className="w-screen px-7">
        <div className="flex gap-0 flex-col lg:flex-row">
          <div className="relative">
          <div className="flex-none sticky top-0 w-auto lg:w-80 space-y-4 mt-10">
            <p className="text-4xl pt-5 lg:text-5xl leading-relaxed   ...">
              {props.name}
            </p>
            {/*<p className="text-xl ...">type of design</p>*/}
            <p className="text-xl pb-10 pt-10">{props.description}</p>
          </div>

          </div>
          <div className="grow px-2 lg:ml-5">
            { props.customimgclass ? (
              custImgClass.map((img,i) => 
                <img
                    key={i}
                    className={`w-full mb-[96px] ${  img.class}`}
                    src={`/assets/portfolio/${props.projectN}/${img.img}`} 
            />
              ) ) : (
                console.log('nothing to see here')
              )
            }

            {imageList.map((img, i) =>
              img.slice(img.length - 4) == ".mp4" ? (
                <video autoPlay loop muted playsInline className="w-full mb-[96px]">
                  <source
                    src={`/assets/portfolio/${props.projectN}/${img}`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  key={i}
                  className="w-full mb-[96px] lg:w-1/2"
                  src={`/assets/portfolio/${props.projectN}/${img}`} 
                />
              )
            )}

            <div className="flex flex-row pt-5 w-20 mx-auto">
            <a href={`/portfolio/page/${props.left}`} className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-9 h-9 stroke-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>

            </a>

            <a href={`/portfolio/page/${props.right}`} className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-9 h-9 stroke-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>

            </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
