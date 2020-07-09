const initial = {
  step1Complete: false,
  step2Complete: false,
  step3Complete: false,
};

export default function (state = initial, action) {
  const {payload, type} = action;
  switch(type) {
    default: return state;
  }
}
