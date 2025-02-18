import { notFound } from "next/navigation";

export default async function ResultPage({ params }) {
    const { id } = params;  // Get the dynamic ID from the URL
    if (!id) {
        return notFound(); // Show 404 if ID is missing
    }

    return (
        <div>
            <h1>Result Page</h1>
            <p>The ID from the URL is: {id}</p>
        </div>
    );
}
