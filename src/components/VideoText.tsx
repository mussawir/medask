import '../App.css';

function VideoText({ text }: { text: string }) {
    console.log("VideoText component rendered"); // Debugging to check if it's rendered
    return (
        <div className="divcen">
            <p className="vidtext">
                {text}
            </p>
        </div>
    );
}

export default VideoText;
