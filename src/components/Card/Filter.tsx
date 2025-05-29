import React, { useEffect, useState } from "react";
import { Calendar, X } from "lucide-react";
import { Input } from "../ui/input";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

interface Column<TData, TValue> {
  getFilterValue: () => unknown;
  setFilterValue: (value: unknown) => void;
  columnDef: {
    meta?: {
      filterVariant?: "text" | "select" | "date" | "number";
      options?: { label: string; value: string }[];
      dateFormat?: "DD-MM-YYYY" | "MM-DD-YYYY" | "MMM DD, YYYY" | "DD/MM/YYYY" | "MM/DD/YYYY" | "YYYY-MM-DD" | "DD MMM YYYY" | "MMM D, YYYY";
    };
  };
}

export function Filter({ column }: { column: Column<any, unknown> }) {
  const columnFilterValue = column.getFilterValue();
  const { 
    filterVariant = "text", 
    options = [], 
    dateFormat = "DD-MM-YYYY" 
  } = column.columnDef.meta ?? {};

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
          dateFormat={filterVariant === "date" ? dateFormat : undefined}
        />
      );
  }
}

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  type = "text",
  dateFormat = "DD-MM-YYYY",
  ...props
}: {
  value: string;
  onChange: (value: string) => void;
  debounce?: number;
  type?: "text" | "date" | "number";
  dateFormat?: "DD-MM-YYYY" | "MM-DD-YYYY" | "MMM DD, YYYY" | "DD/MM/YYYY" | "MM/DD/YYYY" | "YYYY-MM-DD" | "DD MMM YYYY" | "MMM D, YYYY";
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "type">) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value, debounce, onChange]);

  const getDayjsFormat = (format: string): string => {
    const formatMap: Record<string, string> = {
      "DD-MM-YYYY": "DD-MM-YYYY",
      "MM-DD-YYYY": "MM-DD-YYYY", 
      "MMM DD, YYYY": "MMM DD, YYYY",
      "DD/MM/YYYY": "DD/MM/YYYY",
      "MM/DD/YYYY": "MM/DD/YYYY",
      "YYYY-MM-DD": "YYYY-MM-DD",
      "DD MMM YYYY": "DD MMM YYYY",
      "MMM D, YYYY": "MMM D, YYYY"
    };
    return formatMap[format] || "DD-MM-YYYY";
  };

  const formatDateForInput = (displayDate: string): string => {
    if (!displayDate) return "";
    
    const dayjsFormat = getDayjsFormat(dateFormat);
    const parsedDate = dayjs(displayDate, dayjsFormat, true);
    
    if (!parsedDate.isValid()) {
      return "";
    }
    return parsedDate.format("YYYY-MM-DD");
  };

  const formatDateFromInput = (inputDate: string): string => {
    if (!inputDate) return "";
    const parsedDate = dayjs(inputDate, "YYYY-MM-DD", true);
    if (!parsedDate.isValid()) {
      return "";
    }
    
    const dayjsFormat = getDayjsFormat(dateFormat);
    return parsedDate.format(dayjsFormat);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputDate = e.target.value;
    setValue(inputDate ? formatDateFromInput(inputDate) : "");
  };

  const getPlaceholder = () => {
    if (type === "date") {
      return `Select date...`;
    }
    return props.placeholder || (
      type === "number" ? "Search number..." : "Search..."
    );
  };

  const isValidDate = (dateString: string): boolean => {
    if (!dateString) return true; 
    const dayjsFormat = getDayjsFormat(dateFormat);
    return dayjs(dateString, dayjsFormat, true).isValid();
  };

  const hasDateError = type === "date" && value && !isValidDate(value);

  return (
    <div className="relative">
      <div className={`flex border shadow rounded w-30 items-center ${hasDateError ? 'border-red-300' : ''}`}>
        {type === "date" ? (
          <>
            <Input
              {...props}
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={getPlaceholder()}
              className={`h-6 border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm flex-1 ${
                hasDateError ? 'text-red-500' : ''
              }`}
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
            placeholder={getPlaceholder()}
            className="h-6 border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
          />
        )}
        
        {value && (
          <button onClick={() => setValue("")}>
            <X className="w-5 h-5 text-gray-400 pr-1 cursor-pointer" />
          </button>
        )}
      </div>
      
      {hasDateError && (
        <div className="absolute text-xs text-red-500 mt-1">
          Invalid date format. Expected: {dateFormat}
        </div>
      )}
    </div>
  );
}