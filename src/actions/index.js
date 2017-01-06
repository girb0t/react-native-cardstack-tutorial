export const selectLibrary = (libaryId) => {
  return {
    type: 'select_library',
    action: libaryId
  };
};
