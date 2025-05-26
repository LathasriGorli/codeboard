import { LayoutGrid, LoaderCircle } from "lucide-react";
import { UsersCard } from "../Card/UsersCard";
import { SidebarMenu } from "../Card/SidebarMenu";

// const items = [
//     { id: 1, title: "All", url: "#", imgURL: "https://placehold.co/30x30", total_commits: 2015},
//     { id: 2, title: "Riti Shan", url: "#", imgURL: "https://github.com/shadcn.png", total_commits: 55},
//     { id: 3, title: "Chhavi Kishore", url: "#", imgURL: "https://github.com/shadcn.png", total_commits: 315},
//     { id: 4, title: "Ilanthirayan Tak", url: "#", imgURL: "https://github.com/shadcn.png", total_commits: 120},
//     { id: 5, title: "Nelochan Tallapragada", url: "#", imgURL: "https://github.com/shadcn.png", total_commits: 420},
//     { id: 6, title: "Riti Shan", url: "#", imgURL: "https://github.com/shadcn.png", total_commits: 55},
//     { id: 7, title: "Chhavi Kishore", url: "#", imgURL: "https://github.com/shadcn.png", total_commits: 315},
//     { id: 8, title: "Ilanthirayan Tak", url: "#", imgURL: "https://github.com/shadcn.png", total_commits: 120},
//     { id: 9, title: "Nelochan Tallapragada", url: "#", imgURL: "https://github.com/shadcn.png", total_commits: 420},
//     { id: 10, title: "Riti Shan", url: "#", imgURL: "https://github.com/shadcn.png", total_commits: 55},
//     { id: 11, title: "Chhavi Kishore", url: "#", imgURL: "https://github.com/shadcn.png", total_commits: 315},
//     { id: 12, title: "Ilanthirayan Tak", url: "#", imgURL: "https://github.com/shadcn.png", total_commits: 120},
//     { id: 13, title: "Nelochan Tallapragada", url: "#", imgURL: "https://github.com/shadcn.png", total_commits: 420},
//     { id: 14, title: "Riti Shan", url: "#", imgURL: "https://github.com/shadcn.png", total_commits: 55},
//     { id: 15, title: "Chhavi Kishore", url: "#", imgURL: "https://github.com/shadcn.png", total_commits: 315},
//     { id: 16, title: "Ilanthirayan Tak", url: "#", imgURL: "https://github.com/shadcn.png", total_commits: 120},
//     { id: 17, title: "Nelochan Tallapragada", url: "#", imgURL: "https://github.com/shadcn.png", total_commits: 420},
//     { id: 18, title: "Riti Shan", url: "#", imgURL: "https://github.com/shadcn.png", total_commits: 55},
//     { id: 19, title: "Chhavi Kishore", url: "#", imgURL: "https://github.com/shadcn.png", total_commits: 315},
//     { id: 20, title: "Ilanthirayan Tak", url: "#", imgURL: "https://github.com/shadcn.png", total_commits: 120},
//     { id: 21, title: "Nelochan Tallapragada", url: "#", imgURL: "https://github.com/shadcn.png", total_commits: 420},
//     { id: 22, title: "Riti Shan", url: "#", imgURL: "https://github.com/shadcn.png", total_commits: 55},
//     { id: 23, title: "Chhavi Kishore", url: "#", imgURL: "https://github.com/shadcn.png", total_commits: 315},
//     { id: 24, title: "Ilanthirayan Tak", url: "#", imgURL: "https://github.com/shadcn.png", total_commits: 120},
//     { id: 25, title: "Nelochan Tallapragada", url: "#", imgURL: "https://github.com/shadcn.png", total_commits: 420},
//   ];

const items = [
  {id : 1, icon: LayoutGrid, title: 'Dashboard'},
  {id : 2, icon: LayoutGrid, title: 'Appointments'}, 
  {id : 3, icon: LayoutGrid, title: 'Hospitals & Clinics'},
  {id : 4, icon: LayoutGrid, title: 'Locations'},
  {id : 5, icon: LayoutGrid, title: 'Specializations'},
  {id : 6, icon: LayoutGrid, title: 'Doctors'},
  {id : 7, icon: LayoutGrid, title: 'Doctors Leave Management'},
  {id : 8, icon: LayoutGrid, title: 'Payments'},
  {id : 9, icon: LayoutGrid, title: 'E-Prescriptions'},
  {id : 10, icon: LayoutGrid, title: 'Medication Refill Requests'},
  {id : 11, icon: LayoutGrid, title: 'Medical Reports'},
  {id : 12, icon: LayoutGrid, title: 'Offers & Promotions'},
  {id : 13, icon: LayoutGrid, title: 'User Management'},
  {id : 14, icon: LayoutGrid, title: 'Settings'},
]
const details ={
    name: "User Name",
    role: "Frontend Developer",
}
export function Sidebar({ id }: {id: string}){
    return(
        <div>
            {/* <UsersCard users={items} /> */}
            <SidebarMenu items={items}/>
        </div>
    )
}