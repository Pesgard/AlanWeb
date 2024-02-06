import Link from "next/link";

export default function Tareas() {
    return (
        <div className="bg-blue-200 w-3/4 me-2">
            <div className=" mb-2 mt-2 ms-1">
                <h3 className="text-blue-500 font-bold text-2xl">Tarea 1</h3>
                <p className="text-black">
                    <span className="font-bold">Descripcion: </span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque posuere tellus orci, id pharetra justo maximus sed. Pellentesque vitae neque euismod, volutpat metus pellentesque, posuere neque. Proin quis scelerisque quam. Aliquam sodales magna lorem, et pulvinar dui suscipit quis. Suspendisse pharetra nisi ac enim maximus commodo quis non lectus. Ut.
                </p>
                <span className="text-black font-bold">
                    Link:
                    <Link
                        className="text-blue-500 underline"
                        href={{
                            pathname: '/tarea1'
                        }}>
                        Enlace a tarea 1
                    </Link>
                </span>
            </div>

            <div className=" mb-2 mt-2 ms-1">
                <h3 className="text-blue-500 font-bold text-2xl">Tarea 2</h3>
                <p className="text-black">
                    <span className="font-bold">Descripcion: </span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque posuere tellus orci, id pharetra justo maximus sed. Pellentesque vitae neque euismod, volutpat metus pellentesque, posuere neque. Proin quis scelerisque quam. Aliquam sodales magna lorem, et pulvinar dui suscipit quis. Suspendisse pharetra nisi ac enim maximus commodo quis non lectus. Ut.
                </p>
                <span className="text-black font-bold">
                    Link:
                    <Link
                        className="text-blue-500 underline"
                        href={{
                            pathname: '/tarea2'
                        }}>
                        Enlace a tarea 2
                    </Link>
                </span>
            </div>

        </div>
    );
}