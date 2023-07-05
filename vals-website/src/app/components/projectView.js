export default function Project(props) {
  return (
    <>
      <div className="w-screen px-7">
        <div class="flex gap-0 flex-col lg:flex-row">
          <div class="flex-none w-auto lg:w-80 space-y-4 mt-10">
            <p class="text-4xl lg:text-5xl leading-relaxed   ...">
              {props.name}
            </p>
            <p class="text-xl ...">type of design</p>
            <p class="text-xl pb-10 pt-10">{props.description}</p>
          </div>
          <div class="grow px-2 ">
            <img className="w-full" src={`/assets/portfolio/${props.img}`} />
          </div>
          <div class="flex-none w-20 mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9 stroke-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9 stroke-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

          </div>
        </div>
      </div>
    </>
  );
}
