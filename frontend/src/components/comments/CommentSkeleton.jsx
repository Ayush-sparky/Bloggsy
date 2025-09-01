// import { Skeleton } from "@/components/ui/skeleton";

// export function CommentSkeleton() {
//   return (
//     <div className="flex items-center space-x-4">
//       <div>
//         <Skeleton className="h-12 w-12 rounded-full" />
//         <div className=" space-y-2">
//           <Skeleton className=" w-[250px]" />
//           <Skeleton className="" />
//         </div>
//       </div>
//       <div className="space-y-2">
//         <Skeleton className="h-4 w-[250px]" />
//         <Skeleton className="h-4 w-[200px]" />
//       </div>
//     </div>
//   );
// }

import { Skeleton } from "@/components/ui/skeleton";

export function CommentSkeleton() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 bg-slate-300 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 bg-slate-300 w-[250px]" />
        <Skeleton className="h-4 bg-slate-300 w-[200px]" />
      </div>
    </div>
  );
}
