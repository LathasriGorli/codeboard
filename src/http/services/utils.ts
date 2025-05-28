import { SortingFn } from "@tanstack/react-table";
import { Person } from "~/components/testing/Locations";

export const fuzzyArrayFilter = (row:any, columnId: string, filterValue: string): boolean => {
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

export const fuzzyStringFilter = (row: any, columnId: string, filterValue: string): boolean => {
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
