const initial = {
  step1Complete: false,
  step2Complete: false,
  step3Complete: false,
};

export default function (state = initial, action) {
  const {type,payload} = action;
  switch(type) {
    case 'change_step1_state':
      return {...state,step1Complete:payload};
      case 'change_step2_state':
        console.log(payload);
        return {...state,step2Complete:payload};
    default: return state;
  }
}
