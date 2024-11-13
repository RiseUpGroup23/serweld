import React from 'react';
import "./customersSection.css";

const CustomersSection: React.FC = () => {
    return (
        <div className="section-cont">
            <div className="section-information">
                <span className="companyTitle">
                    NUESTROS CLIENTES
                </span>
                <div className="gridCustomers">
                    {
                        [...Array(10)].map((_i, index) => (
                            <div key={index} className="customer-item">
                                <img src={`/customers/customer${index + 1}.png`} alt={`Customer-${index + 1}`} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CustomersSection;