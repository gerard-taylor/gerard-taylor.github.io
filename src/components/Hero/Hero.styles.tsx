import {alpha, styled} from '@mui/material/styles';

const Styled = styled('div')<{background:string}>(({ theme, background }) => {
  let bkgString = "beige";
  switch(background) {
    case "basic":
      bkgString = "beige";
      break;
  }

  return ({
    width: '100%',
    background: `${bkgString}`,
    paddingTop: '10rem',
    paddingBottom: '5rem'
  })
});

export default Styled