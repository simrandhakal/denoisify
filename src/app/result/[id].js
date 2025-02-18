export default function ResultPage({ params }) {
    const { id } = params;  // Get the dynamic ID from the URL

    return (
        <div>
            <h1>Result Page</h1>
            <p>The ID from the URL is: {id}</p>
        </div>
    );
}
