import '../CSS/Contact.css';

function Contact() {
    return (
        <div className="Contact pb-5">
            <div className='HeaderFont pb-1'>
                Contact
            </div>
            <div className='HeaderLine pb-3'>&nbsp;</div>
            <div className="container">
                <div className='WholeBox pt-5 pb-5'>
                    <div className='row'>
                        <div className="col-md-4 pt-5">
                            <i className="fa-solid fa-phone fa-2x"></i>
                            <div className='ContextMainText pt-4'>Phone</div>
                            <div className='ContextSubText pt-2'>010-9793-7502</div>
                        </div>

                        <div className="col-md-4 pt-5">
                            <i className="fa-solid fa-envelope fa-2x"></i>
                            <div className='ContextMainText pt-4'>E-Mail</div>
                            <div className='ContextSubText pt-2'>pk8008@naver.com</div>
                        </div>

                        <div className="col-md-4 pt-5">
                            <i class="fa-brands fa-github fa-2x"></i>
                            <div className='ContextMainText pt-4'>GitHub</div>
                            <div className='ContextSubText pt-2'>
                                <a href="https://github.com/sitecreater">https://github.com/sitecreater</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;