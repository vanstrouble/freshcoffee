export default function Alert({ children }) {
    return (
        <div className="bg-red-100 border border-red-400 text-red-700 my-2 px-4 py-3 rounded relative" role="alert">
            {children}
        </div>
    );
}
