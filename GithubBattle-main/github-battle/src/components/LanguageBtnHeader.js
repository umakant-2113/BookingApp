import React from 'react';
export default function LanguageButtonHeader(props) {
  let { handleClick, value } = props;
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  console.log(props);
  return (
    <header className='header'>
      <nav className='menus'>
        {languages.map((language) => {
          return (
            <button
              className={value === language ? 'active-menu' : ''}
              onClick={handleClick}
              key={language}
            >
              {language}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
