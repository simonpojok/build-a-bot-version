function applyStyle(element, binding) {
  Object.keys(binding.value).forEach((position) => {
    // eslint-disable-next-line no-param-reassign
    element.style[position] = binding.value[position];
  });
  // eslint-disable-next-line no-param-reassign
  element.style.position = 'absolute';
}

export default {
  bind: (element, binding) => {
    applyStyle(element, binding);
  },
  update: (element, binding) => {
    applyStyle(element, binding);
  },
  // inserted: () => {
  //   console.log('componentUpdated');
  // },
  // componentUpdated: () => {
  //   console.log('componentUpdated');
  // },
  // unbind: () => {
  //   console.log('unbind');
  // },
};
