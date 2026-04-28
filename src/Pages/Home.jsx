import Banner from '@/Components/Banner';
import LuxuryLocationsPage from '@/Components/LuxuryLocationsPage';
import MailingListPopup from '@/Components/MailingListPopup';
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const isShown = localStorage.getItem("mailPopupShown");

        if (!isShown) {
            setShowPopup(true);
        }
    }, []);

    const handleClose = () => {
        setShowPopup(false);
        localStorage.setItem("mailPopupShown", "true");
    };

    return (
        <div>
            <Banner />
            <LuxuryLocationsPage></LuxuryLocationsPage>

            {showPopup && (
                <MailingListPopup onClose={handleClose} />
            )}
        </div>
    );
};

export default Home;