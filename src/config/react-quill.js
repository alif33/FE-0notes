const conf = {
    theme: 'snow', // Choose the Snow theme, or 'bubble' for the Bubble theme
    modules: {
        toolbar: {
            container: [
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'image', 'video'],
                ['code'], // Add the 'code' option to the toolbar
            ],
        },// Show the toolbar
        clipboard: {
            matchVisual: false, // Disable pasting with rich text formatting
        },
        history: {
            delay: 2000, // Set the delay for undo/redo in milliseconds (2 seconds)
            maxStack: 500, // Set the maximum undo/redo stack size
            userOnly: false, // Allow programmatic changes to be added to the history stack
        },
    },
    placeholder: 'write here...',
};

export default conf

  