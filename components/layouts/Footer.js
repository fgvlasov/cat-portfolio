import Link from 'next/link';
import {useEffect, useState} from 'react';
import Logo from '../common/Logo';
import FooterMenu from '../../data/FooterMenu';

const Footer = ({footerSetting = {}}) => {
    const [footerSettings, setFooterSettings] = useState({});

    useEffect(() => {
        if (footerSetting === "") {
            const setting = {
                showCopyrightOnly: true,
            };
            setFooterSettings(setting);
        } else {
            setFooterSettings(footerSetting);
        }
    }, [footerSetting]);

    return (
        <footer
            className={`axil-footer footer-default ${
                footerSettings.showCopyrightOnly ? "bg-color-lightest" : ""
            } ${
                footerSettings.style === "three"
                    ? "footer-style-3 bg-color-extra09"
                    : "theme-gradient-2"
            }`}
        >
            <div
                className={
                    !footerSettings.showCopyrightOnly && footerSettings.style !== "three"
                        ? "bg_image--2"
                        : ""
                }
            >
                {!footerSettings.showCopyrightOnly && (
                    <>
                        {footerSettings.style !== "three" ? (
                            <div className="ft-social-icon-wrapper ax-section-gapTop">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <ul className="ft-social-share d-flex justify-content-center liststyle flex-wrap">
                                                {FooterMenu.social?.map((socialItem, index) => (
                                                    <li key={`social-${index}`}>
                                                        <a href={socialItem.url} target="_blank" rel="noreferrer">
                                                            <i className={`fab ${socialItem.icon}`}/>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="axil-call-to-action callaction-style-2 pt--110 pt_sm--60 pt_md--80">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="inner">
                                                <div className="text">
                                                    <h2 className="title">
                                                        Interested in collaborations?
                                                    </h2>
                                                </div>
                                                <div className="button-wrapper">
                                                    <Link href="/contact">
                                                        <a className="axil-button btn-large btn-solid bgextra07-color">
                                                            <span className="button-text">Let&rsquo;s Talk</span>
                                                            <span className="button-icon"/>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="footer-top ax-section-gap">
                            <div className="container">

                            </div>
                        </div>
                    </>
                )}

                <div className="copyright copyright-default">
                    <div className="container">
                        <div className="row row--0 ptb--20 axil-basic-thine-line">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="inner text-center text-md-start">
                                    <p>© 2023. Все права на людей принадлежат котам!</p>
                                </div>
                            </div>
                            {/*<div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="quick-contact">
                                    <ul
                                        className={`link-hover d-flex justify-content-center justify-content-md-end liststyle ${
                                            footerSettings.style === "three" ? "color-var--2" : ""
                                        }`}
                                    >
                                        <li>
                                            <Link data-hover="Privacy Policy" href="/privacy-policy">
                                                Privacy Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">Terms of Use</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
									*/}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
