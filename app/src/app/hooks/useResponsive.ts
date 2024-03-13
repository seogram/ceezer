// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// ----------------------------------------------------------------------
type Query = "up" | "down" | "only";
type Key = "xs" | "sm" | "md" | "lg" | "xl";

export function useResponsive(query :Query, key: Key) {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(key));

  const mediaDown = useMediaQuery(theme.breakpoints.down(key));

  const mediaOnly = useMediaQuery(theme.breakpoints.only(key));

  if (query === 'up') {
    return mediaUp;
  }

  if (query === 'down') {
    return mediaDown;
  }

  if (query === 'only') {
    return mediaOnly;
  }
}