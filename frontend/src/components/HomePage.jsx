/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";
import axios from "axios";
import { FaCloudUploadAlt } from "react-icons/fa";

const HomePage = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [code, setCode] = useState(`// Sample code \n const sum = () => {  \n  console.log(arguments) \n  return a + b \n }`);
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    setLoading(true);
    try {
      const response = await axios.post(`${BACKEND_URL}/ai/get-review/`, {
        code,
      });
      setReview(response.data);
    } catch (error) {
      setReview("❌ Error fetching AI review");
    }
    setLoading(false);
  }

  function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        setCode(e.target.result);
      };
      reader.readAsText(file);
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl">
      {/* Left section - Code Editor */}
      <div className="w-full md:w-1/2 h-full bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 overflow-auto">
        {/* File Upload */}
        <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-blue-400 transition duration-300 ease-in-out bg-gray-800 hover:bg-gray-700 text-gray-400">
          <FaCloudUploadAlt className="text-4xl text-blue-400 mb-2" />
          <span className="text-sm font-medium">
            {fileName ? fileName : "Click to Upload or Drag & Drop"}
          </span>
          <input
            type="file"
            accept=".js, .py, .css, .cpp, .cs, .ts, .c, .ts, .jsx, .tsx, .dart, .sh, .html, .json, .txt, .java"
            onChange={handleFileUpload}
            className="hidden"
          />
        </label>

        {/* Code Editor */}
        <div className="border border-gray-600 rounded-lg p-4 bg-gray-900 mt-4">
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) =>
              prism.highlight(code, prism.languages.javascript, "javascript")
            }
            padding={10}
            style={{ fontFamily: "Fire Code, monospace", fontSize: 16 }}
          />
        </div>

        <button
          onClick={reviewCode}
          className="w-full mt-4 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#1f5ba8] to-[#0897dc] hover:from-[#0897dc] hover:to-[#1f5ba8] rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
        >
          Review
        </button>
      </div>

      {/* Right section - AI Review Output */}
      <div className="w-full md:w-1/2 h-full bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 overflow-auto relative">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <div className="w-10 h-10 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
            <span className="ml-3 text-gray-400">Analyzing code...</span>
          </div>
        ) : (
          <div className="relative">
            <Markdown
              rehypePlugins={[rehypeHighlight]}
              className="text-gray-300"
            >
              {review}
            </Markdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;

