import React from 'react';
import { FaPlus, FaQuestion, FaHome, FaChartLine, FaTh, FaFile, FaUser } from 'react-icons/fa';

function Icon({type}) {
    const icons = {
        plus: <FaPlus/>,
        home: <FaHome/>,
        dashboard: <FaChartLine/>,
        spaces: <FaTh/>,
        documents: <FaFile/>,
        bugs: <FaUser/>,
    }

    const icon = icons[type]
    return icon ? icon : <FaQuestion/>;
}

export default Icon;