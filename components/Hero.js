import Button from "./Button";
import Navbar from "./Navbar";

export default function Hero() {
    return (
      <div className="bg-hero h-[713px]">
        <div className="container mx-auto">
          <Navbar/>
        </div>
        <div className="text-center mt-20">
          <h1 className="text-white font-semibold text-3xl w-7/12 mx-auto leading-relaxed">
            Saya seorang front-end engineer, back-end engineer, dan juga UI designer
            <p className="text-white text-opacity-20 text-lg w-6/12 mx-auto mt-6 leading-relaxed">
              Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI design.
            </p>
            <Button variant="yellow" className="mt-12">Pelajari</Button>
          </h1>
        </div>
      </div>
    )
}