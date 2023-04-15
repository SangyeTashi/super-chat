import { atom } from 'recoil';

export const pagesStateAtom = atom({
    key: 'pagesStateAtom',
    default: 'PROFILE' as 'CHATPAGE' | 'PROFILE',
});
