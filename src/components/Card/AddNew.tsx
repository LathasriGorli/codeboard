import { Plus } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function AddNewButton() {
  return (
    <Button className="flex items-center  w-22 h-7 justify-center gap-1 bg-[#005669] hover:bg-[#005669] text-white text-[11px] font-normal font-[urbanist]  leading-[normal] py-1 px-2 rounded-md shadow-none">
      <Plus/>
      Add New
    </Button>
  );
}