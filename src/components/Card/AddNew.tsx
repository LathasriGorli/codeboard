import { Plus } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function AddNewButton() {
  return (
    <Button className="flex items-center  w-24 h-8 justify-center gap-1 bg-[#005669] hover:bg-[#005669] text-white text-[11px] font-normal font-[urbanist]  leading-[normal] py-1 px-2 rounded-sm shadow-none">
      <Plus/>
      Add New
    </Button>
  );
}