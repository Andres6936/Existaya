import SearchIcon from "./icon/Search.tsx";
import LikeIcon from "./icon/LikeIcon.tsx";
import UnlikeIcon from "./icon/UnlikeIcon.tsx";
import Thor from "./components/Thor.tsx";
import Spiderman from "./components/Spiderman.tsx";
import Batman from "./components/Batman.tsx";
import Superman from "./components/Superman.tsx";
import Footer from "./components/Footer.tsx";

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
                    <div className="flex flex:row">
                        <div
                            className="flex flex:row flex:1 justify-content:center align-items:center"
                            style={{ background: "rgba(49, 210, 242, 0.6)" }}
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="currentColor"
                                className="bi bi-hand-thumbs-up-fill py:1em"
                                viewBox="0 0 16 16"
                                >
                                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                            </svg>
                            <span className="h1">88%</span>
                        </div>
                        <div className="flex flex:row flex:1 justify-content:center align-items:center" style={{ background: "rgba(255, 165, 0, 0.6)" }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="currentColor"
                                className="bi bi-hand-thumbs-down-fill py:1em"
                                viewBox="0 0 16 16"
                                >
                                <path d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.378 1.378 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51.136.02.285.037.443.051.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.896 1.896 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2.094 2.094 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.162 3.162 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.823 4.823 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591z" />
                            </svg>
                            <span className="h1">12%</span>
                        </div>
                    </div>
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