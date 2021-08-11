import './Drop.css';

const Drop = ({ contact, visible, setVisible }) => {
    return (visible) ? (
        <div className="contact-footer">
            <div className="footer-number">
                {contact.number}
            </div>
            <div className="footer-address">
                {contact.address}
            </div>
        </div>
    ) : <div className="contact-footer"> 

        </div> 
}

export default Drop;
