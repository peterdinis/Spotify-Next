import { useState, useEffect, useMemo } from 'react';
import Icon from "../shared/Icons";
import {useAudio} from 'react-use';
import MyRange from '../shared/MyRange';
import { useSelector, useDispatch } from 'react-redux';
import { setControls } from '@/redux/slices/playerSlice';
import { RootState } from '@/redux';
import { useAppSelector } from '@/hooks/useRedux';


const Player: React.FC = () => {
  const dispatch = useDispatch();

  const {current} = useAppSelector((state: RootState) => state.player);

  const [audio, state, controls, ref] = useAudio({
    src: current.src,
  });

  useEffect(() => {
    controls.play()
}, [current]);

  useEffect(() => {
        dispatch(setControls(controls))
  }, []);

  

  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted)
        return 'mute'
    if (state.volume > 0 && state.volume < 0.33)
        return 'low'
    if (state.volume >= 0.33 && state.volume < 0.66)
        return 'mid'
    return 'full'
}, [state.volume, state.muted])

  return (
    <>
    
    </>
  )
}

export default Player;