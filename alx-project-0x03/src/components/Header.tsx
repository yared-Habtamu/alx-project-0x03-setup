import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header>
            <h1>ALX Project 0x03</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/signin">Sign In</Link>
                    </li>
                    <li>
                        <Link href="/signup">Sign Up</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;