import React, { useState } from 'react';
import { useProjectCardContext } from '@/app/context/ProjectCardContext';
import { Button, Stack, Typography, Tooltip, ClickAwayListener } from "@mui/material";
import { Project } from "@/app/type";

const renderSdg = (sdgs: Project["sdgs"]) => {
  return sdgs.slice(0, 3).map(sdg => `${sdg} `)
}

const displayMoreItems = (sdgs: Project["sdgs"]) => {
  return (
    <Typography variant='h6'>
      {sdgs.slice(3).map(sdg => sdg).join(" ")}
    </Typography>
  )

}
function ProjectSdgs() {
  const { project: { sdgs } } = useProjectCardContext();
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const shouldDisplayMorItems = sdgs?.length > 3;
  if (!sdgs?.length) return null;

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography data-test-id="sdgs">SDGS: {renderSdg(sdgs)} </Typography>
      {shouldDisplayMorItems && (
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <div>
            <Tooltip
              PopperProps={{
                disablePortal: true,
              }}
              onClose={handleTooltipClose}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title={displayMoreItems(sdgs)}
            >
              <Button onClick={handleTooltipOpen}>Show more</Button>
            </Tooltip>
          </div>
        </ClickAwayListener>

      )}
    </Stack>
  )
}

export default ProjectSdgs;
