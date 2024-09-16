import article from "../../dummy-data/article.json"

export default function Content() {
    console.log(article);

    function decodeHTMLEntities(text) {
        if (typeof window !== "undefined") {
            // Only run on the client-side (browser)
            const doc = new DOMParser().parseFromString(text, "text/html");
            return doc.documentElement.textContent;
        }
        // Fallback for server-side
        return text;
    }

    return (
        <div style={{ height: '200vh' }}>
            <h1 className="text-4xl font-bold">{decodeHTMLEntities(article.title)}</h1>
        </div>
    );
}