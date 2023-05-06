import SearchIcon from "./icon/Search.tsx";
import LikeIcon from "./icon/LikeIcon.tsx";
import UnlikeIcon from "./icon/UnlikeIcon.tsx";
import Thor from "./components/Thor.tsx";
import Spiderman from "./components/Spiderman.tsx";
import Batman from "./components/Batman.tsx";
import Superman from "./components/Superman.tsx";
import Footer from "./components/Footer.tsx";
import BannerLikeUnlike from "./components/BannerLikeUnlike.tsx";

export default function App(){
    return (
        <main className="flex flex:wrap">
            <div className="position:relative flex flex-basis:100%">
                <img className="w:100%" src="/img/Ironman.png" />
                <div
                    className="left:0 right:0 position:absolute fg:white p:5em"
                    style={{
                    top: "4%",
                        transform: "translateY(-48px)",
                        background: "linear-gradient(rgba(0, 0, 1, 0.9), rgba(0, 0, 1, 0.0))"
                }}
                    >
                    <div className="row row-cols-2">
                        <img className="col-2" src="/img/Logo.png" />
                        <ul className="col-10 text-end list-inline pt-4">
                            <li className="list-inline-item pe-3">Heroes Anteriores</li>
                            <li className="list-inline-item pe-3">¿Cómo Funciona?</li>
                            <li className="list-inline-item">Iniciar Sesión</li>
                            <li className="list-inline-item">
                                <SearchIcon/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className="position:absolute bottom:0 fg:white"
                    style={{
                    background: "rgba(0, 0, 1, 0.4)",
                        backdropFilter: "blur(10px)",
                }}
                    >
                    <div className="flex flex:col px:1em">
                        <p>Dinos tu opinión sobre</p>
                        <h1 className="h1 fw-bold">Ironman?</h1>
                        <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi
                        </p>
                        <a>Más información</a>
                        <p className="fw-bold pt-2">¿Cuál es tu voto?</p>
                    </div>
                    <div className="flex flex:row">
                        <LikeIcon/>
                        <UnlikeIcon/>
                    </div>
                    <BannerLikeUnlike/>
                </div>
            </div>

            <div className="flex flex:col px:2em py:0.5em"
                style={{ background: "gainsboro" }}>
                <div className="col-4">
                    <h2>The standard Lorem Ipsum passage</h2>
                </div>
                <div className="col-8">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi
                </div>
            </div>

            <div className="flex flex:col">
                <h1 className="h1 mb-5 text-muted">Super Heroes anteriores</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-xxl-2 g-5">
                    <Thor/>
                    <Spiderman/>
                    <Batman/>
                    <Superman/>
                </div>
            </div>

            <Footer/>
        </main>
    )
}