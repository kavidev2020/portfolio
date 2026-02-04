import { Typography } from "@/components/ui/typography";
import { SERVICES } from "@/lib/data";
import { Minus } from "lucide-react";

export function Service() {
  return (
   <div className="max-w-6xl p-2 mx-auto py-10 bg-muted">
    <div className="flex justify-center items-center font-medium"><Minus className="text-secondary mr-1"/>{" "} Services</div>
    <div className="flex justify-center items-center font-medium">
     <Typography variant={'h3'}><span className="text-secondary font-light">Services</span> I Provide</Typography>  
     {/* Card  */}
    </div>
    <div className="grid gap-3 place-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
    {
     SERVICES.map((services, index) => (
      <div key={index} className="bg-white border p-4 max-w-[300px] h-[210px] border-[1.4px] rounded-md">
      <div className="w-16 h-16 rounded-full bg-gray-100"/>
      <Typography variant={'h5'} className="text-primary/96 font-bold my-2">{services?.title}</Typography>
      <Typography variant={'small'}>{services?.description}</Typography>
     </div> 
     ))  
    }
    </div>
   </div>   
  )  
}