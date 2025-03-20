const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold text-[#1f5ba8] mb-6">About This Project</h1>
      
      <p className="text-lg text-gray-300 max-w-3xl text-center leading-relaxed">
        This project currently uses <span className="text-[#0897dc] font-semibold">deepseek-r1-distill-qwen-32b</span>, <br />
        an advanced AI model trained using reinforcement learning that <br/><b> reviews the given code and gives suggestions</b>,
        using the <a href="https://console.groq.com/playground" target="_blank"><span className="text-[#0897dc] font-semibold"> groqCloud API </span> </a><br />
        It takes in a code snippet, analyzes the syntax, structure, and logic, 
        and then provides feedback or corrections in a <b>clear manner</b>.
      </p>

      <div className="mt-10 bg-gradient-to-r from-[#1f5ba8] to-[#0897dc] p-6 rounded-lg shadow-lg max-w-3xl">
        <h2 className="text-2xl font-bold text-white mb-3">How It Works?</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-200">
          <li>You input your <b>code snippet</b>.</li>
          <li>The model <b>analyzes</b> it for errors and improvements.</li>
          <li>It <b>suggests corrections and best practices</b>.</li>
          <li>Provides an <b>explanation</b> to help you learn and improve.</li>
        </ul>
      </div>

      <p className="text-lg text-gray-400 mt-6 italic">
        Review code like a pro! 🚀
      </p>
    </div>
  );
}

export default About;
