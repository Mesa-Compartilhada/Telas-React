import Skeleton from "react-loading-skeleton";

export default function LinhaDoacoesSkeleton() {
  return (
    <>
      {
       [...Array(3)].map((_, i) => (
        <tr>
          <td className="w-[150px] p-4 border-b border-blue-gray-50">
            <Skeleton width={100} height={20} />
          </td>
          <td className="w-[150px] p-4 border-b border-blue-gray-50">
            <Skeleton width={80} height={20} />
          </td>
          <td className="w-[150px] p-4 border-b border-blue-gray-50">
            <Skeleton width={80} height={20} />
          </td>
          <td className="w-[150px] p-4 border-b border-blue-gray-50">
            <Skeleton width={60} height={20} />
          </td>
          <td className="w-[150px] p-4 border-b border-blue-gray-50">
            <Skeleton width={100} height={20} />
          </td>
          <td className="w-[50px] p-4 border-b border-blue-gray-50">
            <Skeleton circle={true} width={32} height={32} />
          </td>
        </tr>
       )) 
      }
    </>
  );
}
