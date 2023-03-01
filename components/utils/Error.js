export default function Error({ errors = [], ...props }) {
    return (
        <>
            {errors.length > 0 && (
                <div {...props}>
                    <div className="text-warning">
                        Whoops! Something went wrong.
                    </div>

                    <ul className="text-danger">
                        {errors.map(error => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}