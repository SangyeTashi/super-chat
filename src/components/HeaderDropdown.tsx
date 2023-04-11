import { auth } from '../../firebase';

function HeaderDropdown() {
    return (
        <div className="bg-tertiary_dark p-3 absolute top-9  right-0 ">
            <button
                onClick={() => {
                    auth.signOut();
                }}
            >
                Logout
            </button>
        </div>
    );
}

export default HeaderDropdown;
