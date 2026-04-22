// FeatureList.js
import React from 'react';
import './FeatureList.scss';

const FeatureList = ({ features }) => (
    <div className="feature-list">
        {features.map((feature, index) => (
            <div key={index} className="feature-item">
                <img src={feature.image} alt={feature.name} />
                <p>{feature.name}</p>
            </div>
        ))}
    </div>
);

export default FeatureList;
