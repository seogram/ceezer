import { useCallback } from "react";
import { Box, Button, Stack, InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

const RootStyle = styled(Box)(() => ({
  paddingTop: "20px",
  paddingBottom: "20px",
}));

const InputStyle = styled(InputBase)(({ theme }) => ({
  width: "30%",
  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
  paddingLeft: "10px",
  paddingRight: "10px",
  marginBottom: "20px",
  border: "1px solid",
}));

const ButtonStyle = styled(Button)(({ theme }) => ({
  width: "10%",
  [theme.breakpoints.down("sm")]: {
    width: "50%",
  },
}));

type SearchFormValues = {
  projectName: string;
}

const SearchBox = () => {
  const router = useRouter();

  const {
    reset,
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm<SearchFormValues>({
    mode: "onTouched",
    defaultValues: {
      projectName: "",
    },
  });

  const handleSearch = useCallback(
    (data: SearchFormValues) => {
      const searchQuery = encodeURIComponent(data.projectName).replace(
        /%20/g,
        ""
      );
      router.replace(`/?key=${searchQuery}`);
      reset();
    },
    [router, reset]
  );

  return (
    <RootStyle>
      <Stack alignItems="center">
        <Controller
          name="projectName"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <InputStyle
              {...field}
              autoFocus
              placeholder="Project name"
              fullWidth
              error={Boolean(error)}
            />
          )}
        />
        <ButtonStyle
          data-testid="searchButton"
          disabled={!isDirty}
          variant="contained"
          onClick={handleSubmit(handleSearch)}
          name="search"
        >
          Search
        </ButtonStyle>
      </Stack>
    </RootStyle>
  );
};

export default SearchBox;
