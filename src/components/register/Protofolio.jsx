import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardforSkills from './CardforSkills';
import TextWriter from './TextRiter';

function Portfolio() {
  const nameArray = ["R", "a", "j", "a", "n", "  ", "P", "r", "a", "j", "a", "p", "a", "t", "i"];
  const [currentElement, setCurrentElement] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentElement((prev) => prev + nameArray[currentIndex]);

      if (currentIndex === nameArray.length - 1) {
        setTimeout(() => {
          setCurrentElement('');
          setCurrentIndex(0);
        }, 150);
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    }, 150);

    return () => clearInterval(intervalId);
  }, [currentIndex]);
  return (
    <>
      <div className=" mx-4 p-4 bg-[#eeeef0] my-3 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 flex flex-col ">
            {/* Your content for the frist part */}
            <img className="rounded-full h-[200px] w-[200px]  md:h-[350px] md:w-[350px] mx-auto shadow-lg " src="https://avatars.githubusercontent.com/u/105105537?v=4" alt="" />
            <div className="flex flex-col items-center justify-center gap-5 mt-6 md:flex-row">
              <Link target="_blank" to="https://drive.google.com/file/d/1h0DL6204jaSWwB7LrX1rUUB7bWQu0p4u/view?usp=sharing"
                className="bg-[#00a5cf] px-4 py-2 text-white hover:bg-[#277da1] duration-200 rounded-md ">
                View Resume
              </Link>


            </div>
          </div>
          {/* second Part */}
          <div className="p-4">
            {/* Your content for the first part */}
            <div className="text-center flex justify-start items-center  h-16">
              {/* <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold text-[#ea580c] uppercase">{currentElement}</h2> */}
           
              <TextWriter />
            </div>
            <h2 className="text-center text-sm text-blue-700 mb-4 capitalize sm:mb-3 font-bold ">Web Developer | Frontend Engineer | Backend Engineer</h2>


            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#e0ddec] p-2 rounded-md  ">
              <div className="p-2">
                <ul className="list-disc list-inside">
                  <li className="text-[#1D4ED8] font-medium ">HTML5</li>
                  <li className="text-[#92400E] font-medium ">CSS3</li>
                  <li className="text-[#9D174D] font-medium ">JavaScript</li>
                  <li className="font-medium text-[#1D4ED8] ">Node Js & Express Js</li>
                  <li className="font-medium text-[#9d0208] ">Recat Native</li>
                </ul>
              </div>
              <div className="p-2">
                <ul className="list-disc list-inside">
                  <li className="font-medium text-[#111827] ">React JS</li>
                  <li className="font-medium text-[#7F1D1D] ">Redux Toolkit</li>
                  <li className="font-medium text-[#1D4ED8] ">Tailwind CSS, Bootstrap</li>
                  <li className="text-[#9D174D] font-medium ">MongoDB</li>
                </ul>
              </div>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Contact</h2>
            <div className='bg-[#cbced188] p-2 rounded-md'>
              <span className="text-red-600">
                <i className="fa-regular fa-envelope fa-beat"></i>{' '}
              </span>
              <Link
                to="https://mail.google.com/mail/u/0/#inbox"
                target="_blank"
                rel="no"
              >
                &nbsp;rajanprajapati743@gmail.com
              </Link>
              <br />{' '}
              <Link
                to="https://www.linkedin.com/in/rajan-prajapati-717337192/"
                target="_blank"
                rel="linkedIN"
                className="text-gray-600"
              >
                <i className="fa-brands fa-linkedin" style={{ color: ' #125fe2' }}></i>{' '}
                &nbsp;https://www.linkedin.com/in/rajan-prajapati-717337192/
              </Link>
              <br />
              <Link
                to="https://web.whatsapp.com/"
                target="_blank"
                rel="no"
                className="text-gray-600"
              >
                <i className="fa-brands fa-whatsapp" style={{ color: '#34da07' }}></i>{' '}
                &nbsp;
                <i className="fa-solid fa-mobile" style={{ color: '#f0059a' }}></i>
                +91-7460033731
              </Link>
              <br />
              <Link
                to="https://github.com/Rajan1851421"
                target="_blank"
                rel="No github"
                className="text-gray-600"
              >
                <i className="fa-brands fa-square-github fa-shake" style={{ color: '#0c0d0d' }}></i>{' '}
                &nbsp;Github Profile
              </Link>
            </div>
            <br />
            {/* Displaying the characters on the UI */}
            {/* <div className="text-3xl font-bold my-4">{currentElement}</div> */}
          </div>
          {/* Second Part */}
        </div>
      </div>
      {/* <CardforSkills /> */}
    </>
  );
}

export default Portfolio;
