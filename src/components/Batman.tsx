import BannerLikeUnlike from "./BannerLikeUnlike.tsx";

export default function Batman() {
    return (
        <div className="position:relative fg:white">
            <img
                className="w:100%"
                src="/img/Batman.png"
                style={{ height: 450 }}
            />
            <div
                className="position:absolute bottom:0 left:0 right:0"
                style={{
                    background:
              "linear-gradient(rgba(0, 0, 1, 0.0), rgba(0, 0, 1, 0.9))"
            }}
                >
                <div className="small">
                    <h1>Batman</h1>
                    <p className="pe-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et
                    </p>
                    <div className="row row-cols-2">
                        <p
                            className="col border py-2 text-center"
                            style={{ background: "transparent" }}
                            >
                            Ver detalle
                        </p>
                        <p className="col py-2 text-end pe-5">1 mes atras</p>
                    </div>
                </div>
                <BannerLikeUnlike/>
            </div>
        </div>
    )
}