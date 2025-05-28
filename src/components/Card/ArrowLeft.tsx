import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";

export function BackButton({onclick} : {onclick: () => void}) {
    return(
        <Button 
            className="bg-white text-black border shadow-none rounded-lg hover:bg-white hover:text-black border-gray-300 w-9"
            onClick={onclick}
        >
            <ArrowLeft />
        </Button>
    )
}