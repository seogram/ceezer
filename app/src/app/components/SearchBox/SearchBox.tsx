import { useCallback } from "react";
import { Typography, Box, Button, Stack, InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

const RootStyle = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(2.5),
  paddingBottom: theme.spacing(2.5),
}));

const InputStyle = styled(InputBase)(({ theme }) => ({
  width: '30%',
  [theme.breakpoints.down('sm')]: {
    width: '80%',
  },
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  marginBottom: theme.spacing(2.5),
  border: `1px solid ${theme.palette.divider}`,
}));

const ButtonStyle = styled(Button)(({ theme }) => ({
  width: '10%',
  [theme.breakpoints.down('sm')]: {
    width: '50%',
  },
}));

type SearchFormValues = {
  projectName: string;
};

const SearchBox = () => {
  const router = useRouter();

  const { reset, control, handleSubmit, formState: { isDirty } } = useForm<SearchFormValues>({
    mode: 'onTouched',
    defaultValues: {
      projectName: '',
    },
  });

  const handleSearch = useCallback((data: SearchFormValues) => {
    const searchQuery = encodeURIComponent(data.projectName).replace(/%20/g, "+");
    router.replace(`/?key=${searchQuery}`);
    reset();
  }, [router, reset]);

  return (
    <RootStyle>
      <Stack direction="column" alignItems="center" spacing={2}>
        <Controller
          name="projectName"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <Typography variant="h6" gutterBottom>Enter Project Name</Typography>
              <InputStyle
                {...field}
                autoFocus
                placeholder="Project name"

                error={!!error}
              />
            </>
          )}
        />
        <ButtonStyle
          data-testid="searchButton"
          disabled={!isDirty}
          variant="contained"
          onClick={handleSubmit(handleSearch)}
        >
          Search
        </ButtonStyle>
      </Stack>
    </RootStyle>
  );
};

export default SearchBox;