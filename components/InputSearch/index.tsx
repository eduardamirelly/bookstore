import { styled } from '../../styles/stitches.config';

export const InputSearch = () => {
  const InputSearch = styled('input', {
    border: '2px solid $gray800',
    borderRadius: '20px',

    backgroundColor: 'white',
    paddingBlock: '.5rem',
    paddingInline: '1.25rem',
    marginTop: '2.125rem',
    marginBottom: '1.5rem',

    minWidth: '100%',
    height: '42px',
    position: 'relative',

    '@xl': {
      width: '530px',
    },
    '@md': {
      minWidth: '80%',
    },

    '&:after': {
      content: '',
      width: '100%',
      height: '100%',

      backgroundColor: '$yellow500',
      position: 'absolute',

      borderRadius: '20px',
      marginTop: '-38px',
      marginLeft: '-46px',
    },
  });

  return (
    <>
      <InputSearch
        type="search"
        name="search"
        id="search"
        placeholder="Type the name of book or author..."
      />
    </>
  );
};
