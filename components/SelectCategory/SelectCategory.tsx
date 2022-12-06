import React, { HtmlHTMLAttributes } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectViewport,
  StyledContent,
  SelectPortal,
  SelectIcon,
  SelectItemText,
  SelectItemIndicator,
  RadixSelectProps,
} from "./SelectCategory.styled";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { useRef } from "react";

interface SelectCategoryProps extends RadixSelectProps {
  data?: [string, string][];
}

const SelectCategory =
  // React.forwardRef
  // <HTMLButtonElement, SelectCurrencyProps>
  ({ data, ...restProps }: SelectCategoryProps) =>
    // ref
    {
      return (
        <Select {...restProps}>
          <SelectTrigger
          //   ref={ref}
          >
            <SelectValue placeholder="Categories"></SelectValue>
            <SelectIcon>
              <ChevronDownIcon />
            </SelectIcon>
          </SelectTrigger>
          <SelectPortal>
            <StyledContent>
              <SelectViewport>
                {data?.map(([value, name]) => (
                  <SelectItem value={value} key={value}>
                    <SelectItemText>
                      {value} - {name}
                    </SelectItemText>
                    <SelectItemIndicator>
                      <CheckIcon />
                    </SelectItemIndicator>
                  </SelectItem>
                ))}
              </SelectViewport>
            </StyledContent>
          </SelectPortal>
        </Select>
      );
    };

export default SelectCategory;
