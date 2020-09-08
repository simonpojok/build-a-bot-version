export default {
  bind: (element, binding) => {
    console.log(binding);
    Object.keys(binding.values).forEach((key) => {
      // eslint-disable-next-line no-param-reassign
      console.log(key);
      // element.style[key] = '5px';
    });
    // eslint-disable-next-line no-param-reassign
    element.style.position = 'absolute';
  },
};
