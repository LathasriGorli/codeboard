import React, { useEffect, useState } from "react";
import { Calendar, X } from "lucide-react";
import { Input } from "../ui/input";

interface Column<TData, TValue> {
  getFilterValue: () => unknown;
  setFilterValue: (value: unknown) => void;
  columnDef: {
    meta?: {
      filterVariant?: "text" | "select" | "date" | "number";
      options?: { label: string; value: string }[];
    };
  };
}

export function Filter({ column }: { column: Column<any, unknown> }) {
  const columnFilterValue = column.getFilterValue();
  const { filterVariant = "text", options = [] } = column.columnDef.meta ?? {};

  switch (filterVariant) {
    case "select":
      return (
        <select
          onChange={(e) => column.setFilterValue(e.target.value || undefined)}
          value={String(columnFilterValue ?? "")}
          className="border shadow rounded h-6 text-sm"
        >
          <option value="">All</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );

    case "date":
    case "number":
    case "text":
    default:
      return (
        <DebouncedInput
          onChange={(value) => column.setFilterValue(value || undefined)}
          placeholder={
            filterVariant === "date" ? "Select date..." :
            filterVariant === "number" ? "Search number..." :
            "Search..."
          }
          type={filterVariant}
          value={String(columnFilterValue ?? "")}
        />
      );
  }
}

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  type = "text",
  ...props
}: {
  value: string;
  onChange: (value: string) => void;
  debounce?: number;
  type?: "text" | "date" | "number";
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "type">) {
  const [value, setValue] = useState(initialValue);
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value, debounce, onChange]);

  const formatDateForInput = (displayDate: string) => {
    if (!displayDate) return "";
    const parts = displayDate.split('-');
    if (parts.length !== 3) return "";
    
    const [day, month, year] = parts;
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputDate = e.target.value;
    if (inputDate) {
      const date = new Date(inputDate);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      setValue(`${day}-${month}-${year}`);
    } else {
      setValue("");
    }
    setShowDatePicker(false);
  };

  return (
    <div className="relative">
      <div className="flex border shadow rounded w-36 items-center">
        {type === "date" ? (
          <>
            <Input
              {...props}
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="h-6 border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm flex-1"
            />
            <input
              type="date"
              value={formatDateForInput(value)}
              onChange={handleDateChange}
              className="absolute opacity-0 pointer-events-none"
              ref={(ref) => {
                if (ref) {
                  (ref as any)._dateInput = ref;
                }
              }}
            />
            <button
              type="button"
              onClick={() => {
                const dateInput = document.querySelector('input[type="date"]') as HTMLInputElement;
                if (dateInput) {
                  dateInput.showPicker?.();
                }
              }}
              className="pr-1"
            >
              <Calendar className="w-4 h-4 text-gray-500 cursor-pointer" />
            </button>
          </>
        ) : (
          <Input
            {...props}
            type={type === "number" ? "number" : "text"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="h-6 border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
          />
        )}
        
        {value && (
          <button onClick={() => setValue("")}>
            <X className="w-5 h-5 text-gray-400 pr-1 cursor-pointer" />
          </button>
        )}
      </div>
    </div>
  );
}