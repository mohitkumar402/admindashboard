import React, { useState, useRef } from 'react';
import "../styles/Editorpage.css"; // Assuming you have a CSS file for styling

const ImprovedEditor = () => {
  const editorRef = useRef(null);
  const [savedPages, setSavedPages] = useState([]);

  const format = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  const savePage = () => {
    const content = editorRef.current.innerHTML;
    if (content.trim() === '' || content === 'Start writing here...') {
      alert("Editor is empty!");
      return;
    }
    const page = {
      id: Date.now(),
      content,
      title: `Page ${savedPages.length + 1}`
    };
    setSavedPages([page, ...savedPages]);
    editorRef.current.innerHTML = "Start writing here...";
  };

  const deletePage = (id) => {
    setSavedPages(savedPages.filter(page => page.id !== id));
  };

  return (
    <div className="editor-container">
      <h2 className="page-title">A basic text editor</h2>

      <div className="toolbar">
        <button onClick={() => format('bold')}><b>B</b></button>
        <button onClick={() => format('italic')}><i>I</i></button>
        <button onClick={() => format('underline')}><u>U</u></button>
        <button onClick={() => format('insertUnorderedList')}>• List</button>
        <button onClick={() => format('insertOrderedList')}>1. List</button>
        <button onClick={() => format('formatBlock', '<h1>')}>H1</button>
        <button onClick={() => format('formatBlock', '<h2>')}>H2</button>
        <button onClick={() => format('foreColor', prompt("Enter color (e.g., red or #ff0000):"))}>Color</button>
        <button onClick={() => format('createLink', prompt("Enter URL:"))}>Link</button>
        <button onClick={() => format('removeFormat')}>Clear</button>
      </div>

      <div
        ref={editorRef}
        className="editor"
        contentEditable
        suppressContentEditableWarning={true}
      >
        Start writing here...
      </div>

      <button className="save-btn" onClick={savePage}>Save Page</button>

      <div className="saved-pages">
        <h3>My Pages</h3>
        {savedPages.length === 0 && <p>No saved pages yet.</p>}
        {savedPages.map(page => (
          <div key={page.id} className="page-item">
            <h4>{page.title}</h4>
            <div className="page-preview" dangerouslySetInnerHTML={{ __html: page.content }} />
            <button className="delete-btn" onClick={() => deletePage(page.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImprovedEditor;
