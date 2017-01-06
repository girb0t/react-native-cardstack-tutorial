export const selectLibrary = (libaryId) => {
  return {
    type: 'SELECT_LIBRARY',
    payload: libaryId
  };
};
