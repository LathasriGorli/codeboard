import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";

export function BackButton({onclick} : {onclick: () => void}) {
    return(
        <Button 
            className="bg-white text-black border shadow rounded-lg hover:bg-white hover:text-black"
            onClick={onclick}
        >
            <ArrowLeft />
        </Button>
    )
}