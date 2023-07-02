export default function Project(props) {
  return (
    <>
      <div className="w-screen px-7">
        <div class="flex gap-0 flex-col lg:flex-row">
          <div class="flex-none w-auto lg:w-80 space-y-4 mt-10">
            <p class="text-6xl leading-relaxed   ...">
              {props.name}
            </p>
            <p class="text-xl ...">type of design</p>
            <p class="text-xl pt-10">
              more description stuff Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ut tortor velit, fermentum vitae vestibulum et,
              tincidunt quis mi.
            </p>
          </div>
          <div class="grow px-2">
            <img className="w-full" src={`/assets/portfolio/${props.img}`} />
          </div>
          <div class="flex-none w-auto mx-auto">the next project </div>
        </div>
      </div>
    </>
  );
}
