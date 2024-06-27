import React from 'react'

import { IconButton, PlayIcon, PauseIcon } from '../../styles/styled-components/playPauseIcon'

interface PlayPauseIconProps {
  isPaused: boolean
  resumeSlider: () => void
  pauseSlider: () => void
}

const PlayPauseIcon: React.FC<PlayPauseIconProps> = ({ isPaused, resumeSlider, pauseSlider }) => {
  return <IconButton onClick={isPaused ? resumeSlider : pauseSlider}>{isPaused ? <PlayIcon /> : <PauseIcon />}</IconButton>
}

export default PlayPauseIcon
