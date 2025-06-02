import React from 'react';
import '../../css/app.css';
import ucisee from '../ASSETS/images/LOGO-CARTOON.png';

const Header = () => {
    return (
        <nav>
            <ul className="container">
                <li className="dropdown"> // FEMMES //
                    <a href="article-display.html">
                        FEMME <i className="fa fa-angle-down"></i>
                    </a>
                    <div className="mega-menu">
                        <div className="container">
                            <div className="item"> // VETEMENTS FEMMES //
                                <h3>VETEMENTS</h3>
                                <ul>
                                    <li><a href="article-display.html">Afficher Tout</a></li>
                                    <li><a href="article-display.html">Jeans</a></li>
                                    <li><a href="article-display.html">Pantalons</a></li>
                                    <li><a href="article-display.html">Shorts</a></li>
                                    <li><a href="article-display.html">Tees</a></li>
                                    <li><a href="article-display.html">Pulls / Sweats</a></li>
                                    <li><a href="article-display.html">Manteaux / Vestes</a></li>
                                </ul>
                            </div>
                            <div className="item"> // ACCESSOIRES FEMMES //
                                <h3>ACCESSOIRES</h3>
                                <ul>
                                    <li><a href="article-display.html">Echarpes</a></li>
                                    <li><a href="article-display.html">Ceintures</a></li>
                                    <li><a href="article-display.html">Casquettes</a></li>
                                    <li><a href="article-display.html">Underwear</a></li>
                                    <li><a href="article-display.html">Contact Page No #5</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="dropdown"> // HOMMES //
                    <a href="article-display.html">
                        HOMMES <i className="fa fa-angle-down"></i>
                    </a>
                    <div className="mega-menu">
                        <div className="container">
                            <div className="item">
                                <h3>VETEMENTS</h3> // VETEMENTS HOMMES //
                                <ul>
                                    <li><a href="article-display.html">Afficher Tout</a></li>
                                    <li><a href="article-display.html">Jeans</a></li>
                                    <li><a href="article-display.html">Pantalons</a></li>
                                    <li><a href="article-display.html">Shorts</a></li>
                                    <li><a href="article-display.html">Tees</a></li>
                                    <li><a href="article-display.html">Pulls / Sweats</a></li>
                                    <li><a href="article-display.html">Manteaux / Vestes</a></li>
                                </ul>
                            </div>
                            <div className="item">
                                <h3>ACCESSOIRES</h3> // ACCESSOIRES HOMMES //
                                <ul>
                                    <li><a href="article-display.html">Echarpes</a></li>
                                    <li><a href="article-display.html">Ceintures</a></li>
                                    <li><a href="article-display.html">Casquettes</a></li>
                                    <li><a href="article-display.html">Underwear</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="dropdown"> // MARQUES //
                    <a href="article-display.html">
                        MARQUES <i className="fa fa-angle-down"></i>
                    </a>
                    <div className="mega-menu">
                        <div className="container">
                            <div className="item">
                                <ul>
                                    <li><a href="article-display.html">Acne Studios</a></li>
                                    <li><a href="article-display.html">Adidas</a></li>
                                    <li><a href="article-display.html">Aimé Leon Dore</a></li>
                                    <li><a href="article-display.html">AMI Paris</a></li>
                                    <li><a href="article-display.html">Asics</a></li>
                                    <li><a href="article-display.html">Autry</a></li>
                                    <li><a href="article-display.html">Bape</a></li>
                                </ul>
                            </div>
                            <div className="item">
                                <ul>
                                    <li><a href="article-display.html">Billionaire Boys Club</a></li>
                                    <li><a href="article-display.html">C.P. Company</a></li>
                                    <li><a href="article-display.html">Gallery Dept.</a></li>
                                    <li><a href="article-display.html">Golden Goose</a></li>
                                    <li><a href="article-display.html">Jordan</a></li>
                                    <li><a href="article-display.html">Kid Super</a></li>
                                    <li><a href="article-display.html">New Balance</a></li>
                                </ul>
                            </div>
                            <div className="item">
                                <ul>
                                    <li><a href="article-display.html">Nike</a></li>
                                    <li><a href="article-display.html">Oakley</a></li>
                                    <li><a href="article-display.html">Ralph Lauren</a></li>
                                    <li><a href="article-display.html">Rhude</a></li>
                                    <li><a href="article-display.html">Salomon</a></li>
                                    <li><a href="article-display.html">Sandro</a></li>
                                    <li><a href="article-display.html">Saucony</a></li>
                                </ul>
                            </div>
                            <div className="item">
                                <ul>
                                    <li><a href="article-display.html">Stone Islands</a></li>
                                    <li><a href="article-display.html">Supreme</a></li>
                                    <li><a href="article-display.html">The North Face</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="dropdown"> // SNEAKERS //
                    <a href="sneakers.html">
                        FOOTWEAR <i className="fa fa-angle-down"></i>
                    </a>
                </li>
                
                <li className="dropdown"> // ACCOUNT //
                    <a href="sneakers.html">
                        MON ESPACE <i className="fa fa-angle-down"></i>
                    </a>
                </li>
            </ul>

            <div className="logo-container">
                <a href="index.html">
                    <img src={ucisee} alt="LOGO" className="logo" />
                </a>
            </div>

            <div className="search-container">
                <div className="wrapper">
                    <div className="searchBar">
                        <input
                            id="searchQueryInput"
                            type="text"
                            name="searchQueryInput"
                            placeholder="ucisee.shop"
                            value=""
                        />
                        <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
                            <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                                <path
                                    fill="#666666"
                                    d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
