import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


const dataState = atom({
    key: 'dataState', // unique ID (with respect to other atoms/selectors)
    default: {}, // default value (aka initial value)
  });
  

  export default dataState;