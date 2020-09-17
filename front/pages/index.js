import Link from 'next/link';
import React from 'react';

export default function Home() {
    return (
        <div className="container">
            <div>
                <Link href="/marque/kickers">Voir la page kickers</Link>
            </div>
            <div>
                <Link href="/clarks">Voir la page clarks</Link>
            </div>
            <div>
                <Link href="/edito/sarenza-x-daphne">Voir la Edito</Link>
            </div>
        </div>
    );
}
