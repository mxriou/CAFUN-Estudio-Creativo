import React, { useEffect } from 'react';
import Footer from '../../components/common/Footer';
import './GaleriaPage.css';
import Masonry from "masonry-layout";

const GaleriaPage: React.FC = () => {
    useEffect(() => {
        // Asegurarse que los elementos del DOM estén cargados
        const container = document.querySelector('.galeria-root') as HTMLElement | null;
        if (!container) return;

        const msnry = new Masonry(container, {
            itemSelector: '.gallery-item',
            columnWidth: '.gallery-sizer',
            percentPosition: true,
            gutter: 10,
        });

        return () => {
            try { msnry.destroy(); } catch (e) { /* ignore */ }
        };
    }, []);

    return (
        <div className="galeria-root">
            <Footer />
        </div>
    );
};

export default GaleriaPage;
