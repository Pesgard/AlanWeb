import Image from "next/image";

export default function Datos() {
    return (
        <div className="bg-blue-500 w-1/4">
            <div className="text-left mb-4 ml-2">
                <h2 className="font-black">
                    MIS DATOS
                </h2>
                <p>
                    <span className="font-bold">Grupo: </span>
                    301
                </p>
                <p>
                    <span className="font-bold">Nombre: </span>
                    Esgard David Peinado Perez
                </p>
            </div>

            <div className=" flex flex-col items-center">
                <div>
                    {/* Contenido de la imagen */}
                    <Image
                        className="object-center mb-4"
                        src="/mia.jpg"
                        width={150}
                        height={150}
                        alt="Picture of the author"
                    />
                </div>
            </div>
        </div>
    );
}