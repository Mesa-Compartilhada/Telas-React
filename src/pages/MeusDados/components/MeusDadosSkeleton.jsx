import Skeleton from "react-loading-skeleton";

export default function MeusDadosSkeleton() {
    return (
        <div className="flex justify-center items-center bg-[url('./assets/fundo_bolas_laranja_v2.svg')] bg-no-repeat bg-cover bg-opacity-50 py-10">
            <div className="w-full max-w-4xl border-4 p-10 shadow-xl rounded-2xl gradiente mx-4">
                <h2>
                    <Skeleton className="mb-4" width={120} height={20} />
                </h2>
                <div className="rounded-lg shadow-md p-6">
                    <Skeleton className="mb-4" width={120} height={20} />
                    <div className="mb-4 flex items-center gap-6">
                        <Skeleton width={75} />
                        <Skeleton width={100} />
                        <Skeleton width={75} />
                        <Skeleton width={100} />
                    </div>
                    <div className="mb-4 flex items-center gap-6">
                        <Skeleton width={75} />
                        <Skeleton width={100} />
                        <Skeleton width={75} />
                        <Skeleton width={100} />
                    </div>
                    <div className="border-t-2 border-grey w-full my-5"></div>
                    <Skeleton className="mb-4" width={120} height={20} />
                    <div className="mb-4 flex items-center gap-2">
                        <Skeleton width={25} />
                        <Skeleton width={100} />
                        <Skeleton width={25} />
                        <Skeleton width={100} />
                        <Skeleton width={25} />
                        <Skeleton width={100} />
                    </div>
                    <div className="mb-4 flex items-center gap-6">
                        <Skeleton width={75} />
                        <Skeleton width={100} />
                        <Skeleton width={75} />
                        <Skeleton width={100} />
                    </div>
                    <div className="mb-4 flex items-center"></div>
                    <div className="flex gap-4">
                        <Skeleton width={100} />
                        <Skeleton width={100} />
                    </div>
                </div>
            </div>
        </div>
    );
}
