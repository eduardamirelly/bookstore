import { Trash } from "phosphor-react";
import { styled } from "../../styles/stitches.config";

export const BookMarkerStyle = styled('span', {
  position: 'absolute',
  top: '0',
  right: '0',

  width: '50px',
  height: '50px',

  backgroundColor: 'white',
  color: '$gray800',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderTopLeftRadius: '10px',
  borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px',
});

Trash.toString = () => '.trashIcon';

export const BookUnMarker = styled('span', {
  width: '100%',
  height: '5%',

  position: 'absolute',
  bottom: '0',
  left: '0',

  borderRadius: '10px',
  color: 'white',
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',

  transition: 'all .3s ease',

  '& svg': {
    visibility: 'hidden',

    transition: 'all .1s ease',
  },

  '&:hover': {
    height: '20%',
    backgroundColor: 'rgba(249, 120,  75, .8)',

    '& svg': {
      visibility: 'visible',
    },
  }
})
