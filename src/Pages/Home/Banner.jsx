import banner1 from "../../assets/images/101882.jpg";
import banner2 from "../../assets/images/2151187904.jpg";
import banner3 from "../../assets/images/2148911764.jpg";
import banner4 from "../../assets/images/33624.jpg";
import 'animate.css';

const Banner = () => {
    return (
        <div className="mt-10">
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full h-auto rounded-xl object-cover" />
                    <div className="absolute flex items-end h-full bg-gradient-to-r from-[#151515] to-[#15151500] w-2/3 rounded-xl ">
                        <div className="text-white space-y-2 p-4">
                            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold animate__animated animate__zoomInDown animate__delay-2s">Tailored Work Solutions for Professional</h2>
                            <p className="text-sm md:text-base lg:text-base font-medium">Embark on a career journey that matches your lifestyle and aspirations with our diverse</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="text-white text-6xl">❮</a>
                        <a href="#slide2" className="text-white text-6xl">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full h-auto rounded-xl object-cover" />
                    <div className="absolute flex items-end h-full bg-gradient-to-r from-[#151515] to-[#15151500] w-2/3 rounded-xl ">
                        <div className="text-white space-y-2 p-4">
                            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold">Remote Job for Professional</h2>
                            <p className="text-sm md:text-base lg:text-base font-medium">Our company is seeking talented individuals for exciting remote job opportunities.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="text-white text-6xl">❮</a>
                        <a href="#slide3" className="text-white text-6xl">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full h-auto rounded-xl object-cover" />
                    <div className="absolute flex items-end h-full bg-gradient-to-r from-[#151515] to-[#15151500] w-2/3 rounded-xl ">
                        <div className="text-white space-y-2 p-4">
                            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold">Work Revolution- Unlock Your Potential</h2>
                            <p className="text-sm md:text-base lg:text-base font-medium">Experience the freedom and flexibility of work with our exciting job opportunities</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="text-white text-6xl">❮</a>
                        <a href="#slide4" className="text-white text-6xl">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner4} className="w-full h-auto rounded-xl object-cover" />
                    <div className="absolute flex items-end h-full bg-gradient-to-r from-[#151515] to-[#15151500] w-2/3 rounded-xl ">
                        <div className="text-white space-y-2 p-4">
                            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold">Full-Time Careers, Where Passion Meets Purpose</h2>
                            <p className="text-sm md:text-base lg:text-base font-medium">full-time career where you can unleash your passion and drive towards a meaningful purpose.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="text-white text-6xl">❮</a>
                        <a href="#slide1" className="text-white text-6xl">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;