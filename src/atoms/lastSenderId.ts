import { atom } from 'recoil';

export const lastSenderIdState = atom({
    key: 'lastSenderIdState',
    default: '' as String,
});
