import React from 'react'
import Sidemenu from '../components/Sidemenu'
import Suggestion from '../components/Suggestion'
import Homecenter from '../components/Homecenter'
import Explore from './Explore'
import '../assets/Pages.css'
import { Routes, Route, useLocation } from 'react-router-dom';

export default function Home() {
    const { pathname } = useLocation();

  return (
    <div className='home'>
        <Sidemenu />
        <div style={{margin:'0 auto', display:'flex', justifyContent:'space-between', width:'90%'}}>
        <Homecenter />    
        <Suggestion />
        </div>
    </div>
  )
}
