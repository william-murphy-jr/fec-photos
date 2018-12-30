const highLightCurrentSelection = function(targetToHighLight, len) {
  const hl = [];

  for (var i = 0; i < len; i++) {
    if (targetToHighLight === i) {
      hl.push({ value: true });
    }
    hl.push({ value: false });
  } 
  return hl;
};

export default highLightCurrentSelection;