function FlashMessage(props) {
    return (
        <section className="services section" id="services">
            <h2 className="section__title">
                <span style={{ color: "orange" ,transition: 'margin-top 0.5s ease-in-out'}}>{props.msg}</span>
            </h2>
        </section>
    );
}

export default FlashMessage;