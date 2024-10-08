import React from 'react';
import './prgPharmacies.css';
import { Container } from '@mui/material';
import '../App.css'

const Pharmacies: React.FC = () => {
    return (
       <>
       <div className='pharmaciesbgmaintop'>

            {/* Top section */}
            <section className="header-section">
                <h1 className="brand-name ibrtitle1">MedAsk</h1>
                <h2 className="page-title subtitle">Pharmacies</h2>
                <p className="description">
                    It is a long established fact that a reader will be distracted by the readable content of a page.
                </p>
            </section>
        </div>
        </>

    );
};

export default Pharmacies;