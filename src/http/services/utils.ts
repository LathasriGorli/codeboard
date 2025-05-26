import { rankItem } from "@tanstack/match-sorter-utils";
import { Row , SortingFn} from "@tanstack/react-table"; 
import { DoctorLeave } from "~/components/testing/DoctorLeaveTable";
import { Person } from "~/components/testing/Locations"; 
import { Project } from "~/components/testing/Table";

export const fuzzyArrayFilter = (row: Row<Person>, columnId: string, filterValue: string): boolean => {
  if (!filterValue?.trim()) return true;

  const values = row.getValue(columnId) as string[] | undefined;
  if (!Array.isArray(values)) return false;

  const searchTerms = filterValue
    .toLowerCase()
    .split(/[\s,]+/)
    .filter(Boolean);

  return searchTerms.every((term) =>
    values.some((val) => val?.toLowerCase().includes(term))
  );
};

// export const fuzzyStringFilter = (row: Row<Person>, columnId: string, filterValue: string) => {
//   if (!filterValue) return true;

//   const columnValue = String(row.getValue(columnId) || "").toLowerCase();
//   const searchTerm = filterValue.toLowerCase().replace(/\s+/g, ' ').trim();

//   return columnValue.includes(searchTerm);
// };

export const fuzzyStringFilter = (row: Row<DoctorLeave>, columnId: string, filterValue: string): boolean => {
  if (!filterValue) return true;
  const columnValue = String(row.getValue(columnId) || "").toLowerCase();
  const searchTerms = filterValue.toLowerCase().split(/\s+/);
  return searchTerms.every(term => columnValue.includes(term));
};

export const fuzzySort: SortingFn<Person> = (rowA, rowB, columnId) => {
  const toStr = (val: unknown) =>
    String(Array.isArray(val) ? val.join(", ") : val || "").toLowerCase().replace(/\s+/g, '');
  return toStr(rowA.getValue(columnId)).localeCompare(toStr(rowB.getValue(columnId)));
};
