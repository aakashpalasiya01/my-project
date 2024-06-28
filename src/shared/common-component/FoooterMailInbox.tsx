import React from 'react'

const MailtoLink = ({ email, subject, body, children } :any) => {
    const handleClick = (event:any) => {
        const href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(href, '_blank'); 
    };

    return (
        <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
           onClick={handleClick}>
           {children}
        </a>
    );
};

export default MailtoLink