import { useParams } from "@tanstack/react-router";
import { Logins } from "../testing/Logins"
import { Sidebar } from "../testing/Sidebar"
import { Table } from "../testing/Table"
import { DoctorLeaveTable } from "../testing/DoctorLeaveTable";

export function Cards() {
    const { id } = useParams({ from : '/cards/$id'});

    switch (id) {
      case "table":
        return <Table id={id}/>;
      case "sidebar":
        return <Sidebar id={id} />;
      case "login":
        return <Logins id={id} />;
      case "leave-table":
        return <DoctorLeaveTable id={id} />;
      default:
        return <p>No component found for id {id}</p>;
    }
  }