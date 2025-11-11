import React from "react";
import Barcode from 'react-barcode';
import { QRCodeCanvas } from 'qrcode.react';

export default function Code (props) {

    const {type, text, name} = props.props;

    const color = props.props.color? props.props.color : '#00a2ffff'

    const topStyle = {
        font: '20px monospace',
        padding: '1rem', 
        borderRadius: '8px', 
        border: '2px solid', 
        width: '90%',
        maxWidth: '400px', 
        margin: '1rem auto', 
        justifyContent: 'center',
        boxSizing: 'border-box'
    };

    const itemStyle = {
        backgroundColor: color,
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        textShadow: `
                    -1px -1px 0 #000,
                    1px -1px 0 #000,
                    -1px  1px 0 #000,
                    1px  1px 0 #000
                    `,
    };


    if (type === 'qr') {
    return (
        <div style={topStyle}>
            <h4 style={itemStyle}>
            QR Code: {name}
            </h4>
            <QRCodeCanvas value={text} size={128} />
            <p>{text}</p>
        </div>
    )
    }
    if (type === 'bc' || type === 'barcode') {
    return (
        <div style={topStyle}>
            <h4 style={itemStyle}>
            Barcode: {name}
            </h4>
            <Barcode value={text} />
        </div>
    )
    }
    return "ERROR"



}