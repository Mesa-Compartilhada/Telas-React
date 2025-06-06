import Skeleton from "react-loading-skeleton";

export default function CardDoacaoSkeleton() {
    return (
        <div className="min-w-64 max-w-64 bg-white rounded-xl p-2 shadow-gray-300 shadow-md my-6">
            <div className="flex flex-col px-4" onClick={() => {
                
            }}>
                <p className="text-lg truncate"><Skeleton /></p>
                <p className="text-xs truncate link-default w-fit"><Skeleton /></p> 
                <p><Skeleton /></p>
                <div className="flex flex-row gap-2 my-2">
                    <Skeleton width={50} />
                    <Skeleton width={50} />
                </div>
                <Skeleton />
                <Skeleton height={50} width={100} />
            </div>
        </div>
    )
}