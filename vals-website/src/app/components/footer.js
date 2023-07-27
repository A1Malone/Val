export default function Footer(props) {

    return (
      <>
      <footer className="my-4 flex justify-center text-center">
        <div className="flex flex-col">
        <img src="/brand.png" className="mb-4 mx-auto" alt="Brand" width="80" height="74" />
        <div className="flex flex-row">
        <a href="https://www.instagram.com/valbuiofficial/" target="_blank" className="mr-4"><img src="/assets/SM/instagram-brands.svg" className="invert-[invert(42%) sepia(21%) saturate(1229%) hue-rotate(191deg) brightness(100%) contrast(80%)] h-10 mb-4 mx-auto" alt="Brand" /></a>
        <a href="https://www.behance.net/ValBuiOfficial" target="_blank" className="mr-4"><img src="/assets/SM/square-behance.svg" className="h-10 mb-4 mx-auto" alt="Brand" /></a>
        <a href="https://www.linkedin.com/in/val-bui/" target="_blank"><img src="/assets/SM/linkedin.svg" className="h-10 mb-4 mx-auto" alt="Brand"  /></a>
        </div>
        <p class="text-lg mt-4">V A L B U I 2 0 2 3</p>



        </div>
      </footer>
      </>
    );
  }