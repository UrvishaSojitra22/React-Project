import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css";

const footerColumns = [
    {
        title: "ABOUT",
        items: ["Contact Us", "About", "Careers", "Flipkart Stories", "Press"],
    },
    {
        title: "HELP",
        items: ["Payments", "Shipping", "Cancellation & Returns", "FAQ", "Report Infringement"],
    },
    {
        title: "CONSUMER POLICY",
        items: ["Return Policy", "Terms Of Use", "Security", "Privacy", "Grievance Redressal"],
    },
    {
        title: "SOCIAL",
        items: ["Facebook", "Twitter", "YouTube", "Instagram"],
    },
];

const footerAddress = [
    {
        title: "Mail Us:",
        lines: [
            "Flipkart Internet Private Limited,",
            "Vaishnavi Summit, Ground Floor,",
            "7th Main, 80 Feet Road, 4th Block,",
            "Koramangala, Bengaluru - 560034"
        ],
    },
    {
        title: "Registered Office Address:",
        lines: [
            "Flipkart Internet Private Limited,",
            "Vaishnavi Summit, Ground Floor,",
            "Beside Marigowda Road, Koramangala",
            "Bengaluru - 560034, Karnataka, India"
        ],
    },
];

const Footer = () => {
    return (
        <footer className="fk-footer">
            <div className="fk-footer__inner">
                <div className="fk-footer__columns">
                    {footerColumns.map((col) => (
                        <div className="fk-footer__col" key={col.title}>
                            <h6>{col.title}</h6>
                            <ul>
                                {col.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="fk-footer__address">
                    {footerAddress.map((block) => (
                        <div key={block.title}>
                            <h6>{block.title}</h6>
                            {block.lines.map((line) => (
                                <p key={line}>{line}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="fk-footer__bottom">
                <div className="fk-footer__social">
                    <span>Follow Us</span>
                    <div>
                        <FaFacebookF />
                        <FaInstagram />
                        <FaXTwitter />
                        <FaYoutube />
                    </div>
                </div>
                <div className="fk-footer__meta">
                    <p>© {new Date().getFullYear()} Flipkart Inspired UI · React + Firebase Storage</p>
                    <div className="fk-footer__payments">
                        <span>Visa</span>
                        <span>Mastercard</span>
                        <span>UPI</span>
                        <span>RuPay</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

