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

    '@xl': {
      width: '535px',
    },
    '@md': {
      minWidth: '80%',
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
