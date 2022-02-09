import React, { Component } from "react";

class TopNavBar extends Component {
    render(){
        return (
            <div>
                <nav class="mb-5 navbar navbar-expand-sm navbar-dark bg-dark">
                    <div class="container">
                        <a aria-current="page" class="navbar-brand active" href="/">Logo</a>
                        <button type="button" class="navbar-toggler">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse">
                            <li class="noBullet nav-item"><a href="/resale">Resale</a></li>
                            <li class="noBullet nav-item"><a href="/rental">Rental</a></li>
                            <li class="noBullet nav-item"><a href="/mortage">Mortage</a></li>
                            <li class="noBullet nav-item"><a href="/about">About Us</a></li>
                            <li class="noBullet nav-item"><a href="/login">Login</a></li>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default TopNavBar;