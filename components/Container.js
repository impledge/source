export default function SafeAreaContainer({children}) {
    return (
        <div className="mx-auto sm:px-6 lg:px-8 specified-container-element">
            {children}
        </div>
    )
};