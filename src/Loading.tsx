import BarLoader from 'react-spinners/BarLoader';

const Loading = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <BarLoader width={100} loading={true} color="#00a383" />
        </div>
    );
};
export default Loading;
