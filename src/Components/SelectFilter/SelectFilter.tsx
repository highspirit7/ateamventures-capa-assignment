// @ts-nocheck
import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";

const MenuProps = {
  PaperProps: {
    style: {
      minWidth: 130,
      width: 130,
      boxShadow: "none",
      border: "1px solid #939FA5",
      borderRadius: 4,
    },
  },
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "center",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "center",
  },
  variant: "menu",
};

type SelectFilterType = "가공방식" | "재료";
interface ISelectFilterProps {
  options: string[];
  selected: string[];
  setSelected: Dispatch<SetStateAction<string[]>>;
  type: SelectFilterType;
}

const SelectFilter: React.FC<ISelectFilterProps> = ({
  options,
  selected,
  setSelected,
  type,
}) => {
  const useStyles = makeStyles({
    formControl: {
      width: type === "재료" ? 90 : 108,
      marginRight: type === "재료" ? 24 : 8,
    },
  });

  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
    const value = event.target.value;

    setSelected(value);
  };

  const renderMaterialValue = (selected: string[]) => {
    if (selected && selected.length > 0) {
      return `${type}(${selected.length})`;
    } else {
      return type;
    }
  };

  return (
    <FormControl className={classes.formControl}>
      <StyledSelect
        labelId="mutiple-select-label"
        multiple
        displayEmpty
        value={selected}
        onChange={handleChange}
        renderValue={() => renderMaterialValue(selected)}
        MenuProps={MenuProps}
      >
        {options.map((option) => (
          <StyledMenuItem key={option} value={option}>
            <StyledListItemIcon>
              <StyledCheckbox
                checked={selected.indexOf(option) > -1}
                color="primary"
              />
            </StyledListItemIcon>
            <StyledListItemText primary={option} disableTypography />
          </StyledMenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

export default SelectFilter;

const StyledSelect = styled(Select)`
  border: 1px solid ${({ theme }) => theme.colors.graySub};
  border-radius: 4px;

  background: ${(props) =>
    props.value.length > 0 ? props.theme.colors.primary : "#fff"};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.second};
  }

  &:hover:before {
    border-bottom: none !important;
  }

  &:before {
    border: none;
  }

  &:after {
    content: none;
  }

  & > div {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    padding: 9px 24px 9px 12px;
    color: ${(props) =>
      props.value.length > 0 ? "#fff" : props.theme.colors.gray};
  }

  svg {
    margin-right: 10px;
    color: ${(props) =>
      props.value.length > 0 ? "#fff" : props.theme.colors.graySub};
  }
`;

const StyledCheckbox = styled(Checkbox)`
  padding: 6px;

  &.Mui-checked {
    color: ${({ theme }) => theme.colors.second};
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const StyledListItemIcon = styled(ListItemIcon)`
  min-width: 30px;
`;

const StyledListItemText = styled(ListItemText)`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.gray};
`;

const StyledMenuItem = styled(MenuItem)`
  padding: 0 6px;

  &.Mui-selected {
    background-color: transparent;
  }
`;
