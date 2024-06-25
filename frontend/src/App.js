import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [inputWord, setInputWord] = useState('');
  const [selectedOption, setSelectedOption] = useState('clck');
  const [processedData, setProcessedData] = useState('');
  const [error, setError] = useState('');
  const [animationClass, setAnimationClass] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setAnimationClass('animate-text'); // Добавляем класс анимации

    try {
      const response = await axios.post('http://127.0.0.1:8000/create-short-link', {
        word: inputWord,
        selectedOption: selectedOption,
      });
      // const shortLink = response.data.short_link;
      const shortLink = response.data;
      setProcessedData(shortLink);
      setError('');
    } catch (error) {
      setError('An error occurred. Please try again.');
      setProcessedData('');
    }

    // Удаляем класс анимации через некоторое время
    setTimeout(() => {
      setAnimationClass('');
    }, 1000); // Время анимации в миллисекундах
  };

  return (
    <div className="app">
      <h1 className="heading">Сокращатель ссылок by sixscale</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Insert your link..."
            value={inputWord}
            onChange={(e) => setInputWord(e.target.value)}
          />
          <label htmlFor="selectDomain">Выберите домен:</label>
          <select id="selectDomain" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="clck">clck.ru</option>
            <option value="goo">goo.su</option>
            <option value="tiny">tinyurl.com</option>
            <option value="vk">vk.cc</option>
          </select>
          <button type="submit">Submit</button>
          {processedData && (
            <p style={{ fontSize: '25px' }} className={`result ${animationClass}`}>
              Ваша сокращенная ссылка: {processedData}
            </p>
          )}
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default App;


// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';
//
// const App = () => {
//   const [inputWord, setInputWord] = useState('');
//   const [selectedOption, setSelectedOption] = useState('gclnk');
//   const [processedData, setProcessedData] = useState('');
//   const [error, setError] = useState('');
//
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('http://127.0.0.1:8000/create-short-link', {
//         word: inputWord,
//         selectedOption: selectedOption,
//       });
//       const shortLink = response.data.short_link;
//       setProcessedData(shortLink);
//       setError('');
//     } catch (error) {
//       setError('An error occurred. Please try again.');
//       setProcessedData('');
//     }
//   };
//
//   return (
//     <div className="app">
//       <h1 className="heading">Сокращатель ссылок by sixscale</h1>
//       <div className="form-container">
//         <form onSubmit={handleSubmit} className="form">
//           <input
//             type="text"
//             placeholder="Insert your link..."
//             value={inputWord}
//             onChange={(e) => setInputWord(e.target.value)}
//           />
//           <label htmlFor="selectDomain">Выберите домен:</label>
//           <select id="selectDomain" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
//             <option value="gclnk">gclnk.com</option>
//             <option value="clck">clck.ru</option>
//             <option value="vk">vk.cc</option>
//             <option value="goo">goo.su</option>
//           </select>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//
//       {error && <p className="error">{error}</p>}
//
//       {processedData && (
//         <div className="result-container">
//           <p>Ваша сокращенная ссылка: {processedData}</p>
//         </div>
//       )}
//
//       <footer className="footer">
//         <p>Powered by sixscale</p>
//       </footer>
//     </div>
//   );
// };
//
// export default App;

// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';
//
// const App = () => {
//   const [inputWord, setInputWord] = useState('');
//   const [selectedOption, setSelectedOption] = useState('gclnk');
//   const [processedData, setProcessedData] = useState('');
//   const [error, setError] = useState('');
//
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('http://127.0.0.1:8000/create-short-link', {
//         word: inputWord,
//         selectedOption: selectedOption,
//       });
//       setProcessedData(response.data.result);
//       setError('');
//     } catch (error) {
//       setError('An error occurred. Please try again.');
//       setProcessedData('');
//     }
//   };
//
//   return (
//     <div className="app">
//       <h1 className="heading">Сокращатель ссылок by sixscale</h1>
//       <div className="form-container">
//         <form onSubmit={handleSubmit} className="form">
//           <input
//             type="text"
//             placeholder="Insert your link..."
//             value={inputWord}
//             onChange={(e) => setInputWord(e.target.value)}
//           />
//           <label htmlFor="selectDomain">Выберите домен:</label>
//           <select id="selectDomain" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
//             <option value="gclnk">gclnk.com</option>
//             <option value="clck">clck.ru</option>
//             <option value="vk">vk.cc</option>
//             <option value="goo">goo.su</option>
//           </select>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//
//       {error && <p className="error">{error}</p>}
//
//       {processedData && (
//         <div className="result-container">
//           <p>{processedData}</p>
//         </div>
//       )}
//
//       <footer className="footer">
//         <p>Powered by sixscale</p>
//       </footer>
//     </div>
//   );
// };
//
// export default App;