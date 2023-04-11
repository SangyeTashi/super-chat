import { atom } from 'recoil';

export const loginPageState = atom({
    key: 'loginPageState',
    default: 'LOGIN' as 'LOGIN' | 'SIGNUP',
});
