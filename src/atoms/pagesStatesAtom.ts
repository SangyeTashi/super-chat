import { atom } from 'recoil';

export const pagesStateAtom = atom({
    key: 'pagesStateAtom',
    default: 'CHATPAGE' as 'CHATPAGE' | 'PROFILE',
});
