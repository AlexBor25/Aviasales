const filtered = (arr, name) => {
  if(name === 'cheap'){
    return  arr.sort((prev,next) => prev.price - next.price);
  }
  if(name === 'faster'){
    return arr.sort( (prev, next) => (prev.segments[0].duration + prev.segments[1].duration) - (next.segments[0].duration + next.segments[1].duration));
  }
  if(name === 'optimal'){
    return arr.sort( (prev, next) => (prev.price + prev.segments[0].duration + prev.segments[1].duration) - (next.price + next.segments[0].duration + next.segments[1].duration));
  }
  return arr;
};

export default filtered;