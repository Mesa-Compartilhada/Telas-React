import Skeleton from "react-loading-skeleton"

export default function CardPerfilSkeleton() {
    return (
        <div className="flex justify-center items-center bg-[url('./assets/fundo_bolas_laranja_v2.svg')] bg-cover bg-opacity-50 h-dvh">
            <div className="mx-10 lg:mx-20 my-4 border-4 p-10 shadow-xl rounded-xl gradiente h-3/4">
                <div className="w-fit bg-white rounded-xl p-6 shadow-gray-300 shadow-md m-auto">
                    <div className="flex flex-col items-center gap-2">
                        <Skeleton width={120} height={120} />
                        <Skeleton width={100} />
                        <div className="flex gap-4">
                            <Skeleton width={100} />
                            <Skeleton width={100} />
                        </div>
                        
                        <div className="flex gap-4">
                            <Skeleton width={150} />
                            <Skeleton width={150} />
                        </div>
                        
                        <p><Skeleton width={200} height={50} /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}