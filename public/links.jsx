import './links.css';
import Github from '../../../../Images/Github.svg';
import HackerRank from '../../../../Images/HackerRank.svg';
import LeetCode from '../../../../Images/LeetCode.svg';
import Linkedin from '../../../../Images/LinkedIn.svg';

const Crds = () => {
  return (
    <div className="imges">
      <a target='vahab' href="https://github.com/Vahabshaikh31"><span className='git'><img src={Github} className='git' alt="Github Logo" /> </span></a>
      <a target='vahab' href="https://www.linkedin.com/in/abdulvahab-shaikh-aa3464305/"><span className='lin'><img src={Linkedin} className='git' alt="LinkedIn Logo" /></span></a>
      <a target='vahab' href="https://leetcode.com/u/svahab33/"><span className='lee'> <img src={LeetCode} className='lee' alt="LeetCode Logo" /> </span></a>
      <a target='vahab' href="https://www.hackerrank.com/profile/svahab33"><span className='hac'><img src={HackerRank} className='hac' alt="HackerRank Logo" /></span>

      </a>   
      </div>
  );
};

export default Crds;
