import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


const dataState = atom({
    key: 'dataState', // unique ID (with respect to other atoms/selectors)
    default: "0", // default value (aka initial value)
  });
  

  export default dataState;