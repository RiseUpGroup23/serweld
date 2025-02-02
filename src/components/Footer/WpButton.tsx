import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WpButton: React.FC = () => {
    return (
        <a href='https://wa.me/+543815439213?text=Hola!%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n
' className="float-button wp">
            <WhatsAppIcon sx={{ width: "60%", height: "100%", color: "white" }} />
        </a>
    );
};

export default WpButton;