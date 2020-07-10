export const checkStep1=(payload)=>{
  return {
    type: 'change_step1_state',
    payload: payload
  };
};
export const checkStep2=(payload)=>{
  return {
    type: 'change_step2_state',
    payload: payload
  };
};