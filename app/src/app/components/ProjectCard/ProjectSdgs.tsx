import React, { useState } from 'react';
import { useProjectCardContext } from '@/app/context/ProjectCardContext';
import { Button, Stack, Typography, Tooltip, ClickAwayListener } from "@mui/material";

const ProjectSdgs = () => {
  const { project: { sdgs } } = useProjectCardContext();
  const [open, setOpen] = useState(false);

  if (!sdgs?.length) return null;

  const handleTooltipToggle = () => setOpen(prev => !prev);

  const shouldDisplayMoreItems = sdgs.length > 3;

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography data-test-id="sdgs">
        SDGs: {sdgs.slice(0, 3).join(", ")}
      </Typography>
      {shouldDisplayMoreItems && (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <div>
            <Tooltip
              PopperProps={{ disablePortal: true }}
              onClose={() => setOpen(false)}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title={<Typography variant='h6'>{sdgs.slice(3).join(", ")}</Typography>}
            >
              <Button onClick={handleTooltipToggle}>Show more</Button>
            </Tooltip>
          </div>
        </ClickAwayListener>
      )}
    </Stack>
  );
};

export default ProjectSdgs;