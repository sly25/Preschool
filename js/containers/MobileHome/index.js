import React from 'react';

import { Link } from 'react-router-dom';

import './style.less';

import MobileNav from '../../components/MobileNav';

export default class MobileHome extends React.Component{
    render(){
        return (
            <section class="mobilehome">
                <div class="homebackground"></div>
                <div class="mobilecoverbody">
                    <div className='mobileloginicon'>
                        <Link to="/login">
                            <i className="icon-user"></i>
                        </Link>
                    </div>
                        <div class="mobileheadimage">
                            <i className="icon-accessibility"></i>
                        </div>
                        <h1>幼教交互平台</h1>
                        <p>透明高效管理<br />让您时刻陪伴孩子成长</p>
                </div>
                <div className="mobilefooter">
                    <MobileNav />
                </div>
            </section>
        )
    }
}