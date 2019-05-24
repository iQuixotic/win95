import React from 'react';
import {  AboutPanel, ShutdownPanel, HelpPanel,  ContactPanel } from "../components";
import { Building, Cards, Cat, LilLibs, Portfolio, Puzzle } from '../assets';


export default {

    panels: {
      srcs: {
        'Portfolio': 'http://www.iquixotic.com',
        'Zenith': 'https://bank-manager-app-9485.herokuapp.com/',
        'Cat Clicker': 'https://iquixotic.github.io/cat-clicker-game/',
        'Lil Libs': 'https://req-libs.herokuapp.com/',
        'Picture Puzzles': 'https://picture-puzzles.herokuapp.com/',
        'Avatar Cards': 'https://avatar-card-tribute-game-89458.herokuapp.com/'
      },
    },
    
    pictures: {
      'Portfolio': <img className='panel-img' src={Portfolio} alt='#'/>,
      'Zenith': <img className='panel-img' src={Building} alt='#'/>,
      'Cat Clicker': <img  className='panel-img' src={Cat} alt='#'/>,
      'Lil Libs': <img className='panel-img' src={LilLibs} alt='#'/>,
      'Picture Puzzles': <img  className='panel-img' src={Puzzle} alt='#'/>,
      'Avatar Cards': <img className='panel-img' src={Cards} alt='#'/>
    },

    startMenu: {
      'menu-item1': { 
        head: 'About',
        show: <AboutPanel />,
        }, 
      'menu-item2': { 
        head: 'Help',
        show: <HelpPanel />,
        }, 
      'menu-item3': { 
        head: 'Contact',
        show: <ContactPanel />,
        }, 
      'menu-item-SD': { 
        head: 'Nope',
        show: <ShutdownPanel />,
        }
    },
    

    panelClassName: {
      Help: 'help-panel-outer',
      About: 'about-panel-outer',
      Computer: 'computer-panel-outer',
      Contact: 'contact-panel-outer',
      Nope: 'shutdown-panel-outer',
      Files: 'files-panel-outer',
      Internet: '',
      Recycle: 'recycle-panel-outer'
    }

}